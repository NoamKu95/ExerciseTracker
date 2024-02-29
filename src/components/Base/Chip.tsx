import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
// Components
import {RegularText} from './Texts';
// UI
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';

interface ChipProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const Chip = ({text, isSelected, onPress}: ChipProps) => {
  return (
    <Pressable onPress={onPress} style={[styles(isSelected).chipOuter]}>
      <RegularText
        children={text}
        size={FontSizes.small}
        color={isSelected ? colors.WHITE : colors.PRIMARY}
      />
    </Pressable>
  );
};

export default Chip;

const styles = (isSelected: boolean) =>
  StyleSheet.create({
    chipOuter: {
      backgroundColor: isSelected ? colors.PRIMARY : colors.WHITE,
      borderWidth: 1,
      borderColor: isSelected ? colors.PRIMARY : colors.GRAY,
      borderRadius: radiuses._24px,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spaces._24px,
      paddingVertical: spaces._8px,
    },
  });
