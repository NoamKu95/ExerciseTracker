import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
// Components
import {RegularText} from '../../../components/Base/Texts';
// Icons
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';
// UI
import {colors} from '../../../constants/ui/colors';
import {spaces} from '../../../constants/ui/spaces';
import {radiuses} from '../../../constants/ui/radiuses';
import {FontSizes} from '../../../constants/ui/fonts';
// Utils
import {getFlexDirection} from '../../../utils/styleUtil';

interface DropDownProps {
  value: string;
  onPress: () => void;
}

const DropDown = ({value, onPress}: DropDownProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <RegularText children={value} size={FontSizes.regular} />
      <ChevronDownIcon />
    </Pressable>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._20px,
  },
});
