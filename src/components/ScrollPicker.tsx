/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  ReactNode,
  Ref,
} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {isIOS} from '../utils/platformUtil';
import {colors} from '../constants/ui/colors';
import {radiuses} from '../constants/ui/radiuses';

function isNumeric(str: string | unknown): boolean {
  if (typeof str === 'number') return true;
  if (typeof str !== 'string') return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

const isViewStyle = (style: ViewProps['style']): style is ViewStyle => {
  return (
    typeof style === 'object' &&
    style !== null &&
    Object.keys(style).includes('height')
  );
};

export type ScrollPickerProps<ItemT extends string | number> = {
  style?: ViewProps['style'];
  dataSource: Array<ItemT>;
  selectedIndex?: number;
  onValueChange?: (value: ItemT, index: number) => void;
  renderItem?: (data: ItemT, index: number, isSelected: boolean) => JSX.Element;
  highlightColor?: string;
  highlightBorderWidth?: number;
  itemTextStyle?: object;
  activeItemTextStyle?: object;
  itemHeight?: number;
  wrapperHeight?: number;
  wrapperBackground?: string;
  scrollViewComponent?: any;
};

export type ScrollPickerHandle = {
  scrollToTargetIndex: (val: number) => void;
};

const ScrollPicker: {
  <ItemT extends string | number>(
    props: ScrollPickerProps<ItemT> & {ref?: Ref<ScrollPickerHandle>},
  ): ReactNode;
} = React.forwardRef((propsState, ref) => {
  const {itemHeight = 30, style, scrollViewComponent, ...props} = propsState;
  const [initialized, setInitialized] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    props.selectedIndex && props.selectedIndex >= 0 ? props.selectedIndex : 0,
  );

  useEffect(() => {
    const updateIndex = props.selectedIndex;
    if (updateIndex) {
      setSelectedIndex(updateIndex);
      setTimeout(() => {
        const y = itemHeight * updateIndex;
        sView?.current?.scrollTo({y: y});
      }, 0);
    }
  }, [props.selectedIndex, itemHeight]);

  const sView = useRef<ScrollView>(null);
  const [isScrollTo, setIsScrollTo] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);
  const [momentumStarted, setMomentumStarted] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useImperativeHandle(ref, () => ({
    scrollToTargetIndex: (val: number) => {
      setSelectedIndex(val);
      sView?.current?.scrollTo({y: val * itemHeight});
    },
  }));

  const wrapperHeight =
    props.wrapperHeight ||
    (isViewStyle(style) && isNumeric(style.height)
      ? Number(style.height)
      : 0) ||
    itemHeight * 5;

  useEffect(
    function initialize() {
      if (initialized) return;
      setInitialized(true);

      setTimeout(() => {
        const y = itemHeight * selectedIndex;
        sView?.current?.scrollTo({y: y});
      }, 0);

      return () => {
        timer && clearTimeout(timer);
      };
    },
    [initialized, itemHeight, selectedIndex, sView, timer],
  );

  const renderPlaceHolder = () => {
    const h = (wrapperHeight - itemHeight) / 2;
    const header = <View style={{height: h, flex: 1}} />;
    const footer = <View style={{height: h, flex: 1}} />;
    return {header, footer};
  };

  const renderItem = (data: (typeof props.dataSource)[0], index: number) => {
    const isSelected = index === selectedIndex;
    const item = props.renderItem ? (
      props.renderItem(data, index, isSelected)
    ) : (
      <Text
        style={isSelected ? styles.activeItemTextStyle : styles.itemTextStyle}>
        {data}
      </Text>
    );

    return (
      <View style={[styles.itemWrapper, {height: itemHeight}]} key={index}>
        {item}
      </View>
    );
  };

  const scrollFix = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      let y = 0;
      const h = itemHeight;
      if (e.nativeEvent.contentOffset) {
        y = e.nativeEvent.contentOffset.y;
      }
      const _selectedIndex = Math.round(y / h);

      const _y = _selectedIndex * h;
      if (_y !== y) {
        // using scrollTo in ios, onMomentumScrollEnd will be invoked
        if (isIOS()) {
          setIsScrollTo(true);
        }
        sView?.current?.scrollTo({y: _y});
      }
      if (selectedIndex === _selectedIndex) {
        return;
      }
      // onValueChange
      if (props.onValueChange) {
        const selectedValue = props.dataSource[_selectedIndex];
        setSelectedIndex(_selectedIndex);
        props.onValueChange(selectedValue, _selectedIndex);
      }
    },
    [itemHeight, props, selectedIndex],
  );

  const onScrollBeginDrag = () => {
    setDragStarted(true);

    if (isIOS()) {
      setIsScrollTo(false);
    }
    timer && clearTimeout(timer);
  };

  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setDragStarted(false);

    // if not used, event will be garbaged
    const _e: NativeSyntheticEvent<NativeScrollEvent> = {...e};
    timer && clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (!momentumStarted) {
          scrollFix(_e);
        }
      }, 50),
    );
  };

  const onMomentumScrollBegin = () => {
    setMomentumStarted(true);
    timer && clearTimeout(timer);
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setMomentumStarted(false);

    if (!isScrollTo && !dragStarted) {
      scrollFix(e);
    }
  };

  const {header, footer} = renderPlaceHolder();

  const wrapperStyle: ViewStyle = {
    height: wrapperHeight,
    width: '100%',
    flex: 1,
    backgroundColor: colors.TRANSPARENT,
    overflow: 'hidden',
  };

  const highlightStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: (wrapperHeight - itemHeight) / 2,
    height: itemHeight,
    width: '100%',
    backgroundColor: colors.SUPER_LIGHT_GRAY,
    borderRadius: radiuses._8px,
  };

  const CustomScrollViewComponent = scrollViewComponent || ScrollView;

  return (
    <View style={wrapperStyle}>
      <View style={highlightStyle} />
      <CustomScrollViewComponent
        ref={sView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        onMomentumScrollBegin={(_e: any) => onMomentumScrollBegin()}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          onMomentumScrollEnd(e)
        }
        onScrollBeginDrag={(_e: any) => onScrollBeginDrag()}
        onScrollEndDrag={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          onScrollEndDrag(e)
        }>
        {header}
        {props.dataSource.map(renderItem)}
        {footer}
      </CustomScrollViewComponent>
    </View>
  );
});

export default ScrollPicker;

const styles = StyleSheet.create({
  itemWrapper: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTextStyle: {
    color: '#999',
  },
  activeItemTextStyle: {
    color: '#333',
  },
});
