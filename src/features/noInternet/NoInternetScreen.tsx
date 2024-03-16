import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {fetch} from '@react-native-community/netinfo';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {MediumText, RegularText} from '../../components/Base/Texts';
// Icons
import NoInternetIcon from '../../assets/icons/NoInternetIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Navigation
import {pop} from '../../navigation/RootNavigation';
// Utils
import {hp} from '../../utils/styleUtil';

const NoInternetScreen = () => {
  const [isHaveInternet, setIsHaveInternet] = useState(true);

  const renderStillNoConnectionMsg = () => {
    if (!isHaveInternet) {
      return (
        <RegularText
          children={i18n.t('screens.noInternet.stillNoConnection')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      );
    }
  };

  const handleRetryPressed = () => {
    fetch().then(state => {
      if (state.isConnected) {
        pop();
      } else {
        setIsHaveInternet(false);
        setTimeout(() => {
          setIsHaveInternet(true);
        }, 2500);
      }
    });
  };

  return (
    <ScrollScreenLayout
      buttonText={i18n.t('screens.noInternet.btnAction')}
      onPress={handleRetryPressed}>
      <>
        <View style={styles.mainContainer}>
          <NoInternetIcon />
          <View style={styles.textContainer}>
            <MediumText
              children={i18n.t('screens.noInternet.title')}
              size={FontSizes.large}
            />
            <RegularText
              children={i18n.t('screens.noInternet.subtitle')}
              size={FontSizes.medium}
              textAlign="center"
            />
          </View>
        </View>
        <View style={styles.retryContainer}>
          {renderStillNoConnectionMsg()}
        </View>
      </>
    </ScrollScreenLayout>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: hp(20),
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    gap: spaces._12px,
    paddingVertical: spaces._36px,
  },
  retryContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(15),
  },
});
