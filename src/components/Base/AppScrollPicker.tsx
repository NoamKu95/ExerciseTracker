// React & Libs
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Components
import {MediumText} from './Texts';
import ScrollPicker from '../ScrollPicker';
// UI
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';

type AppScrollPickerProps = {
  data: Array<string | number>;
  value: string | number;
  setValue: (value: string | number) => void;
  renderItem?: (item: string | number) => React.JSX.Element;
};

const ITEM_HEIGHT = 40;
const PICKER_HEIGHT = 200;

const AppScrollPicker = ({
  data,
  value,
  setValue,
  renderItem,
}: AppScrollPickerProps) => {
  const renderPickerItem = (
    // eslint-disable-next-line @typescript-eslint/no-shadow
    data: string | number,
    index: number,
    isSelected: boolean,
  ) => {
    return (
      <MediumText
        size={isSelected ? FontSizes.regular : FontSizes.small}
        color={isSelected ? colors.MAIN_TEXT : colors.GRAY}>
        {`${data}`}
      </MediumText>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.WHITE, colors.SCROLL_TRANSPARENT]}
        style={styles.gradientTop}
      />
      <ScrollPicker
        dataSource={data}
        itemHeight={ITEM_HEIGHT}
        renderItem={renderItem ? renderItem : renderPickerItem}
        selectedIndex={data.indexOf(value)}
        onValueChange={setValue}
      />
      <LinearGradient
        colors={[colors.SCROLL_TRANSPARENT, colors.WHITE]}
        style={styles.gradientBottom}
      />
    </View>
  );
};

export default AppScrollPicker;

const styles = StyleSheet.create({
  container: {
    height: PICKER_HEIGHT,
    borderRadius: radiuses._16px,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  item: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTop: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
  },
  gradientBottom: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
  },
});
