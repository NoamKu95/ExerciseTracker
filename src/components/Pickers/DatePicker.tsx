import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// Components
import {MediumText} from '../Texts';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Utils
import {
  getDayFromStringDate,
  getMonthFromStringDate,
  getYearFromStringDate,
} from '../../utils/dateUtil';
import {wp} from '../../utils/styleUtil';

interface DatePickerProps {
  pickedDate: string;
  setSelectedDate: (value: string) => void;
  minYear: number;
  maxYear?: number;
}

const DatePicker = ({
  pickedDate,
  setSelectedDate,
  minYear,
  maxYear = new Date().getFullYear(),
}: DatePickerProps) => {
  const [selectedDay, setSelectedDay] = useState(
    getDayFromStringDate(pickedDate),
  );
  const [selectedMonth, setSelectedMonth] = useState(
    getMonthFromStringDate(pickedDate),
  );
  const [selectedYear, setSelectedYear] = useState(
    getYearFromStringDate(pickedDate),
  );
  const updateDateOfBirth = (day: string, month: string, year: string) => {
    setSelectedDate(`${year}-${month}-${day}`);
  };

  const days = [...Array(31)].map((_, i) => (i + 1).toString());
  const months = [...Array(12)].map((_, i) => (i + 1).toString());
  const years = [...Array(maxYear - minYear)].map((_, i) =>
    (minYear + i).toString(),
  );

  // TODO - fix so that can't choose unrealistic dates like 31/2

  const renderDayPicker = () => {
    return (
      <View style={styles.pickerContainer}>
        <MediumText size={FontSizes.small} color={colors.BLACK}>
          {i18n.t('bottomSheets.datePicker.day')}
        </MediumText>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={itemValue => {
            setSelectedDay(itemValue);
            updateDateOfBirth(itemValue, selectedMonth, selectedYear);
          }}>
          {days.map(day => (
            <Picker.Item key={day} label={day} value={day} />
          ))}
        </Picker>
      </View>
    );
  };

  const renderMonthPicker = () => {
    return (
      <View style={styles.pickerContainer}>
        <MediumText size={FontSizes.small} color={colors.BLACK}>
          {i18n.t('bottomSheets.datePicker.month')}
        </MediumText>
        <Picker
          selectedValue={selectedMonth}
          style={styles.picker}
          onValueChange={itemValue => {
            setSelectedMonth(itemValue);
            updateDateOfBirth(selectedDay, itemValue, selectedYear);
          }}>
          {months.map(month => (
            <Picker.Item key={month} label={month} value={month} />
          ))}
        </Picker>
      </View>
    );
  };

  const renderYearPicker = () => {
    return (
      <View style={styles.pickerContainer}>
        <MediumText size={FontSizes.small}>
          {i18n.t('bottomSheets.datePicker.year')}
        </MediumText>
        <Picker
          selectedValue={selectedYear}
          style={styles.picker}
          onValueChange={itemValue => {
            setSelectedYear(itemValue);
            updateDateOfBirth(selectedDay, selectedMonth, itemValue);
          }}>
          {years.map(year => (
            <Picker.Item
              key={year}
              label={year}
              value={year}
              color={colors.MAIN_TEXT}
            />
          ))}
        </Picker>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderDayPicker()}
      {renderMonthPicker()}
      {renderYearPicker()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spaces._8px,
    flexDirection: 'row',
    gap: spaces._8px,
  },
  pickerContainer: {
    alignItems: 'center',
  },
  picker: {
    width: wp(30),
    color: colors.MAIN_TEXT,
  },
  pickerItem: {
    backgroundColor: colors.TRANSPARENT,
    fontSize: FontSizes.regular,
  },
});

export default DatePicker;
