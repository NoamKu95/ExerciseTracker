import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {resetTo} from '../../navigation/RootNavigation';
// Constants
import i18n from '../../translations/i18n';
import {RootStackParamList, Screens} from '../../constants/screens';
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
// Utils
import {getFlexDirection, hp} from '../../utils/styleUtil';
import {
  isRegistrationDataValid,
  validateEmail,
  validateFullName,
  validatePassword,
} from '../../utils/validators';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {registerUser} from './state/authActions';

const RegistrationScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Register'>>();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllInputsValid, setIsAllInputsValid] = useState(false);

  useEffect(() => {
    const validationResponse = isRegistrationDataValid(email, password, name);
    setIsAllInputsValid(validationResponse);
  }, [email, password, name]);

  const handleRegisterPress = () => {
    dispatch(
      registerUser({
        email,
        password,
        name,
        languageName: '',
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

  const renderAlreadyRegistered = () => {
    return (
      <View style={styles.haveAccContainer}>
        <RegularText
          children={i18n.t('screens.register.haveAccount')}
          size={FontSizes.small}
        />
        <TextButton
          text={i18n.t('screens.register.loginHere')}
          fontSize={FontSizes.small}
          onPress={() => {
            navigation.navigate(Screens.LOGIN);
          }}
        />
      </View>
    );
  };

  return (
    <>
      <ScreenLayout
        onPress={() => {
          handleRegisterPress();
        }}
        isButtonDisabled={!isAllInputsValid || isLoading}
        buttonText={i18n.t('screens.register.letsGo')}
        isLoading={isLoading}
        icon={<SparkleIcon />}>
        <>
          {renderTexts()}
          {renderDetailsTextFields()}
          {renderAlreadyRegistered()}
        </>
      </ScreenLayout>
    </>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: spaces._24px,
    backgroundColor: colors.BACKGROUND,
    gap: spaces._24px,
  },
  inputsContainer: {
    gap: spaces._0px,
  },
  textsContainer: {
    gap: spaces._12px,
  },
  haveAccContainer: {
    alignSelf: 'center',
    flexDirection: getFlexDirection(),
    alignItems: 'baseline',
    position: 'absolute',
    bottom: hp(15),
  },
});
