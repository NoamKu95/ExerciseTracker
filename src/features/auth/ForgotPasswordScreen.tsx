import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// Constants
import i18n from '../../translations/i18n';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import AppTextInput from '../../components/Base/TextInput';
// Icons
import SparkleIcon from '../../assets/icons/SparkleIcon';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Utils
import {validateEmail} from '../../utils/validators';
// Redux
import {useAppSelector} from '../../store/store';

const ForgotPasswordScreen = () => {
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [isAllInputsValid, setIsAllInputsValid] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  useEffect(() => {
    setIsAllInputsValid(validateEmail(email));
  }, [email]);

  const handleEmailAddressChange = (text: string) => {
    setEmail(text);
    setIsMailSent(false);
  };

  const handleSendMailPress = () => {
    // TODO: send request .then() update state
    setIsMailSent(true);
  };

  const renderTexts = () => {
    return (
      <View style={styles.textsContainer}>
        <BoldText
          children={i18n.t('screens.forgotPassword.didYouForget')}
          size={FontSizes.large}
        />
        <RegularText
          children={i18n.t('screens.forgotPassword.dontWorry')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderCheckInbox = () => {
    return isMailSent ? (
      <RegularText
        children={i18n.t('screens.forgotPassword.checkInbox')}
        size={FontSizes.medium}
        textAlign="center"
      />
    ) : null;
  };

  return (
    <ScreenLayout
      onPress={handleSendMailPress}
      isButtonDisabled={!isAllInputsValid || isLoading}
      buttonText={i18n.t('screens.forgotPassword.sendPassword')}
      isLoading={isLoading}
      icon={<SparkleIcon />}
      screenTitle={i18n.t('screens.forgotPassword.screenTitle')}
      isBackButton={true}>
      <>
        {renderTexts()}
        <AppTextInput
          label={i18n.t('screens.forgotPassword.email')}
          value={email}
          onChangeText={handleEmailAddressChange}
          validateInput={validateEmail}
          errorText={i18n.t('errors.validation.invalidEmail')}
        />
        {renderCheckInbox()}
      </>
    </ScreenLayout>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  textsContainer: {
    gap: spaces._12px,
  },
});
