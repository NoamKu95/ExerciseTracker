import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// Components
import {BoldText} from '../Texts';
import Chip from '../Chip';
import BottomSheetLayout from './BottomSheetLayout';
// Icons
import {FontSizes} from '../../constants/ui/fonts';
// UI
import {spaces} from '../../constants/ui/spaces';
// Constants
import i18n from '../../translations/i18n';
import {defaultTimePeriods} from '../../data/timePeriods';
import {exercisesChips} from '../../data/exerciseTypes';
// Models
import {TimePeriod} from '../../models/timePeriod';
// Utils
import {
  getFlexDirection,
  getSelfAlign,
  getTextAlign,
  hp,
} from '../../utils/styleUtil';

const FilterWorkoutsHistoryBottomSheet = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<string | null>();
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
            data={defaultTimePeriods}
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
        {/* TODO - add text inputs */}
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
          {exercisesChips.map(item => {
            return (
              <Chip
                text={item}
                isSelected={item === selectedExerciseType}
                onPress={() => {
                  if (item === selectedExerciseType) {
                    setSelectedExerciseType(null);
                  } else {
                    setSelectedExerciseType(item);
                  }
                }}
              />
            );
          })}
        </View>
      </>
    );
  };

  return (
    <BottomSheetLayout
      height={hp(65)}
      handleSave={() => {}}
      isVisible={true}
      toggleBottomSheet={() => {}}>
      <View style={styles.contentContainer}>
        {renderTimePeriodChips()}
        {renderDatePickers()}
        {renderWorkoutTypes()}
      </View>
    </BottomSheetLayout>
  );
};

export default FilterWorkoutsHistoryBottomSheet;

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
