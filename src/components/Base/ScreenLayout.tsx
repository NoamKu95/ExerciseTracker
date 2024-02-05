import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// Components
import {BackwardsButton, PrimaryButton} from './Buttons';
// UI
import {spaces} from '../../constants/ui/spaces';
import {getFlexDirection, getSelfAlign, hp, wp} from '../../utils/styleUtil';
// Constants
import {ButtonType} from '../../constants/enums';
// Utils
import {isIOS} from '../../utils/platformUtil';
import {FontSizes} from '../../constants/ui/fonts';
import {BoldText} from './Texts';
import {colors} from '../../constants/ui/colors';

interface ScreenLayout1Props {
  children: JSX.Element;
  screenTitle?: string;
  isBackButton?: boolean;
  onPress?: () => void;
  isButtonDisabled?: boolean;
  buttonText?: string;
  isLoading?: boolean;
  icon?: JSX.Element;
}

const ScreenLayout = ({
  children,
  screenTitle,
  isBackButton = false,
  onPress,
  isButtonDisabled = false,
  buttonText,
  isLoading = false,
  icon,
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
      behavior={isIOS() ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      {screenTitle && renderHeader()}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>{children}</View>
      </ScrollView>
      {buttonText && onPress && (
        <View style={styles.buttonContainer}>
          <PrimaryButton
            buttonType={ButtonType.PRIMARY}
            text={buttonText}
            onPress={onPress}
            isDisabled={isButtonDisabled}
            isLoading={isLoading}
            icon={icon}
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
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    width: wp(100),
  },
  container: {
    paddingTop: hp(10),
    paddingHorizontal: spaces._24px,
    gap: spaces._24px,
    height: '100%',
    backgroundColor: colors.BACKGROUND,
    paddingBottom: hp(15),
  },
  headerContainer: {
    backgroundColor: colors.BACKGROUND,
    paddingTop: spaces._36px,
    paddingHorizontal: spaces._24px,
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
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
