import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// Components
import LanguageSelectionRow from './LanguageSelectionRow';
import {MediumText} from '../Texts';
// Icons
import ChevronDown from '../../assets/icons/ChevronDown';
// UI
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Constants
import {SupportedLanguages, languages} from '../../constants/languages';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
// Utils
import {hp, wp} from '../../utils/styleUtil';

const LanguagePicker = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const language = useAppSelector(state => state.auth.language);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onLanguageSelected = (langCode: SupportedLanguages) => {
    dispatch(setLanguage(langCode));
    setIsDropdownOpen(false);
  };

  const renderDropdownList = () => {
    return (
      <View style={[styles.dropdownContainer, shadowStyles.softShadow]}>
        {languages.map((languageOption, index) => {
          return (
            <LanguageSelectionRow
              key={index}
              language={languageOption}
              isSelected={languageOption.code === language}
              onPress={() => onLanguageSelected(languageOption.code)}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, shadowStyles.softShadow]}>
        <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
          <ChevronDown />
          <MediumText size={FontSizes.large} color={colors.BLACK}>
            {language.toUpperCase()}
          </MediumText>
        </TouchableOpacity>
      </View>
      {isDropdownOpen && renderDropdownList()}
    </View>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  container: {
    gap: spaces._8px,
    position: 'absolute',
    top: hp(7),
    left: wp(5),
  },
  buttonContainer: {
    backgroundColor: colors.WHITE,
    padding: spaces._8px,
    borderRadius: radiuses._8px,
    alignSelf: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces._8px,
    height: 30,
  },
  flag: {
    width: '35%',
    aspectRatio: 30 / 20,
  },
  dropdownContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
  },
});
