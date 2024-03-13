import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
// Components
import {BoldText, RegularText} from '../Base/Texts';
import Chip from '../Base/Chip';
import BottomSheetLayout from './BottomSheetLayout';
// Icons
import {FontSizes} from '../../constants/ui/fonts';
import CloseIcon from '../../assets/icons/CloseIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {shadowStyles} from '../../constants/ui/shadows';
// Constants
import i18n from '../../translations/i18n';
import {timePeriodsForFiltering} from '../../data/timePeriods';
import {exercisesTypes} from '../../data/exerciseTypes';
import {DateSelectionType, ExerciseSaveType} from '../../constants/enums';
// Models
import {TimePeriod} from '../../models/timePeriod';
import {FilteringObject} from '../../models/filtering';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {getFlexDirection, getSelfAlign, wp} from '../../utils/styleUtil';
import {formatDateToText} from '../../utils/timeUtil';

interface FilterExcHistoryBottomSheetProps {
  isOpen: boolean;
  onSavePressed: (filters: FilteringObject) => void;
  onCloseSheet: () => void;
}

const FilterExcHistoryBottomSheet = ({
  isOpen,
  onSavePressed,
  onCloseSheet,
}: FilterExcHistoryBottomSheetProps) => {
  // ** STATE VARIABLES **
  const localeLang = useAppSelector(state => state.auth.language);

  // ** LOCAL VARIABLES **
  // Date selector vars
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);
  const [dateSelectorType, setDateSelectorType] = useState(
    DateSelectionType.START,
  );
  const [selectorInitialDate, setSelectorInitialDate] = useState<Date>(
    new Date(),
  );
  const [selectorMinDate, setSelectorMinDate] = useState<Date | undefined>();
  const [selectorMaxDate, setSelectorMaxDate] = useState<Date | undefined>();

  // Filter Selection vars
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<
    string | undefined
  >();
  const [selectedStartDate, setSelectedStartDate] = useState<
    Date | undefined
  >();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>();
  const [selectedExerciseType, setSelectedExerciseType] = useState<
    ExerciseSaveType | undefined
  >();

  // ** RENDER FUNCTIONS **
  const renderTimePeriodChips = () => {
    return (
      <>
        <View style={styles.titleContainer}>
          <BoldText
            children={i18n.t('bottomSheets.filtering.filterByPeriod')}
            size={FontSizes.regular}
          />
        </View>
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
      <View style={styles.chip}>
        <Chip
          text={item.name}
          isSelected={item.name === selectedTimePeriod}
          onPress={() => {
            if (item.name === selectedTimePeriod) {
              setSelectedTimePeriod(undefined);
            } else {
              setSelectedTimePeriod(item.name);
              setSelectedStartDate(undefined);
              setSelectedEndDate(undefined);
            }
          }}
        />
      </View>
    );
  };

  const renderDateSelections = () => {
    return (
      <>
        <View style={styles.titleContainer}>
          <BoldText
            children={i18n.t('bottomSheets.filtering.filterByDates')}
            size={FontSizes.regular}
          />
        </View>

        <View style={styles.datesContainer}>
          <View style={styles.dateInputContainer}>
            <Pressable
              onPress={() => {
                handleDateInputPressed(DateSelectionType.START);
              }}>
              <RegularText
                children={
                  selectedStartDate
                    ? formatDateToText(selectedStartDate)
                    : i18n.t('bottomSheets.filtering.chooseDate')
                }
                size={FontSizes.small}
              />
            </Pressable>
            <Pressable
              style={styles.clearBtn}
              onPress={() => handleClearButtonPressed(DateSelectionType.START)}>
              <CloseIcon color={colors.GRAY} size={0.8} />
            </Pressable>
          </View>
          <RegularText
            children={i18n.t('bottomSheets.filtering.till')}
            size={FontSizes.regular}
          />
          <View style={styles.dateInputContainer}>
            <Pressable
              onPress={() => handleDateInputPressed(DateSelectionType.END)}>
              <RegularText
                children={
                  selectedEndDate
                    ? formatDateToText(selectedEndDate)
                    : i18n.t('bottomSheets.filtering.chooseDate')
                }
                size={FontSizes.small}
              />
            </Pressable>
            <Pressable
              style={styles.clearBtn}
              onPress={() => handleClearButtonPressed(DateSelectionType.END)}>
              <CloseIcon color={colors.GRAY} size={0.8} />
            </Pressable>
          </View>
        </View>
      </>
    );
  };

  const renderDatePicker = () => {
    return (
      <DatePicker
        modal
        mode="date"
        locale={localeLang.code}
        open={isDateSelectorOpen}
        date={selectorInitialDate}
        minimumDate={selectorMinDate}
        maximumDate={selectorMaxDate}
        onConfirm={date => {
          setIsDateSelectorOpen(false);
          handleNewDateSelected(date);
        }}
        onCancel={() => {
          setIsDateSelectorOpen(false);
        }}
        title={
          dateSelectorType === DateSelectionType.START
            ? i18n.t('bottomSheets.filtering.startDate')
            : i18n.t('bottomSheets.filtering.endDate')
        }
        confirmText={i18n.t('bottomSheets.filtering.confirm')}
        cancelText={i18n.t('bottomSheets.filtering.cancel')}
      />
    );
  };

  const renderWorkoutTypes = () => {
    return (
      <>
        <View style={styles.titleContainer}>
          <BoldText
            children={i18n.t('bottomSheets.filtering.filterByExercise')}
            size={FontSizes.regular}
          />
        </View>
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
      <View style={styles.chip}>
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
      </View>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleDateInputPressed = (type: DateSelectionType) => {
    switch (type) {
      case DateSelectionType.START:
        setDateSelectorType(DateSelectionType.START);
        setSelectorInitialDate(selectedStartDate ?? new Date());
        setSelectorMinDate(undefined);
        setSelectorMaxDate(new Date());
        break;
      case DateSelectionType.END:
        setDateSelectorType(DateSelectionType.END);
        setSelectorInitialDate(selectedEndDate ?? new Date());
        setSelectorMinDate(selectedStartDate);
        setSelectorMaxDate(new Date());
        break;
    }
    setIsDateSelectorOpen(true);
  };

  const handleNewDateSelected = (date: Date) => {
    switch (dateSelectorType) {
      case DateSelectionType.START:
        setSelectedStartDate(date);
        setSelectedEndDate(undefined);
        setSelectorMinDate(date);
        break;
      case DateSelectionType.END:
        setSelectedEndDate(date);
        break;
    }
    setSelectedTimePeriod(undefined);
  };

  const handleClearButtonPressed = (inputType: DateSelectionType) => {
    switch (inputType) {
      case DateSelectionType.START:
        setSelectedStartDate(undefined);
        break;
      case DateSelectionType.END:
        setSelectedEndDate(undefined);
        break;
    }
    setSelectorMinDate(undefined);
    setSelectorMaxDate(undefined);
  };

  const handleSaveFiltersPressed = () => {
    let selectedFilters: FilteringObject = {
      builtInPeriod: selectedTimePeriod,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      exerciseType: selectedExerciseType,
    };
    onSavePressed(selectedFilters);
  };

  return (
    <BottomSheetLayout
      handleSave={handleSaveFiltersPressed}
      isVisible={isOpen}
      onCloseSheetPressed={onCloseSheet}
      padding={spaces._0px}>
      <>
        <View style={styles.contentContainer}>
          {renderTimePeriodChips()}
          {renderDateSelections()}
          {renderWorkoutTypes()}
        </View>
        {renderDatePicker()}
      </>
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
  titleContainer: {
    paddingHorizontal: spaces._24px,
  },
  chipsContainer: {
    width: '100%',
    flexDirection: getFlexDirection(),
  },
  chip: {
    paddingHorizontal: spaces._8px,
  },
  datesContainer: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    paddingHorizontal: spaces._24px,
    alignItems: 'center',
    gap: spaces._12px,
  },
  dateInputContainer: {
    width: wp(35),
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._16px,
    ...shadowStyles.softShadow,
    alignItems: 'center',
  },
  clearBtn: {
    position: 'absolute',
    end: spaces._16px,
  },
});
