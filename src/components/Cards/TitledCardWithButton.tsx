import React from 'react';
import {View, StyleSheet} from 'react-native';
// Components
import {BoldText, RegularText} from '../Base/Texts';
import {PrimaryButton} from '../Base/Buttons';
// UI
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Utils
import {getSelfAlign} from '../../utils/styleUtil';

interface TitledCardProps {
  title: string;
  text: string;
  buttonText: string;
  onPress: () => void;
}

const TitledCardWithButton = ({
  title,
  text,
  buttonText,
  onPress,
}: TitledCardProps) => {
  const renderCardTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <BoldText
          children={title}
          size={FontSizes.regular}
          color={colors.WHITE}
        />
      </View>
    );
  };

  const renderCardBody = () => {
    return (
      <View style={styles.cardBody}>
        <View style={styles.cardContentContainer}>
          <RegularText children={text} size={FontSizes.regular} />
          <View style={styles.actionBtnContainer}>
            <PrimaryButton text={buttonText} onPress={onPress} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.cardOuter, shadowStyles.mediumShadow]}>
      {renderCardTitle()}
      {renderCardBody()}
    </View>
  );
};

export default TitledCardWithButton;

const styles = StyleSheet.create({
  cardOuter: {
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._20px,
    borderTopRightRadius: radiuses._16px,
    borderTopLeftRadius: radiuses._16px,
  },
  cardContentContainer: {
    gap: spaces._8px,
  },
  cardBody: {
    padding: spaces._12px,
  },
  actionBtnContainer: {
    alignSelf: getSelfAlign(),
  },
});
