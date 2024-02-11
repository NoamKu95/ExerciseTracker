import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
// Components
import {BoldText, MediumText, RegularText} from '../../components/Base/Texts';
import {PrimaryButton, TextButton} from '../../components/Base/Buttons';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {navigate, resetTo} from '../../navigation/RootNavigation';
import {useAnimationStyles} from './animations/splashAnimations';
import {registrationHeroImage} from '../../constants/ui/images';
import {RootStackParamList, Screens} from '../../constants/screens';
// Redux
import {useAppDispatch} from '../../store/store';
import {AppInitReturnType, appInit} from './state/authActions';
// Utils
import {getFlexDirection, hp} from '../../utils/styleUtil';

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Splash'>>();
  const {
    animatedLogoStyle,
    animatedImageStyle,
    animatedButtonsStyle,
    initAnimation,
  } = useAnimationStyles();
  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(false);

  useEffect(() => {
    initAnimation();
    dispatch(
      appInit({
        onAppIsReady: handleAppReady,
      }),
    );
  }, [initAnimation, dispatch]);

  const handleAppReady = (initStatus: AppInitReturnType) => {
    switch (initStatus) {
      case AppInitReturnType.USER_VERIFIED:
        resetTo(Screens.TABS);
        break;
      case AppInitReturnType.LOGIN_REQUIRED:
        navigate(Screens.LOGIN);
        break;
      case AppInitReturnType.NOT_REGISTERED:
        setIsActionButtonsVisible(true);
        break;
      default:
        break;
    }
  };

  const renderLogoAndTitle = () => (
    <Animated.View style={[styles.logoAndTitle, animatedLogoStyle]}>
      <BoldText size={FontSizes.large}>
        {i18n.t('screens.splash.title')}
      </BoldText>
      <MediumText size={FontSizes.large} color={colors.SECONDARY_TEXT}>
        {i18n.t('screens.splash.subtitle')}
      </MediumText>
    </Animated.View>
  );

  const renderImage = () => (
    <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
      <Image source={registrationHeroImage} />
    </Animated.View>
  );

  const renderActionButtons = () => (
    <Animated.View style={[styles.actionButtons, animatedButtonsStyle]}>
      <PrimaryButton
        text={i18n.t('screens.splash.actionBtn')}
        onPress={() => navigation.navigate(Screens.REGISTER)}
      />
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
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {renderLogoAndTitle()}
      {renderImage()}
      {isActionButtonsVisible && renderActionButtons()}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: colors.BACKGROUND,
    alignItems: 'center',
  },
  logoAndTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spaces._16px,
    position: 'absolute',
    top: hp(15),
  },
  imageContainer: {
    position: 'absolute',
    bottom: hp(30),
  },
  actionButtons: {
    gap: spaces._16px,
    position: 'absolute',
    bottom: hp(5),
  },
  haveAccContainer: {
    alignSelf: 'center',
    flexDirection: getFlexDirection(),
    alignItems: 'baseline',
  },
});
