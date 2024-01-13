import React from 'react';
import {View, StyleSheet, Text, TextStyle, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Icons
import ArrowIcon from '../assets/icons/ArrowIcon';
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
}

const GenericButton = ({
  text,
  textColor,
  icon,
  fontSize = 18,
  lineHeight = isIOS() ? 0 : 25,
  buttonType,
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
  };

  return (
    <View style={[styles.buttonContainer, buttonContainerStyle]}>
      <Text
        allowFontScaling={false}
        style={[styles.text, textDynamicStyleObject]}>
        {text}
      </Text>
      {icon}
    </View>
  );
};

export const PrimaryButton = ({text}: {text: string}) => (
  <GenericButton text={text} textColor={colors.WHITE} buttonType="primary" />
);

export const PrimaryButtonWithIcon = ({
  text,
  icon,
}: {
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <GenericButton
      text={text}
      textColor={colors.WHITE}
      icon={icon}
      buttonType="primary"
    />
  );
};

export const SecondaryButton = ({text}: {text: string}) => (
  <GenericButton
    text={text}
    textColor={colors.PRIMARY}
    buttonType="secondary"
  />
);

export const SecondaryButtonWithIcon = ({
  text,
  icon,
}: {
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <GenericButton
      text={text}
      textColor={colors.WHITE}
      icon={icon}
      buttonType="secondary"
    />
  );
};

export const TextButton = ({
  text,
  textColor,
}: {
  text: string;
  textColor: string;
}) => <GenericButton text={text} textColor={textColor} buttonType="text" />;

export const BackwardsButton = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.backButtonContainer}>
      <View style={styles.arrowIcon}>
        <ArrowIcon />
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
