import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import {MediumText, RegularText} from '../../components/Base/Texts';
import {PrimaryButton} from '../../components/Base/Buttons';
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
import {wp} from '../../utils/styleUtil';

const NoInternetScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flex}>
        <NoInternetIcon />
        <View style={styles.textContainer}>
          <View style={styles.title}>
            <MediumText
              size={FontSizes.large}
              lineHeight={26}
              color={colors.BLACK}
              textAlign="center">
              {i18n.t('errorHandling.noInternet.title')}
            </MediumText>
          </View>
          <RegularText
            size={FontSizes.medium}
            lineHeight={21}
            color={colors.BLACK}
            textAlign="center">
            {i18n.t('errorHandling.noInternet.subtitle')}
          </RegularText>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={pop}
            text={i18n.t('errorHandling.noInternet.btnAction')}
            textColor={colors.WHITE}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spaces._24px,
  },
  title: {
    paddingVertical: spaces._8px,
  },
  textContainer: {
    paddingVertical: spaces._36px,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: wp(50),
  },
});
