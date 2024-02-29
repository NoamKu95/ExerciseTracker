import React from 'react';
// UI
import {FontSizes} from '../../constants/ui/fonts';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import EditIcon from '../../assets/icons/EditIcon';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import CardWithRows from '../../components/Cards/CardWithRows';

const ProfileScreen = () => {
  const renderPersonalDetails = () => {
    return (
      <>
        <TitledCard title={'פרטים אישיים'} icon={<EditIcon />}>
          <>
            <View style={[styles.detailsRowContainer, styles.topRow]}>
              <RegularText
                children="שם פרטי"
                size={FontSizes.xsmall}
                color={colors.GRAY}
              />
              <RegularText children="נעם" size={FontSizes.regular} />
            </View>
            <View style={[styles.detailsRowContainer, styles.middleRow]}>
              <RegularText
                children="שם משפחה"
                size={FontSizes.xsmall}
                color={colors.GRAY}
              />
              <RegularText children="קורצר" size={FontSizes.regular} />
            </View>
            <View style={[styles.detailsRowContainer, styles.bottomRow]}>
              <RegularText
                children="מגדר"
                size={FontSizes.xsmall}
                color={colors.GRAY}
              />
              <RegularText children="נקבה" size={FontSizes.regular} />
            </View>
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
        <BoldText children="פרופיל אישי" size={FontSizes.large} />
        {renderPersonalDetails()}
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
  },
});
