import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import DropDown from './components/DropDown';
import CardWithRows from '../../components/Cards/CardWithRows';
import CardWithGraph from './components/CardWithGraph';
import ExercisesBottomSheet from '../../components/BottomSheets/ExercisesBottomSheet';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {progressPeriods} from '../../data/timePeriods';
// Models
import {Exercise} from '../../models/core/exercise';
import {ExerciseResponse} from '../../models/networkingObjects/exerciseResponse';
import {BodyArea} from '../../models/bodyArea';
import {TimePeriod} from '../../models/timePeriod';
// Redux
import {useAppSelector} from '../../store/store';

const ProgressScreen = () => {
  // VARIABLES
  const isLoading = useAppSelector(state => state.progress.isLoading);
  const currentExercise = useAppSelector<ExerciseResponse>(
    state => state.progress.chosenExercise,
  );
  const currentBodyArea = useAppSelector(
    state => state.progress.chosenBodyArea,
  );
  const exerciseData = useAppSelector(state => state.progress.exerciseData);
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>(
    progressPeriods[0],
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    // dispatch - get data for selected exercise
  }, [currentExercise]);

  // ** RENDER FUNCTIONS **
  const renderTitles = () => {
    return (
      <View style={styles.textContainer}>
        <BoldText
          children={i18n.t('screens.progress.title')}
          size={FontSizes.large}
        />
        <RegularText
          children={i18n.t('screens.progress.subtitle')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderDropdown = () => {
    return (
      <DropDown
        value={currentExercise.name}
        onPress={() => {
          setIsSheetOpen(true);
        }}
      />
    );
  };

  const renderSummaryCard = () => {
    return (
      <CardWithRows
        title={i18n.t('screens.progress.summaryCard.title')}
        contentRows={[
          {
            text: i18n.t('screens.progress.summaryCard.lastWeight'),
            infoText: `${currentExercise?.lastWeight} ${i18n.t('common.kg')}`,
            infoBgColor: colors.SECONDARY,
          },
          {
            text: i18n.t('screens.progress.summaryCard.avgWeight'),
            infoText: `${currentExercise?.averageWeight} ${i18n.t(
              'common.kg',
            )}`,
          },
          {
            text: i18n.t('screens.progress.summaryCard.maxWeight'),
            infoText: `${currentExercise?.maxWeight} ${i18n.t('common.kg')}`,
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
    console.log(bodyArea, exercise);
    // dispatch - get data for the new exercise
  };

  return (
    <ScreenLayout>
      <>
        {renderTitles()}
        {renderDropdown()}
        {renderSummaryCard()}
        <CardWithGraph
          graphData={exerciseData}
          selectedTimePeriod={selectedPeriod}
          handlePeriodChange={handleTimePeriodChange}
          isLoading={isLoading}
        />
        <ExercisesBottomSheet
          isVisible={isSheetOpen}
          currentArea={currentBodyArea}
          currentExercise={currentExercise}
          onClosePressed={() => {
            setIsSheetOpen(false);
          }}
          onSavePressed={handleExerciseSelection}
        />
      </>
    </ScreenLayout>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  textContainer: {
    gap: spaces._8px,
  },
});
