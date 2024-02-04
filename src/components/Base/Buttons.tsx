import React from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Components
import {BoldText} from './Texts';
// Icons
import BackArrow from '../../assets/icons/ArrowIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import {ButtonType} from '../../constants/enums';
// Utils
import {getFlexDirection, getIconDirection} from '../../utils/styleUtil';
import {isIOS} from '../../utils/platformUtil';

interface GenericButtonProps {
  text: string;
  textColor: string;
  icon?: JSX.Element;
  fontSize?: number;
  lineHeight?: number;
  buttonType: ButtonType;
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  minWidth?: number;
  textAlign?: 'left' | 'right' | 'center';
}

const GenericButton = ({
  text,
  textColor,
  icon,
  fontSize = FontSizes.regular,
  lineHeight = isIOS() ? 0 : 25,
  buttonType,
  onPress,
  isDisabled = false,
  isLoading = false,
  minWidth = 160,
}: GenericButtonProps) => {
  const buttonContainerStyle: TextStyle = {
    backgroundColor: isDisabled
      ? colors.GRAY
      : buttonType === ButtonType.PRIMARY
      ? colors.PRIMARY
      : colors.TRANSPARENT,
    borderColor:
      buttonType === ButtonType.SECONDARY ? colors.PRIMARY : colors.TRANSPARENT,
    borderWidth: buttonType === ButtonType.SECONDARY ? 1 : 0,
    paddingHorizontal:
      buttonType === ButtonType.TEXT ? spaces._4px : spaces._24px,
    opacity: isDisabled ? 0.5 : 1,
    minWidth,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, buttonContainerStyle]}
      disabled={isDisabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={
            buttonType === ButtonType.PRIMARY ? colors.WHITE : colors.PRIMARY
          }
        />
      ) : (
        <>
          <BoldText
            size={fontSize}
            color={textColor}
            lineHeight={lineHeight}
            children={text}
          />
          {icon}
        </>
      )}
    </TouchableOpacity>
  );
};

export const PrimaryButton = (props: GenericButtonProps) => (
  <GenericButton
    {...props}
    buttonType={ButtonType.PRIMARY}
    textColor={colors.WHITE}
  />
);

export const SecondaryButton = (props: GenericButtonProps) => (
  <GenericButton
    {...props}
    buttonType={ButtonType.SECONDARY}
    textColor={colors.PRIMARY}
  />
);

export const TextButton = (props: GenericButtonProps) => (
  <GenericButton
    {...props}
    buttonType={ButtonType.TEXT}
    textColor={colors.PRIMARY}
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
    height: 56,
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
