import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// Constants
import i18n from '../translations/i18n';
// Components
import {PrimaryButtonWithIcon} from '../components/Buttons';
import {BoldText, RegularText} from '../components/Texts';
import AppTextInput from '../components/TextInput';
// Icons
import SparkleIcon from '../assets/icons/SparkleIcon';
// UI
import {spaces} from '../constants/ui/spaces';
import {colors} from '../constants/ui/colors';
import {FontSizes} from '../constants/ui/fonts';
// Utils
import {isIOS} from '../utils/platformUtil';
import {
  isRegistrationDataValid,
  validateEmail,
  validateFullName,
  validatePassword,
} from '../utils/validators';
// Redux
import {useAppSelector} from '../store/store';
import {getFlexDirection, hp, wp} from '../utils/styleUtil';
import {registrationHeroImage} from '../constants/ui/images';

const RegistrationScreen = () => {
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllInputsValid, setIsAllInputsValid] = useState(false);

  useEffect(() => {
    const validationResponse = isRegistrationDataValid(name, email, password);
    setIsAllInputsValid(validationResponse);
  }, [name, email, password]);

  const handleRegisterPress = () => {
    // TODO: send request and navigate
  };

  const renderHero = () => {
    return <Image source={registrationHeroImage} style={styles.hero} />;
  };

  const renderTexts = () => {
    return (
      <View style={styles.textsContainer}>
        <BoldText
          children={i18n.t('screens.register.hey')}
          size={FontSizes.large}
        />
        <BoldText
          children={i18n.t('screens.register.welcome')}
          size={FontSizes.medium}
        />
        <RegularText
          children={i18n.t('screens.register.someDetails')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderDetailsTextFields = () => {
    return (
      <View style={styles.inputsContainer}>
        <AppTextInput
          label={i18n.t('screens.register.name')}
          value={name}
          onChangeText={setName}
          validateInput={validateFullName}
          errorText={i18n.t('errors.validation.invalidName')}
        />
        <AppTextInput
          label={i18n.t('screens.register.email')}
          value={email}
          onChangeText={setEmail}
          validateInput={validateEmail}
          errorText={i18n.t('errors.validation.invalidEmail')}
        />
        <AppTextInput
          label={i18n.t('screens.register.password')}
          value={password}
          isCensored={true}
          onChangeText={setPassword}
          validateInput={validatePassword}
          errorText={i18n.t('errors.validation.invalidPassword')}
        />
      </View>
    );
  };

  const renderActionButton = () => {
    return (
      <View style={styles.actionButton}>
        <PrimaryButtonWithIcon
          text={i18n.t('screens.register.letsGo')}
          icon={<SparkleIcon />}
          onPress={handleRegisterPress}
          isDisabled={!isAllInputsValid || isLoading}
        />
      </View>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={isIOS() ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            {renderHero()}
            {renderTexts()}
            {renderDetailsTextFields()}
            <RegularText
              children={i18n.t('screens.register.dontWorry')}
              size={FontSizes.small}
              textAlign="center"
            />
            {renderActionButton()}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    width: wp(100),
  },
  mainContainer: {
    paddingHorizontal: spaces._24px,
    backgroundColor: colors.BACKGROUND,
    gap: spaces._24px,
  },
  hero: {
    ...StyleSheet.absoluteFillObject,
    height: hp(25),
    opacity: 0.1,
  },
  inputsContainer: {gap: spaces._24px},
  textsContainer: {
    marginTop: hp(25), // TODO - why???
    paddingTop: spaces._24px,
    gap: spaces._12px,
  },
  passwordsContainer: {
    flexDirection: getFlexDirection(),
    width: '100%',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flexDirection: 'column',
    width: wp(40),
  },
  actionButton: {
    alignSelf: 'center',
    paddingBottom: spaces._24px,
  },
});
