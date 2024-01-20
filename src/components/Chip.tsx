import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
// Components
import {RegularText} from './Texts';
// UI
import {colors} from '../constants/ui/colors';
import {radiuses} from '../constants/ui/radiuses';
import {spaces} from '../constants/ui/spaces';
import {FontSizes} from '../constants/ui/fonts';

interface Props {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const Chip = ({text, isSelected, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chipOuter, isSelected ? styles.selectedContainer : null]}>
      <RegularText
        children={text}
        size={FontSizes.small}
        color={isSelected ? colors.WHITE : colors.PRIMARY}
      />
    </Pressable>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chipOuter: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: radiuses._24px,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spaces._24px,
    paddingVertical: spaces._16px,
    marginHorizontal: spaces._8px,
  },
  selectedContainer: {
    backgroundColor: colors.PRIMARY,
  },
});
