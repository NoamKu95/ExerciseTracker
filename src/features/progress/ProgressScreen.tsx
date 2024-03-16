import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {RegularText} from '../../components/Base/Texts';
import DropDown from './components/DropDown';
import TitledCard from '../../components/Cards/TitledCard';
import CardWithRows from '../../components/Cards/CardWithRows';
import CardWithGraph from './components/CardWithGraph';
import ExercisesBottomSheet from '../../components/BottomSheets/ExercisesBottomSheet';
import Loader from '../../components/Base/Loader';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {progressPeriods} from '../../data/timePeriods';
// Models
import {Exercise} from '../../models/core/exercise';
import {BodyArea} from '../../models/bodyArea';
import {TimePeriod} from '../../models/timePeriod';
import {AppErrorTypes} from '../../models/error';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchProgressData} from './state/progressActions';
import {setSelectedExercise} from './state/progressSlice';
import {setError} from '../errorHandling/state/errorHandlingSlice';

const ProgressScreen = () => {
  const dispatch = useAppDispatch();

  // GLOBAL VARIABLES
  const isLoading = useAppSelector(state => state.progress.isLoading);
  const selectedExercise = useAppSelector<Exercise>(
    state => state.progress.chosenExercise,
  );
  const selectedBodyArea = useAppSelector(
    state => state.progress.chosenBodyArea,
  );
  const exerciseData = useAppSelector(state => state.progress.exerciseProgress);

  // LOCAL VARIABLES
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>(
    progressPeriods[0],
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    handleExerciseSelection(selectedBodyArea, selectedExercise);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ** RENDER FUNCTIONS **
  const renderDropdown = () => {
    return (
      <DropDown
        value={selectedExercise.name}
        onPress={() => {
          setIsSheetOpen(true);
        }}
      />
    );
  };

  const renderSummaryCard = () => {
    if (isLoading) {
      return (
        <TitledCard
          title={i18n.t('screens.progress.summaryCard.title')}
          children={<Loader customHeight={155} />}
        />
      );
    }

    return (
      <CardWithRows
        title={i18n.t('screens.progress.summaryCard.title')}
        contentRows={[
          {
            text: i18n.t('screens.progress.summaryCard.lastWeight'),
            infoText: `${exerciseData?.lastWeight} ${i18n.t('common.kg')}`,
            infoBgColor: colors.SECONDARY,
          },
          {
            text: i18n.t('screens.progress.summaryCard.avgWeight'),
            infoText: `${exerciseData?.averageWeight} ${i18n.t('common.kg')}`,
          },
          {
            text: i18n.t('screens.progress.summaryCard.maxWeight'),
            infoText: `${exerciseData?.maxWeight} ${i18n.t('common.kg')}`,
          },
        ]}
      />
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleTimePeriodChange = (newPeriod: TimePeriod) => {
    // dispatch - get data for new period for the selected exercise ; .then() setSelectedPeriod
    setSelectedPeriod(newPeriod);
  };

  const handleExerciseSelection = (bodyArea: BodyArea, exercise: Exercise) => {
    dispatch(
      fetchProgressData({
        exerciseID: exercise.id,
        period: selectedPeriod,
      }),
    )
      .then(() => {
        dispatch(setSelectedExercise({exercise, bodyArea}));
        setIsSheetOpen(false);
      })
      .catch(() => {
        dispatch(
          setError({
            type: AppErrorTypes.NETWORK_ERROR,
            message: '',
          }),
        );
      });
  };

  return (
    <ScrollScreenLayout screenTitle={i18n.t('screens.progress.title')}>
      <>
        <View style={styles.textContainer}>
          <RegularText
            children={i18n.t('screens.progress.subtitle')}
            size={FontSizes.regular}
            color={colors.SECONDARY_TEXT}
          />
        </View>
        {renderDropdown()}
        {renderSummaryCard()}
        {exerciseData && (
          <CardWithGraph
            graphData={exerciseData.graphData}
            selectedTimePeriod={selectedPeriod}
            handlePeriodChange={handleTimePeriodChange}
            isLoading={isLoading}
          />
        )}
        <ExercisesBottomSheet
          isVisible={isSheetOpen}
          currentArea={selectedBodyArea}
          currentExercise={selectedExercise}
          onClosePressed={() => {
            setIsSheetOpen(false);
          }}
          onSavePressed={handleExerciseSelection}
        />
      </>
    </ScrollScreenLayout>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  textContainer: {
    gap: spaces._8px,
  },
});
