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
  textColor?: string;
  icon?: JSX.Element;
  fontSize?: number;
  lineHeight?: number;
  buttonType?: ButtonType;
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  minWidth?: number;
  textAlign?: 'left' | 'right' | 'center';
}

const GenericButton = ({
  text,
  textColor = colors.MAIN_TEXT,
  icon,
  fontSize = FontSizes.regular,
  lineHeight = isIOS() ? 0 : 25,
  buttonType = ButtonType.PRIMARY,
  onPress,
  isDisabled = false,
  isLoading = false,
  minWidth = 160,
  textAlign = 'center',
}: GenericButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        getButtonContainerStyle(buttonType, isDisabled, minWidth),
      ]}
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
            textAlign={textAlign}
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
    buttonType={ButtonType.TEXT}
    textColor={colors.PRIMARY}
    minWidth={50}
    {...props}
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

const getButtonContainerStyle = (
  buttonType: ButtonType,
  isDisabled: boolean,
  minWidth: number,
): TextStyle => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDisabled
        ? colors.GRAY
        : buttonType === ButtonType.PRIMARY
        ? colors.PRIMARY
        : colors.TRANSPARENT,
      borderColor:
        buttonType === ButtonType.SECONDARY
          ? colors.PRIMARY
          : colors.TRANSPARENT,
      borderWidth: buttonType === ButtonType.SECONDARY ? 1 : 0,
      paddingHorizontal:
        buttonType === ButtonType.TEXT ? spaces._4px : spaces._24px,
      paddingVertical:
        buttonType === ButtonType.TEXT ? spaces._8px : spaces._16px,
      opacity: isDisabled ? 0.5 : 1,
      height: buttonType === ButtonType.TEXT ? null : 56,
      minWidth,
    },
  }).container;
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces._10px,
    borderRadius: radiuses._50px,
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
