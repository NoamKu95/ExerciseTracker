import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import CardWithRows from '../../components/Cards/CardWithRows';
import TimePeriodSelector from './components/TimePeriodSelector';
import LineGraph from './components/LineGraph';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {progressPeriods} from '../../data/timePeriods';
// Models
import {TimePeriod} from '../../models/timePeriod';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {ExerciseDayData} from '../../models/core/exercise';
import FilterExcHistoryBottomSheet from '../../components/BottomSheets/FilterExcHistoryBottomSheet';

const ProgressScreen = () => {
  const dispatch = useAppDispatch();

  // VARIABLES
  const currentExercise = useAppSelector(
    state => state.progress.chosenExercise,
  );
  const [selectionPeriod, setSelectedPeriod] = useState<TimePeriod>(
    progressPeriods[0],
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const exerciseData: ExerciseDayData[] = [
    {date: new Date(), weight: 60},
    {date: new Date('2024-02-22'), weight: 58},
    {date: new Date('2024-02-21'), weight: 55},
    {date: new Date('2024-02-20'), weight: 55},
    {date: new Date('2024-02-19'), weight: 52.5},
    {date: new Date('2024-02-18'), weight: 52.5},
    {date: new Date('2024-02-17'), weight: 52.5},
  ];

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
      <>
        <></>
      </>
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

  const renderGraphCard = () => {
    return (
      <>
        <TitledCard
          title={i18n.t('screens.progress.graphCard.title')}
          children={renderGraph()}
        />
      </>
    );
  };

  const renderGraph = () => {
    if (!currentExercise?.lastWeight) {
      return (
        <RegularText
          children={i18n.t('screens.progress.emptyState')}
          size={FontSizes.regular}
        />
      );
    }

    return (
      <>
        <TimePeriodSelector
          periods={progressPeriods}
          selectedPeriod={selectionPeriod}
          setSelectedPeriod={handleDateChange}
        />
        <LineGraph graphData={exerciseData} />
      </>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleDateChange = (newPeriod: TimePeriod) => {
    // dispatch - get data for new period for the selected exercise
    setSelectedPeriod(newPeriod);
  };

  return (
    <ScreenLayout>
      <>
        {renderTitles()}
        {renderDropdown()}
        {renderSummaryCard()}
        {renderGraphCard()}
        <FilterExcHistoryBottomSheet
          onSavePressed={() => {}}
          onCloseSheet={() => setIsSheetOpen(false)}
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
