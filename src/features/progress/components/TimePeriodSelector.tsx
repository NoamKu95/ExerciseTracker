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
// Models
import {TimePeriod} from '../../../models/TimePeriod';
// Utils
import {getFlexDirection} from '../../../utils/styleUtil';
import {getPeriodInTextFormat} from '../../../utils/timeUtil';

interface TimePeriodSelectorProps {
  availablePeriods: TimePeriod[];
  selectedPeriod: TimePeriod;
  setSelectedPeriod: (timePeriod: TimePeriod) => void;
}

const TimePeriodSelector = ({
  availablePeriods,
  selectedPeriod,
  setSelectedPeriod,
}: TimePeriodSelectorProps) => {
  const [selectedPeriodText, setPeriodText] = useState('');
  const [selectedPeriodEndDate, setCurrentPeriodEndDate] = useState<Date>(
    new Date(),
  );
  const [isFutureBtnDisabled, setIsFutureBtnDisabled] = useState(true);

  useEffect(() => {
    const periodText = getPeriodInTextFormat(
      selectedPeriod,
      selectedPeriodEndDate,
    );
    setPeriodText(periodText);

    const endDate = subDays(
      selectedPeriodEndDate,
      selectedPeriod.amountOfDays - 1,
    );

    setIsFutureBtnDisabled(isToday(endDate) || isAfter(endDate, new Date()));
  }, [selectedPeriod, selectedPeriodEndDate]);

  const goToPreviousTimePeriod = () => {
    setCurrentPeriodEndDate(prevDate => {
      const newDate = new Date(prevDate);
      return subDays(newDate, selectedPeriod.amountOfDays);
    });

    setSelectedPeriod({
      ...selectedPeriod,
      endDate: selectedPeriodEndDate,
      startDate: subDays(selectedPeriodEndDate, selectedPeriod.amountOfDays),
    });
  };

  const goToNextPeriod = () => {
    setCurrentPeriodEndDate(prevDate => {
      const newDate = new Date(prevDate);
      return addDays(newDate, selectedPeriod.amountOfDays);
    });

    setSelectedPeriod({
      ...selectedPeriod,
      endDate: addDays(selectedPeriodEndDate, selectedPeriod.amountOfDays),
      startDate: selectedPeriodEndDate,
    });
  };

  // ** RENDER FUNCTIONS **
  const renderTimePeriodOptions = () =>
    availablePeriods.map(period => (
      <TextButton
        key={period.name}
        text={period.name}
        onPress={() => setSelectedPeriod(period)}
        textColor={
          selectedPeriod.name === period.name ? colors.SECONDARY : colors.GRAY
        }
        fontSize={FontSizes.xsmall}
      />
    ));

  const renderFuturePeriodArrow = () => {
    return isFutureBtnDisabled ? (
      <Pressable
        style={styles.rightArrow}
        hitSlop={20}
        disabled={isFutureBtnDisabled}
        onPress={() => goToNextPeriod()}>
        <ChevronDown />
      </Pressable>
    ) : (
      <View />
    );
  };

  const renderPastPeriodArrow = () => {
    return (
      <Pressable
        style={styles.leftArrow}
        hitSlop={20}
        onPress={() => goToPreviousTimePeriod()}>
        <ChevronDown />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.generalPeriods}>{renderTimePeriodOptions()}</View>
      <View style={styles.separator} />
      <View style={styles.specificPeriod}>
        {renderFuturePeriodArrow()}
        <MediumText size={FontSizes.xsmall}>{selectedPeriodText}</MediumText>
        {renderPastPeriodArrow()}
      </View>
    </View>
  );
};

export default TimePeriodSelector;

const styles = StyleSheet.create({
  container: {
    gap: spaces._16px,
    paddingBottom: spaces._10px,
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
  rightArrow: {
    transform: [{rotate: '-90deg'}],
  },
  leftArrow: {
    transform: [{rotate: '90deg'}],
  },
});
