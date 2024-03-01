import React, {useState} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
// UI
import {FontSizes} from '../../constants/ui/fonts';
// Components
import {BoldText, RegularText} from '../../components/Base/Texts';
import AppTextInput from '../../components/Base/TextInput';
import TitledCard from '../../components/Cards/TitledCard';
import CardWithRows from '../../components/Cards/CardWithRows';
import ScreenLayout from '../../components/Base/ScreenLayout';
// Icons
import EditIcon from '../../assets/icons/EditIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
// Constants
import {Gender} from '../../constants/enums';
import i18n from '../../translations/i18n';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {validateName} from '../../utils/validators';
import {extractFirstWord, removeFirstWord} from '../../utils/stringUtil';
import {shadowStyles} from '../../constants/ui/shadows';
import {radiuses} from '../../constants/ui/radiuses';
import Loader from '../../components/Base/Loader';

const ProfileScreen = () => {
  // ** STATE VARIABLES **
  const user = useAppSelector(state => state.auth.user);
  const isLoading = useAppSelector(state => state.auth.isLoading);

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

  // ** HANDLE FUNCTIONS **
  const handleSavePersonalDetails = () => {
    // dispatch ... .then()
    setIsEditMode(false);
  };

  const handleResetPersonalDetails = () => {
    setFirstName(extractFirstWord(user?.fullName ?? ''));
    setLastName(removeFirstWord(user?.fullName ?? ''));
    setGender(Gender.MALE);
  };

  // ** RENDER FUNCTIONS **

  const personalDetailsIcons: JSX.Element = isLoading ? (
    <Loader />
  ) : isEditMode ? (
    <Pressable onPress={handleSavePersonalDetails}>
      <CheckIcon />
    </Pressable>
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
                value={firstName ?? ''}
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
            path: 'Tabs',
          },
          {
            text: 'היסטוריית אימונים',
            path: 'Tabs',
          },
        ]}
      />
    );
  };

  const renderSettingsCard = () => {
    return (
      <CardWithRows
        title="הגדרות"
        contentRows={[
          {
            text: 'שפה',
            path: 'Tabs',
          },
          {
            text: 'יצירת קשר',
            path: 'Tabs',
          },
        ]}
      />
    );
  };

  return (
    <ScreenLayout>
      <>
        <BoldText
          children={i18n.t('screens.profile.title')}
          size={FontSizes.large}
        />
        {renderPersonalDetailsCard()}
        {renderMyDataCard()}
        {renderSettingsCard()}
      </>
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
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
