import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {addDays, isAfter, isToday, subDays} from 'date-fns';
// Components
import {TextButton} from '../../../components/Base/Buttons';
import {MediumText} from '../../../components/Base/Texts';
// Icons
import ChevronDown from '../../../assets/icons/ChevronDown';
// UI
import {colors} from '../../../constants/ui/colors';
import {spaces} from '../../../constants/ui/spaces';
import {FontSizes} from '../../../constants/ui/fonts';
// Constants
// Models
import {TimePeriod} from '../../../models/TimePeriod';
// Utils
import {getFlexDirection} from '../../../utils/styleUtil';
import {getPeriodInTextFormat} from '../../../utils/timeUtil';

interface TimePeriodSelectorProps {
  periods: TimePeriod[];
  selectedPeriod: TimePeriod;
  setSelectedPeriod: (timePeriod: TimePeriod) => void;
}

const TimePeriodSelector = ({
  periods,
  selectedPeriod,
  setSelectedPeriod,
}: TimePeriodSelectorProps) => {
  const [periodText, setPeriodText] = useState('');
  const [isFutureBtnDisabled, setIsFutureBtnDisabled] = useState(true);
  const [currentPeriodEndDate, setCurrentPeriodEndDate] = useState<Date>(
    new Date(),
  );

  useEffect(() => {
    const currentPeriodText = getPeriodInTextFormat(
      selectedPeriod,
      currentPeriodEndDate,
    );

    setPeriodText(currentPeriodText);

    const endDate = subDays(
      currentPeriodEndDate,
      selectedPeriod.amountOfDays - 1,
    );

    setIsFutureBtnDisabled(isToday(endDate) || isAfter(endDate, new Date()));
    console.log(selectedPeriod);
  }, [selectedPeriod, currentPeriodEndDate]);

  const goToPreviousTimePeriod = () => {
    setCurrentPeriodEndDate(prevDate => {
      const newDate = new Date(prevDate);
      return subDays(newDate, selectedPeriod.amountOfDays);
    });

    setSelectedPeriod({
      ...selectedPeriod,
      endDate: currentPeriodEndDate,
      startDate: subDays(currentPeriodEndDate, selectedPeriod.amountOfDays),
    });
  };

  const goToNextPeriod = () => {
    setCurrentPeriodEndDate(prevDate => {
      const newDate = new Date(prevDate);
      return addDays(newDate, selectedPeriod.amountOfDays);
    });

    setSelectedPeriod({
      ...selectedPeriod,
      endDate: addDays(currentPeriodEndDate, selectedPeriod.amountOfDays),
      startDate: currentPeriodEndDate,
    });
  };

  // ** RENDER FUNCTIONS **
  const renderGeneralTimePeriodTabs = () =>
    periods.map(period => (
      <TextButton
        key={period.name}
        text={period.name}
        onPress={() => setSelectedPeriod(period)}
        textColor={
          selectedPeriod.name === period.name ? colors.PRIMARY : colors.GRAY
        }
        fontSize={FontSizes.xsmall}
      />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.generalPeriods}>{renderGeneralTimePeriodTabs()}</View>
      <View style={styles.separator} />
      <View style={styles.specificPeriod}>
        <Pressable
          style={styles.leftArrow}
          hitSlop={50}
          onPress={() => goToPreviousTimePeriod()}>
          <ChevronDown />
        </Pressable>
        <MediumText size={FontSizes.xsmall}>{periodText}</MediumText>
        {isFutureBtnDisabled ? (
          <Pressable
            style={styles.rightArrow}
            hitSlop={50}
            disabled={isFutureBtnDisabled}
            onPress={() => goToNextPeriod()}>
            <ChevronDown />
          </Pressable>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default TimePeriodSelector;

const styles = StyleSheet.create({
  container: {
    gap: spaces._16px,
  },
  generalPeriods: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.GRAY,
  },
  specificPeriod: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftArrow: {
    transform: [{rotate: '-90deg'}],
  },
  rightArrow: {
    transform: [{rotate: '90deg'}],
  },
});
