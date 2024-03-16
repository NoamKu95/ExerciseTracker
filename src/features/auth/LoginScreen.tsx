import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Constants
import i18n from '../../translations/i18n';
import {RootStackParamList, Screens} from '../../constants/screens';
import {ButtonType} from '../../constants/enums';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import {TextButton} from '../../components/Base/Buttons';
import AppTextInput from '../../components/Base/TextInput';
import LanguagePicker from '../../components/Pickers/LanguagePicker';
// Icons
import SparkleIcon from '../../assets/icons/SparkleIcon';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {loginUser} from './state/authActions';
import {resetTo} from '../../navigation/RootNavigation';
// Utils
import {getFlexDirection, getTextAlign, hp, wp} from '../../utils/styleUtil';
import {
  isLoginDataValid,
  validateEmail,
  validatePassword,
} from '../../utils/validators';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();

  // GLOBAL VARIABLES
  const isLoading = useAppSelector(state => state.auth.isLoading);

  // LOCAL VARIABLES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllInputsValid, setIsAllInputsValid] = useState(false);

  useEffect(() => {
    const validationResponse = isLoginDataValid(email, password);
    setIsAllInputsValid(validationResponse);
  }, [email, password]);

  // ** HANDLE FUNCTIONS **
  const handleLoginPress = () => {
    // TODO: delete when BE is available
    resetTo(Screens.TABS);
    return;

    dispatch(
      loginUser({
        email,
        password,
      }),
    )
      .unwrap()
      .then(() => resetTo(Screens.TABS))
      .catch(
        () => {}, // TODO - Error handling
      );
  };

  // ** RENDER FUNCTIONS **
  const renderTexts = () => {
    return (
      <View style={styles.textsContainer}>
        <BoldText
          children={i18n.t('screens.login.title')}
          size={FontSizes.large}
        />
        <RegularText
          children={i18n.t('screens.login.subtitle')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderForgotPassword = () => {
    return (
      <View style={styles.forgotPassContainer}>
        <TextButton
          buttonType={ButtonType.TEXT}
          text={i18n.t('screens.login.forgotPassword')}
          fontSize={FontSizes.small}
          textAlign={getTextAlign()}
          onPress={() => {
            navigation.navigate(Screens.FORGOT_PASSWORD);
          }}
        />
      </View>
    );
  };

  const renderAlreadyRegistered = () => {
    return (
      <View style={styles.notRegisteredContainer}>
        <RegularText
          children={i18n.t('screens.login.noAccountYet')}
          size={FontSizes.small}
        />
        <TextButton
          text={i18n.t('screens.login.registerHere')}
          fontSize={FontSizes.small}
          onPress={() => {
            navigation.navigate(Screens.REGISTER);
          }}
        />
      </View>
    );
  };

  return (
    <>
      <LanguagePicker />
      <ScrollScreenLayout
        onPress={handleLoginPress}
        isButtonDisabled={!isAllInputsValid || isLoading}
        buttonText={i18n.t('screens.login.login')}
        isLoading={isLoading}
        buttonIcon={<SparkleIcon />}>
        <>
          {renderTexts()}
          <View style={styles.inputsContainer}>
            <AppTextInput
              label={i18n.t('screens.register.email')}
              value={email}
              onChangeText={setEmail}
              validateInput={validateEmail}
              errorText={i18n.t('errors.validation.invalidEmail')}
              keyboardType="email-address"
            />
            <AppTextInput
              label={i18n.t('screens.register.password')}
              value={password}
              isCensored={true}
              onChangeText={setPassword}
              validateInput={validatePassword}
              errorText={i18n.t('errors.validation.invalidPassword')}
            />
            {renderForgotPassword()}
          </View>
          {renderAlreadyRegistered()}
        </>
      </ScrollScreenLayout>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textsContainer: {
    gap: spaces._12px,
  },
  inputsContainer: {
    gap: spaces._0px,
  },
  forgotPassContainer: {
    width: wp(30),
    alignSelf: 'flex-end',
  },
  notRegisteredContainer: {
    alignSelf: 'center',
    flexDirection: getFlexDirection(),
    alignItems: 'baseline',
    position: 'absolute',
    bottom: hp(15),
  },
});
