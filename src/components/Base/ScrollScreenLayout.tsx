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
import {ScreenLayoutProps} from './ScreenLayout';
// Utils
import {getFlexDirection, getSelfAlign, hp} from '../../utils/styleUtil';
import {isIOS} from '../../utils/platformUtil';

const ScrollScreenLayout = ({
  children,
  screenTitle,
  isBackButton = false,
  onPress,
  isButtonDisabled = false,
  buttonText,
  isLoading = false,
  buttonIcon,
  paddingHorizontal = spaces._24px,
}: ScreenLayoutProps) => {
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
        scrollEnabled={true}
        contentContainerStyle={[styles.scrollViewContent, {paddingHorizontal}]}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {children}
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

export default ScrollScreenLayout;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
  },
  scrollViewContent: {
    justifyContent: 'space-between',
    paddingBottom: spaces._24px,
    gap: spaces._24px,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(5),
  },
});
