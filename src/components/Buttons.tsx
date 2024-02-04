import React from 'react';
import {View, StyleSheet, Text, TextStyle, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Icons
import BackArrow from '../assets/icons/ArrowIcon';
// UI
import {colors} from '../constants/ui/colors';
import {radiuses} from '../constants/ui/radiuses';
import {spaces} from '../constants/ui/spaces';
// Redux
import {useAppSelector} from '../store/store';
// Utils
import {getFlexDirection, getIconDirection} from '../utils/styleUtil';
import {getFontFamily} from '../utils/fontFamily';
import {isIOS} from '../utils/platformUtil';
import {ButtonTypes} from '../constants/enums';

interface GenericButtonProps {
  text: string;
  textColor?: string;
  icon?: JSX.Element;
  fontSize?: number;
  lineHeight?: number;
  buttonType: ButtonTypes;
  onPress: () => void;
  isDisabled?: boolean;
  minWidth?: number;
  textAlign?: 'left' | 'right' | 'center';
}

const GenericButton = ({
  text,
  textColor,
  icon,
  fontSize = 18,
  lineHeight = isIOS() ? 0 : 25,
  buttonType,
  onPress,
  isDisabled = false,
  minWidth,
}: GenericButtonProps) => {
  const isRTL = useAppSelector(state => state.auth.isRTL);
  const fontFamily = getFontFamily(isRTL, 'bold');

  const textDynamicStyleObject: TextStyle = {
    color: textColor || colors.WHITE,
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
  };

  const buttonContainerStyle: TextStyle = {
    backgroundColor:
      buttonType === ButtonTypes.PRIMARY ? colors.PRIMARY : colors.TRANSPARENT,
    borderColor:
      buttonType === ButtonTypes.SECONDARY
        ? colors.PRIMARY
        : colors.TRANSPARENT,
    borderWidth: buttonType === ButtonTypes.SECONDARY ? 1 : 0,
    paddingHorizontal:
      buttonType === ButtonTypes.TEXT ? spaces._4px : spaces._24px,
    opacity: isDisabled ? 0.7 : 1,
    minWidth: minWidth ? minWidth : 160,
  };

  return (
    <Pressable
      style={[styles.buttonContainer, buttonContainerStyle]}
      onPress={isDisabled ? null : onPress}>
      <Text
        allowFontScaling={false}
        style={[styles.text, textDynamicStyleObject]}>
        {text}
      </Text>
      {icon}
    </Pressable>
  );
};

export const PrimaryButton = ({
  text,
  onPress,
  isDisabled,
}: {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
}) => (
  <GenericButton
    text={text}
    textColor={colors.WHITE}
    buttonType={ButtonTypes.PRIMARY}
    onPress={onPress}
    isDisabled={isDisabled}
  />
);

export const PrimaryButtonWithIcon = ({
  text,
  icon,
  isDisabled,
  onPress,
}: {
  text: string;
  icon: JSX.Element;
  isDisabled: boolean;
  onPress: () => void;
}) => {
  return (
    <GenericButton
      text={text}
      textColor={colors.WHITE}
      icon={icon}
      buttonType={ButtonTypes.PRIMARY}
      onPress={onPress}
      isDisabled={isDisabled}
    />
  );
};

export const SecondaryButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => (
  <GenericButton
    text={text}
    textColor={colors.PRIMARY}
    buttonType={ButtonTypes.SECONDARY}
    onPress={onPress}
  />
);

export const SecondaryButtonWithIcon = ({
  text,
  icon,
  onPress,
}: {
  text: string;
  icon: JSX.Element;
  onPress: () => void;
}) => {
  return (
    <GenericButton
      text={text}
      textColor={colors.WHITE}
      icon={icon}
      buttonType={ButtonTypes.SECONDARY}
      onPress={onPress}
    />
  );
};

export const TextButton = ({
  text,
  textColor,
  fontSize,
  onPress,
}: {
  text: string;
  textColor: string;
  fontSize: number;
  onPress: () => void;
}) => (
  <GenericButton
    text={text}
    textColor={textColor}
    fontSize={fontSize}
    buttonType={ButtonTypes.TEXT}
    onPress={onPress}
    minWidth={50}
  />
);

export const BackwardsButton = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.backButtonContainer}>
      <View style={styles.arrowIcon}>
        <BackArrow />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces._10px,
    paddingVertical: spaces._16px,
    borderRadius: radiuses._50px,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButtonContainer: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    textAlign: 'center',
  },
  arrowIcon: {
    transform: [{rotate: getIconDirection()}],
  },
});
