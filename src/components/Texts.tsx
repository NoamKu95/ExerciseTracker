import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
// UI
import {colors} from '../constants/ui/colors';
// Redux
import store from '../store/store';
// Utils
import {getFontFamily} from '../utils/fontFamily';
import {isIOS} from '../utils/platformUtil';
import {
  getFlexDirection,
  getTextAlign,
  getWritingDirection,
} from '../utils/styleUtil';

interface GenericTextProps {
  color?: string;
  children: string;
  size: number;
  lineHeight?: number;
  textAlign?: 'right' | 'left' | 'center';
  letterSpacing?: number;
  underline?: boolean;
  fontWeight: 'normal' | 'medium' | 'bold';
}

const GenericText = ({
  children,
  color = colors.MAIN_TEXT,
  size,
  textAlign,
  lineHeight = isIOS() ? 0 : 25,
  letterSpacing = 0,
  underline = false,
  fontWeight,
}: GenericTextProps) => {
  const isRTL = store.getState().auth.isRTL;
  const fontFamily = getFontFamily(isRTL, fontWeight);

  const dynamicStyleObject: TextStyle = {
    color: color ? color : colors.MAIN_TEXT,
    fontSize: size,
    lineHeight: lineHeight,
    textAlign: textAlign ? textAlign : getTextAlign(),
    writingDirection: getWritingDirection(),
    letterSpacing: letterSpacing,
    textDecorationLine: underline ? 'underline' : 'none',
    fontWeight: fontWeight as TextStyle['fontWeight'],
    fontFamily: fontFamily,
  };

  return (
    <Text allowFontScaling={false} style={[styles().text, dynamicStyleObject]}>
      {children}
    </Text>
  );
};

export const RegularText = (props: Omit<GenericTextProps, 'fontWeight'>) => (
  <GenericText {...props} fontWeight="normal" />
);

export const MediumText = (props: Omit<GenericTextProps, 'fontWeight'>) => (
  <GenericText {...props} fontWeight="medium" />
);

export const BoldText = (props: Omit<GenericTextProps, 'fontWeight'>) => (
  <GenericText {...props} fontWeight="bold" />
);

const styles = () => {
  return StyleSheet.create({
    text: {
      flexDirection: getFlexDirection(),
    },
  });
};
