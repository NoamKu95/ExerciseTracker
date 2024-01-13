import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
// Components
import {MediumText} from '../Texts';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import {Language} from '../../constants/languages';
// Utils
import {getFlexDirection, wp} from '../../utils/styleUtil';

interface LanguageSelectionRowProps {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
}

const LanguageSelectionRow = ({
  language,
  isSelected,
  onPress,
}: LanguageSelectionRowProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.radioButtonContainer}>
        <View style={styles.outerCircle}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
      </View>

      <View style={styles.nameContainer}>
        <MediumText size={FontSizes.medium} color={colors.BLACK}>
          {language.name}
        </MediumText>
      </View>

      <View style={styles.flagContainer}>
        <Image
          style={styles.flag}
          source={
            typeof language.flag === 'string'
              ? {uri: language.flag}
              : language.flag
          }
        />
      </View>
    </Pressable>
  );
};

export default LanguageSelectionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: getFlexDirection(),
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
    width: wp(60),
    padding: spaces._16px,
    gap: spaces._16px,
  },
  radioButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: radiuses._16px,
    borderWidth: 1.5,
    borderColor: colors.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: radiuses._8px,
    backgroundColor: colors.PRIMARY,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  flagContainer: {
    justifyContent: 'center',
  },
  flag: {
    width: '25%',
    aspectRatio: 30 / 20,
  },
});
