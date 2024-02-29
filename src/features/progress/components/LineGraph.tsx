// React & Libs
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
// UI
import {colors} from '../../../constants/ui/colors';
// Constants
import i18n from '../../../translations/i18n';
// Models
import {ExerciseDayData} from '../../../models/core/exercise';
// Redux
import {useAppSelector} from '../../../store/store';
// Utils
import {hp, wp} from '../../../utils/styleUtil';
import {formatDateToText} from '../../../utils/timeUtil';

interface DataLineGraphProps {
  graphData: ExerciseDayData[];
}

const LineGraph = ({graphData}: DataLineGraphProps) => {
  // VARIABLES
  const isRTL = useAppSelector(state => state.auth.isRTL);
  const [chartWidth, setChartWidth] = useState(wp(100));

  const renderXAxisDates = () => {
    let dateLabels: string[] = [];
    for (let index = 0; index < graphData.length; index++) {
      if (index === 0 || index === graphData.length - 1) {
        dateLabels.push(formatDateToText(graphData[index].date));
      } else {
        dateLabels.push('•');
      }
    }

    return dateLabels;
  };

  return (
    <View
      style={styles.container}
      onLayout={event => {
        const {width} = event.nativeEvent.layout;
        setChartWidth(width);
      }}>
      <LineChart
        withShadow={true}
        withHorizontalLines={true}
        withVerticalLines={false}
        data={{
          labels: renderXAxisDates().reverse(),
          datasets: [
            {
              data: graphData.map(item => item.weight).reverse(),
              color: () => colors.SECONDARY,
              strokeWidth: 2.5,
            },
          ],
        }}
        width={chartWidth}
        height={hp(25)}
        yAxisInterval={0.5}
        xLabelsOffset={4}
        yAxisSuffix={isRTL ? ` ${i18n.t('common.kg')}` : i18n.t('common.kg')}
        yLabelsOffset={16}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 1,
          color: () => colors.PRIMARY,
          labelColor: () => colors.PRIMARY,
          propsForDots: {r: '0'},
          propsForBackgroundLines: {
            stroke: colors.PRIMARY,
            strokeWidth: 0.2,
          },
        }}
      />
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
