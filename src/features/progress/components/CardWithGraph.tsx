import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
// Components
import {RegularText} from '../../../components/Base/Texts';
import TitledCard from '../../../components/Cards/TitledCard';
import TimePeriodSelector from './TimePeriodSelector';
import LineGraph from './LineGraph';
// Icons
// UI
import {spaces} from '../../../constants/ui/spaces';
import {FontSizes} from '../../../constants/ui/fonts';
// Constants
import i18n from '../../../translations/i18n';
import {progressPeriods} from '../../../data/timePeriods';
import {ExerciseDayData} from '../../../models/core/exercise';
// Models
import {TimePeriod} from '../../../models/TimePeriod';
// Utils
import {hp} from '../../../utils/styleUtil';

interface CardWithGraphProps {
  graphData: ExerciseDayData[];
  selectedTimePeriod: TimePeriod;
  handlePeriodChange: (timePeriod: TimePeriod) => void;
  isLoading: boolean;
}

const CardWithGraph = ({
  graphData,
  selectedTimePeriod,
  handlePeriodChange,
  isLoading,
}: CardWithGraphProps) => {
  // ** RENDER FUNCTIONS **
  const renderEmptyState = () => {
    return (
      <RegularText
        children={i18n.t('screens.progress.graphCard.emptyState')}
        size={FontSizes.regular}
        textAlign="center"
      />
    );
  };

  const renderCardContent = () => {
    return (
      <>
        <TimePeriodSelector
          availablePeriods={progressPeriods}
          selectedPeriod={selectedTimePeriod}
          setSelectedPeriod={handlePeriodChange}
        />
        {isLoading ? (
          <ActivityIndicator
            animating={isLoading}
            hidesWhenStopped
            style={styles.loader}
          />
        ) : (
          <LineGraph graphData={graphData} />
        )}
      </>
    );
  };

  return (
    <TitledCard
      title={i18n.t('screens.progress.graphCard.title')}
      children={
        graphData.length === 0 ? renderEmptyState() : renderCardContent()
      }
    />
  );
};

export default CardWithGraph;

const styles = StyleSheet.create({
  container: {
    gap: spaces._16px,
  },
  loader: {
    height: hp(25),
  },
});
