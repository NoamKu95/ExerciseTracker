import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
// Components
import {RegularText} from '../../components/Base/Texts';
import {TextButton} from '../../components/Base/Buttons';
import AppTextInput from '../../components/Base/TextInput';
import Loader from '../../components/Base/Loader';
import TitledCard from '../../components/Cards/TitledCard';
import CardWithRows from '../../components/Cards/CardWithRows';
import LanguageBottomSheet from '../../components/BottomSheets/LanguageBottomSheet';
import GenderBottomSheet from '../../components/BottomSheets/GenderBottomSheet';
import MeasurementBottomSheet from '../../components/BottomSheets/MeasurementBottomSheet';
import ScreenLayout from '../../components/Base/ScreenLayout';
// Icons
import EditIcon from '../../assets/icons/EditIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Constants
import {Gender, MeasureUnit, RowActionIdentifier} from '../../constants/enums';
import i18n, {Language} from '../../translations/i18n';
import {ProfileStackParamList} from '../../constants/screens';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {validateName} from '../../utils/validators';
import {translateIntoGender} from '../../utils/transformsUtil';
import {extractFirstWord, removeFirstWord} from '../../utils/stringUtil';
import {getFlexDirection} from '../../utils/styleUtil';
import {openEmail} from '../../utils/contactUtil';

const ProfileScreen = () => {
  // ** STATE VARIABLES **
  const user = useAppSelector(state => state.auth.user);
  const appLang = useAppSelector(state => state.auth.language);
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const navigation =
    useNavigation<StackNavigationProp<ProfileStackParamList, 'Main_Profile'>>();

  // ** LOCAL VARIABLES**
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState<string>(
    extractFirstWord(user?.fullName ?? ''),
  );
  const [lastName, setLastName] = useState<string>(
    removeFirstWord(user?.fullName ?? ''),
  );
  const [gender, setGender] = useState<Gender>(user?.gender ?? Gender.OTHER);
  const [isGenderSheetOpen, setIsGenderSheetOpen] = useState(false);
  const [isLangSheetOpen, setIsLangSheetOpen] = useState(false);
  const [isUnitSheetOpen, setIsUnitSheetOpen] = useState(false);
  const pkg = require('../../../package.json');

  // ** HANDLE FUNCTIONS **
  const handleSavePersonalDetails = () => {
    // dispatch ... .then()
    setIsEditMode(false);
  };

  const handleResetPersonalDetails = () => {
    setFirstName(extractFirstWord(user?.fullName ?? ''));
    setLastName(removeFirstWord(user?.fullName ?? ''));
    setGender(user?.gender ?? Gender.OTHER);
    setIsEditMode(false);
  };

  const handleGenderSelection = (newGender: string) => {
    setGender(translateIntoGender(newGender));
    setIsGenderSheetOpen(false);
  };

  const handleLanguageSelection = (lang: Language) => {
    console.log(lang);
    // TODO: update state and reboot app
    setIsLangSheetOpen(false);
  };

  const handleRowTap = (identifier: RowActionIdentifier) => {
    switch (identifier) {
      case RowActionIdentifier.SAVED_WORKOUTS:
        break;
      case RowActionIdentifier.WORKOUT_HISTORY:
        navigation.navigate('Workout_History');
        break;
      case RowActionIdentifier.LANGUAGE:
        setIsLangSheetOpen(true);
        break;
      case RowActionIdentifier.MEASURE_UNIT:
        setIsUnitSheetOpen(true);
        break;
      case RowActionIdentifier.CONTACT:
        openEmail();
        break;
    }
  };

  const handleMeasurementUnitChange = (newUnit: MeasureUnit) => {
    console.log(newUnit);
    // save to LS & update state
    setIsUnitSheetOpen(false);
  };

  const deleteUserProfile = () => {
    // dispatch .then logout
  };

  // ** RENDER FUNCTIONS **
  const personalDetailsIcons: JSX.Element = isLoading ? (
    <Loader />
  ) : isEditMode ? (
    <View style={styles.iconsContainer}>
      <Pressable onPress={handleResetPersonalDetails}>
        <CloseIcon color={colors.WHITE} />
      </Pressable>
      <Pressable onPress={handleSavePersonalDetails}>
        <CheckIcon />
      </Pressable>
    </View>
  ) : (
    <Pressable onPress={() => setIsEditMode(true)}>
      <EditIcon />
    </Pressable>
  );

  const renderPersonalDetailsCard = () => {
    return (
      <>
        <TitledCard
          title={i18n.t('screens.profile.personalDetails')}
          icon={personalDetailsIcons}
          isIconPressable={true}>
          <>
            {isEditMode ? (
              <AppTextInput
                label={i18n.t('screens.profile.firstName')}
                value={firstName}
                onChangeText={setFirstName}
                validateInput={validateName}
                errorText={i18n.t('errors.validation.invalidName')}
                isShadow={true}
              />
            ) : (
              <View style={[styles.detailsRowContainer, styles.topRow]}>
                <RegularText
                  children={i18n.t('screens.profile.firstName')}
                  size={FontSizes.small}
                  color={colors.GRAY}
                />
                <RegularText children={firstName} size={FontSizes.regular} />
              </View>
            )}

            {isEditMode ? (
              <AppTextInput
                label={i18n.t('screens.profile.lastName')}
                value={lastName}
                onChangeText={setLastName}
                validateInput={validateName}
                errorText={i18n.t('errors.validation.invalidName')}
                isShadow={true}
              />
            ) : (
              <View style={[styles.detailsRowContainer, styles.middleRow]}>
                <RegularText
                  children={i18n.t('screens.profile.lastName')}
                  size={FontSizes.small}
                  color={colors.GRAY}
                />
                <RegularText children={lastName} size={FontSizes.regular} />
              </View>
            )}

            <Pressable
              onPress={isEditMode ? () => setIsGenderSheetOpen(true) : null}>
              <View
                style={[
                  styles.detailsRowContainer,
                  styles.bottomRow,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {paddingHorizontal: isEditMode ? spaces._16px : null},
                  isEditMode ? shadowStyles.softShadow : null,
                ]}>
                <RegularText
                  children={i18n.t('screens.profile.gender')}
                  size={FontSizes.small}
                  color={colors.GRAY}
                />
                <RegularText
                  children={i18n.t(`screens.profile.${gender}`)}
                  size={FontSizes.regular}
                />
              </View>
            </Pressable>
          </>
        </TitledCard>
      </>
    );
  };

  const renderMyDataCard = () => {
    return (
      <CardWithRows
        title="הנתונים שלי"
        contentRows={[
          {
            text: 'אימונים שמורים',
            path: 'Workout_History',
          },
          {
            text: 'היסטוריית אימונים',
            path: 'Workout_History',
          },
        ]}
      />
    );
  };

  const renderSettingsCard = () => {
    return (
      <CardWithRows
        title={i18n.t('screens.profile.settings')}
        contentRows={[
          {
            text: i18n.t('screens.profile.language'),
            onPress: () => handleRowTap(RowActionIdentifier.LANGUAGE),
          },
          {
            text: `${i18n.t('screens.profile.measureUnit')} - ${
              user?.measureUnit
            }`,
            onPress: () => handleRowTap(RowActionIdentifier.MEASURE_UNIT),
          },
          {
            text: i18n.t('screens.profile.contactUs'),
            onPress: () => handleRowTap(RowActionIdentifier.CONTACT),
          },
        ]}
      />
    );
  };

  return (
    <ScreenLayout screenTitle={i18n.t('screens.profile.title')}>
      <>
        {renderPersonalDetailsCard()}
        {renderMyDataCard()}
        {renderSettingsCard()}
        <TextButton
          text={i18n.t('screens.profile.deleteUser')}
          onPress={deleteUserProfile}
          textAlign="left"
        />
        <RegularText
          children={`${pkg.version}`}
          size={FontSizes.small}
          textAlign="center"
        />
        <GenderBottomSheet
          isVisible={isGenderSheetOpen}
          currentGender={gender}
          onClosePressed={() => setIsGenderSheetOpen(false)}
          onSavePressed={handleGenderSelection}
        />
        <LanguageBottomSheet
          isVisible={isLangSheetOpen}
          currentLang={appLang}
          onClosePressed={() => setIsLangSheetOpen(false)}
          onSavePressed={handleLanguageSelection}
        />
        <MeasurementBottomSheet
          isVisible={isUnitSheetOpen}
          currentUnit={user?.measureUnit ?? MeasureUnit.KG}
          onClosePressed={() => {
            setIsUnitSheetOpen(false);
          }}
          onSavePressed={handleMeasurementUnitChange}
        />
      </>
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: getFlexDirection(),
    gap: spaces._16px,
    alignItems: 'center',
  },
  detailsRowContainer: {
    alignContent: 'center',
    gap: spaces._4px,
  },
  topRow: {
    paddingTop: spaces._8px,
    paddingBottom: spaces._16px,
  },
  middleRow: {
    borderWidth: 1,
    borderColor: colors.VERY_LIGHT_GRAY,
    borderStartColor: colors.TRANSPARENT,
    borderEndColor: colors.TRANSPARENT,
    paddingVertical: spaces._16px,
  },
  bottomRow: {
    paddingTop: spaces._16px,
    paddingBottom: spaces._8px,
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
  },
});
