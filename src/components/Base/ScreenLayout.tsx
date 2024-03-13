import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// Components
import {BoldText} from './Texts';
import {BackwardsButton, PrimaryButton} from './Buttons';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import {ButtonType} from '../../constants/enums';
// Utils
import {getFlexDirection, getSelfAlign, hp, wp} from '../../utils/styleUtil';
import {isIOS} from '../../utils/platformUtil';

interface ScreenLayout1Props {
  children: JSX.Element;
  screenTitle?: string;
  isBackButton?: boolean;
  onPress?: () => void;
  isButtonDisabled?: boolean;
  buttonText?: string;
  isLoading?: boolean;
  buttonIcon?: JSX.Element;
  paddingHorizontal?: number;
}

const ScreenLayout = ({
  children,
  screenTitle,
  isBackButton = false,
  onPress,
  isButtonDisabled = false,
  buttonText,
  isLoading = false,
  buttonIcon,
  paddingHorizontal = spaces._24px,
}: ScreenLayout1Props) => {
  const renderScreenHeader = () => {
    return (
      <View style={[styles.headerContainer, {alignSelf: getSelfAlign()}]}>
        <BoldText children={screenTitle!} size={FontSizes.large} />
      </View>
    );
  };
  const renderHeaderWithBack = () => {
    return (
      <View style={styles.headerContainer}>
        <BackwardsButton />
        <View style={styles.titleTextContainer}>
          <BoldText children={screenTitle!} size={FontSizes.medium} />
        </View>
      </View>
    );
  };

  const renderHeader = isBackButton ? renderHeaderWithBack : renderScreenHeader;

  return (
    <KeyboardAvoidingView
      behavior={isIOS() ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}>
      {screenTitle && renderHeader()}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={[styles.container, {paddingHorizontal}]}>{children}</View>
      </ScrollView>
      {buttonText && onPress && (
        <View style={styles.buttonContainer}>
          <PrimaryButton
            buttonType={ButtonType.PRIMARY}
            text={buttonText}
            onPress={onPress}
            isDisabled={isButtonDisabled}
            isLoading={isLoading}
            icon={buttonIcon}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: spaces._24px,
    gap: spaces._24px,
    height: '100%',
    backgroundColor: colors.BACKGROUND,
    paddingBottom: hp(15),
    width: wp(100),
  },
  headerContainer: {
    paddingTop: hp(7),
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: spaces._24px,
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(5),
  },
});
