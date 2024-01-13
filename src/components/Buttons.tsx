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
// Utils
import {getFlexDirection, getIconDirection} from '../utils/styleUtil';
import {getFontFamily} from '../utils/fontFamily';
import {isIOS} from '../utils/platformUtil';
// Redux
import {useAppSelector} from '../store/store';

interface GenericButtonProps {
  text: string;
  textColor?: string;
  icon?: JSX.Element;
  fontSize?: number;
  lineHeight?: number;
  buttonType: 'primary' | 'secondary' | 'text';
  onPress: () => void;
  isDisabled?: boolean;
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
}: GenericButtonProps) => {
  const isRTL = useAppSelector(state => state.auth.isRTL);
  const fontFamily = getFontFamily(isRTL, 'bold');

  const textDynamicStyleObject: TextStyle = {
    color: textColor || colors.PRIMARY,
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
  };

  const buttonContainerStyle: TextStyle = {
    backgroundColor:
      buttonType === 'primary' ? colors.PRIMARY : colors.TRANSPARENT,
    borderColor:
      buttonType === 'secondary' ? colors.PRIMARY : colors.TRANSPARENT,
    borderRadius: radiuses._50px,
    borderWidth: buttonType === 'secondary' ? 1 : 0,
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._24px,
    opacity: isDisabled ? 0.5 : 1,
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
    buttonType="primary"
    onPress={onPress}
    isDisabled={isDisabled}
  />
);

export const PrimaryButtonWithIcon = ({
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
      buttonType="primary"
      onPress={onPress}
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
    buttonType="secondary"
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
      buttonType="secondary"
      onPress={onPress}
    />
  );
};

export const TextButton = ({
  text,
  textColor,
  onPress,
}: {
  text: string;
  textColor: string;
  onPress: () => void;
}) => (
  <GenericButton
    text={text}
    textColor={textColor}
    buttonType="text"
    onPress={onPress}
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
