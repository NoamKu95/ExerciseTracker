import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
// Components
import {RegularText} from '../Base/Texts';
// Icons
import ArrowIcon from '../../assets/icons/ArrowIcon';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Models
import {CardRowModel} from '../../models/ui/cardRow';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {getFlexDirection} from '../../utils/styleUtil';

interface CardRowProps {
  row: CardRowModel;
  isFirst?: boolean;
  isLast?: boolean;
}

const CardRow = ({row, isFirst, isLast = false}: CardRowProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const isRTL = useAppSelector(state => state.auth.isRTL);

  const handlePress = () => {
    if (row.path) {
      navigation.navigate(row.path);
    }
  };

  const renderInfoView = () => {
    if (row.infoText) {
      return (
        <View
          style={[
            styles().infoBadgeContainer,
            {backgroundColor: row.infoBgColor ?? colors.BACKGROUND_GRAY},
          ]}>
          <RegularText
            children={row.infoText}
            size={FontSizes.xsmall}
            textAlign="center"
            color={row.infoBgColor ? colors.WHITE : colors.MAIN_TEXT}
          />
        </View>
      );
    }
  };

  return (
    <Pressable
      style={[
        styles(isRTL).rowContainer,
        isLast ? styles().lastRow : styles().bottomBorder,
        isFirst ? styles().firstRow : undefined,
      ]}
      onPress={handlePress}>
      <RegularText size={FontSizes.regular}>{row.text}</RegularText>
      {row.path && <ArrowIcon />}
      {row.infoText && renderInfoView()}
    </Pressable>
  );
};

export default CardRow;

export const styles = (isRTL?: boolean) =>
  StyleSheet.create({
    rowContainer: {
      backgroundColor: colors.WHITE,
      paddingVertical: spaces._16px,
      flexDirection: getFlexDirection(),
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      paddingLeft: isRTL ? 0 : spaces._4px,
      paddingRight: isRTL ? spaces._4px : 0,
    },
    infoBadgeContainer: {
      height: 30,
      minWidth: 80,
      borderRadius: radiuses._8px,
      paddingVertical: spaces._4px,
      paddingHorizontal: spaces._16px,
      alignContent: 'center',
      justifyContent: 'center',
    },
    bottomBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.VERY_LIGHT_GRAY,
    },
    firstRow: {
      paddingTop: spaces._0px,
    },
    lastRow: {
      paddingBottom: spaces._0px,
    },
  });
