import React from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import {RegularText} from '../../components/Base/Texts';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';

interface TabItemProps {
  text: string;
  icon: JSX.Element;
  isFocused: boolean;
}

const TabItem = ({text, icon, isFocused}: TabItemProps) => {
  return (
    <View style={styles.tabView}>
      {icon}
      <View style={styles.textView}>
        <RegularText
          size={FontSizes.small}
          color={isFocused ? colors.PRIMARY : colors.GRAY}>
          {text}
        </RegularText>
      </View>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textView: {
    marginTop: spaces._2px,
  },
});
