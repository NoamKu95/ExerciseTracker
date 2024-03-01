import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
// Components
import LanguageSelectionRow from './LanguageSelectionRow';
import {RegularText} from '../Base/Texts';
// Icons
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Constants
import {Language, LanguageType, appLanguages} from '../../translations/i18n';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {setLanguage} from '../../features/auth/state/authSlice';
// Utils
import {getFlexDirection, getSelfAlign, hp, wp} from '../../utils/styleUtil';

const LanguagePicker = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const language = useAppSelector(state => state.auth.language);
  const dispatch = useAppDispatch();

  const onLanguageSelected = (langCode: LanguageType) => {
    dispatch(setLanguage(langCode));
    setIsDropdownOpen(false);
  };

  const renderDropdownList = () => {
    return (
      <View style={[styles.dropdownContainer, shadowStyles.softShadow]}>
        <FlatList
          data={appLanguages}
          showsVerticalScrollIndicator={false}
          renderItem={renderLanguageRow}
          keyExtractor={item => item.name}
        />
      </View>
    );
  };

  const renderLanguageRow = ({
    item,
    index,
  }: {
    item: Language;
    index: number;
  }) => {
    return (
      <LanguageSelectionRow
        key={index}
        language={item}
        isSelected={item.code === language}
        onPress={() => onLanguageSelected(item.code)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          <ChevronDownIcon />
          <RegularText size={FontSizes.small}>
            {language.toUpperCase()}
          </RegularText>
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
    end: wp(5),
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: colors.WHITE,
    padding: spaces._8px,
    borderRadius: radiuses._16px,
    alignSelf: getSelfAlign(),
  },
  button: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces._8px,
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
