import React from 'react';
import {View, StyleSheet, Pressable, StyleProp, ViewStyle} from 'react-native';
// Components
import {BoldText, RegularText} from '../Base/Texts';
// UI
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
import {shadowStyles} from '../../constants/ui/shadows';
// Utils
import {
  getFlexDirection,
  getOppositeFlexDirection,
} from '../../utils/styleUtil';

interface TitledCardProps {
  icon?: JSX.Element;
  isIconPressable?: boolean;
  title: string;
  secondaryTitleElement?: JSX.Element;
  headerColor?: string;
  children: JSX.Element[] | JSX.Element | string;
  outerStyle?: StyleProp<ViewStyle>;
}

const TitledCard = ({
  icon,
  isIconPressable,
  title,
  secondaryTitleElement,
  headerColor = colors.PRIMARY,
  children,
  outerStyle,
}: TitledCardProps) => {
  const renderCardTitle = () => {
    return (
      <View style={[styles.titleContainer, {backgroundColor: headerColor}]}>
        <View
          style={[
            styles.titleIconContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            {justifyContent: isIconPressable ? 'space-between' : undefined},
            {
              flexDirection: isIconPressable
                ? getOppositeFlexDirection()
                : getFlexDirection(),
            },
          ]}>
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
    <View style={[styles.cardOuter, shadowStyles.mediumShadow, outerStyle]}>
      {renderCardTitle()}
      {renderCardBody()}
    </View>
  );
};

export default TitledCard;

const styles = StyleSheet.create({
  cardOuter: {
    borderRadius: radiuses._16px,
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer: {
    width: '100%',
    paddingVertical: spaces._16px,
    paddingHorizontal: spaces._20px,
    borderTopRightRadius: radiuses._16px,
    borderTopLeftRadius: radiuses._16px,
    justifyContent: 'space-between',
    flexDirection: getFlexDirection(),
  },
  titleIconContainer: {
    alignItems: 'center',
    gap: spaces._10px,
    width: '100%',
  },
  cardBody: {
    backgroundColor: colors.WHITE,
    padding: spaces._12px,
    borderBottomStartRadius: radiuses._16px,
    borderBottomEndRadius: radiuses._16px,
  },
});
