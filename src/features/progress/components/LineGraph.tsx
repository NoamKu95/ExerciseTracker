import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {spaces} from '../../../constants/ui/spaces';
import {hp, wp} from '../../../utils/styleUtil';
import {colors} from '../../../constants/ui/colors';
import {formatDateToText} from '../../../utils/timeUtil';
import {ExerciseDayData} from '../../../models/core/exercise';
import {useAppSelector} from '../../../store/store';

interface DataLineGraphProps {
  graphData: ExerciseDayData[];
}

const LineGraph = ({graphData}: DataLineGraphProps) => {
  const isRTL = useAppSelector(state => state.auth.isRTL);

  // VARIABLES
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
        withInnerLines={false}
        withShadow={false}
        data={{
          labels: isRTL ? renderXAxisDates().reverse() : renderXAxisDates(),
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: () => colors.SECONDARY,
              strokeWidth: 3,
            },
          ],
        }}
        width={chartWidth}
        height={hp(25)}
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 1,
          color: () => colors.PRIMARY,
          labelColor: () => colors.PRIMARY,
          propsForDots: {r: '0'},
          propsForBackgroundLines: {
            stroke: colors.PRIMARY,
            strokeWidth: 0.5,
          },
        }}
        style={styles.chartStyle}
      />
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  chartStyle: {
    marginVertical: spaces._8px,
    paddingRight: hp(4),
  },
});
