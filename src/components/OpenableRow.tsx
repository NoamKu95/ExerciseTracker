import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
// Components
import {RegularText} from './Base/Texts';
// Icons
import ChevronDownIcon from '../assets/icons/ChevronDownIcon';
import ChevronLeftIcon from '../assets/icons/ChevronLeftIcon';
// UI
import {colors} from '../constants/ui/colors';
import {spaces} from '../constants/ui/spaces';
import {FontSizes} from '../constants/ui/fonts';
// Utils
import {getFlexDirection} from '../utils/styleUtil';

interface OpenableRowProps {
  text: string;
  children: JSX.Element;
  isLast?: boolean;
}

const OpenableRow = ({text, children, isLast = false}: OpenableRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles(isLast).bottomBorder]}>
      <Pressable style={styles().container} onPress={() => setIsOpen(!isOpen)}>
        <RegularText children={text} size={FontSizes.regular} />
        {isOpen ? <ChevronDownIcon /> : <ChevronLeftIcon />}
      </Pressable>
      {isOpen && children}
    </View>
  );
};

export default OpenableRow;

const styles = (isLast?: boolean) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: spaces._4px,
      flexDirection: getFlexDirection(),
      justifyContent: 'space-between',
    },
    bottomBorder: {
      borderWidth: 1,
      borderColor: colors.TRANSPARENT,
      borderBottomColor: isLast ? colors.TRANSPARENT : colors.VERY_LIGHT_GRAY,
      marginBottom: isLast ? spaces._0px : spaces._16px,
      paddingBottom: isLast ? spaces._0px : spaces._16px,
    },
  });
