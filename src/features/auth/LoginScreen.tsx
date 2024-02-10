import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Constants
import i18n from '../../translations/i18n';
import {RootStackParamList, Screens} from '../../constants/screens';
import {ButtonType} from '../../constants/enums';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import {TextButton} from '../../components/Base/Buttons';
import AppTextInput from '../../components/Base/TextInput';
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
import {
  getFlexDirection,
  getOppositeSelfAlign,
  hp,
} from '../../utils/styleUtil';
import {
  isLoginDataValid,
  validateEmail,
  validatePassword,
} from '../../utils/validators';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllInputsValid, setIsAllInputsValid] = useState(false);

  useEffect(() => {
    const validationResponse = isLoginDataValid(email, password);
    setIsAllInputsValid(validationResponse);
  }, [email, password]);

  const handleLoginPress = () => {
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
    <ScreenLayout
      onPress={handleLoginPress}
      isButtonDisabled={!isAllInputsValid || isLoading}
      buttonText={i18n.t('screens.login.login')}
      isLoading={isLoading}
      icon={<SparkleIcon />}>
      <>
        {renderTexts()}
        <View style={styles.inputsContainer}>
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
          {renderForgotPassword()}
        </View>
        {renderAlreadyRegistered()}
      </>
    </ScreenLayout>
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
    alignSelf: getOppositeSelfAlign(),
  },
  notRegisteredContainer: {
    alignSelf: 'center',
    flexDirection: getFlexDirection(),
    alignItems: 'baseline',
    position: 'absolute',
    bottom: hp(15),
  },
});
