import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// Components
import {BoldText} from '../Base/Texts';
import Chip from '../Chip';
import BottomSheetLayout from './BottomSheetLayout';
// Icons
import {FontSizes} from '../../constants/ui/fonts';
// UI
import {spaces} from '../../constants/ui/spaces';
// Constants
import i18n from '../../translations/i18n';
import {timePeriodsForFiltering} from '../../data/timePeriods';
import {exercisesTypes} from '../../data/exerciseTypes';
// Models
import {TimePeriod} from '../../models/timePeriod';
// Utils
import {
  getFlexDirection,
  getSelfAlign,
  getTextAlign,
  hp,
} from '../../utils/styleUtil';

interface FilterExcHistoryBottomSheetProps {
  onSavePressed: () => void;
  onCloseSheet: () => void;
}

const FilterExcHistoryBottomSheet = ({
  onSavePressed,
  onCloseSheet,
}: FilterExcHistoryBottomSheetProps) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<string | null>();
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>();
  const [selectedEndDate, setSelectedendDate] = useState<string | null>();
  const [selectedExerciseType, setSelectedExerciseType] = useState<
    string | null
  >();

  const renderTimePeriodChips = () => {
    return (
      <>
        <BoldText
          children={i18n.t('bottomSheets.filtering.filterByPeriod')}
          size={FontSizes.regular}
          textAlign={getTextAlign()}
        />
        <View style={styles.chipsContainer}>
          <FlatList
            data={timePeriodsForFiltering}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderTimeChip}
            extraData={selectedTimePeriod}
            keyExtractor={item => item.name}
          />
        </View>
      </>
    );
  };

  const renderTimeChip = ({item}: {item: TimePeriod}) => {
    return (
      <Chip
        text={item.name}
        isSelected={item.name === selectedTimePeriod}
        onPress={() => {
          if (item.name === selectedTimePeriod) {
            setSelectedTimePeriod(null);
          } else {
            setSelectedTimePeriod(item.name);
          }
        }}
      />
    );
  };

  const renderDatePickers = () => {
    return (
      <>
        <BoldText
          children={i18n.t('bottomSheets.filtering.filterByDates')}
          size={FontSizes.regular}
          textAlign={getTextAlign()}
        />
        {/* TODO - add text inputs. once chosen - deselect time chips */}
      </>
    );
  };

  const renderWorkoutTypes = () => {
    return (
      <>
        <BoldText
          children={i18n.t('bottomSheets.filtering.filterByExercise')}
          size={FontSizes.regular}
          textAlign={getTextAlign()}
        />
        <View style={styles.chipsContainer}>
          <FlatList
            data={exercisesTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderWorkoutChip}
            extraData={selectedExerciseType}
            keyExtractor={item => item}
          />
        </View>
      </>
    );
  };

  const renderWorkoutChip = ({item}: {item: string}) => {
    return (
      <Chip
        text={item}
        isSelected={item === selectedExerciseType}
        onPress={() => {
          if (item === selectedTimePeriod) {
            setSelectedExerciseType(null);
          } else {
            setSelectedExerciseType(item);
          }
        }}
      />
    );
  };

  return (
    <BottomSheetLayout
      height={hp(65)}
      handleSave={onSavePressed}
      isVisible={true}
      onCloseSheetPressed={onCloseSheet}>
      <View style={styles.contentContainer}>
        {renderTimePeriodChips()}
        {renderDatePickers()}
        {renderWorkoutTypes()}
      </View>
    </BottomSheetLayout>
  );
};

export default FilterExcHistoryBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    alignSelf: getSelfAlign(),
    gap: spaces._24px,
    paddingVertical: spaces._24px,
  },
  chipsContainer: {
    width: '100%',
    flexDirection: getFlexDirection(),
  },
});
