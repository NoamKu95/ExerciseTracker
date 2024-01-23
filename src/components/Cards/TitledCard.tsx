import React from 'react';
import {View, StyleSheet} from 'react-native';
// Components
import {BoldText, RegularText} from '../Texts';
// UI
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Utils
import {getFlexDirection} from '../../utils/styleUtil';

interface TitledCardProps {
  icon?: JSX.Element;
  title: string;
  secondaryTitleElement?: JSX.Element;
  children: JSX.Element[] | JSX.Element | string;
}

const TitledCard = ({
  icon,
  title,
  secondaryTitleElement,
  children,
}: TitledCardProps) => {
  const renderCardTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleIconContainer}>
          {icon}
          <BoldText
            children={title}
            size={FontSizes.regular}
            color={colors.WHITE}
          />
        </View>
        {secondaryTitleElement}
      </View>
    );
  };

  const renderCardBody = () => {
    return (
      <View style={styles.cardBody}>
        {typeof children === 'string' ? (
          <RegularText
            children={children}
            size={FontSizes.regular}
            color={colors.MAIN_TEXT}
          />
        ) : (
          children
        )}
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

export default TitledCard;

const styles = StyleSheet.create({
  cardOuter: {
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._16px,
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer: {
    width: '100%',
    backgroundColor: colors.PRIMARY,
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._20px,
    borderTopRightRadius: radiuses._16px,
    borderTopLeftRadius: radiuses._16px,
    justifyContent: 'space-between',
    flexDirection: getFlexDirection(),
  },
  titleIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: getFlexDirection(),
    gap: spaces._10px,
  },
  cardBody: {
    padding: spaces._12px,
  },
});
