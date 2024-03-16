import React from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {RegularText} from '../../components/Base/Texts';
// Components
import {PrimaryButton} from '../../components/Base/Buttons';
import TitledCard from '../../components/Cards/TitledCard';
import TitledCardWithButton from '../../components/Cards/TitledCardWithButton';
import CardWithRows from '../../components/Cards/CardWithRows';
// Icons
import InfoIcon from '../../assets/icons/InfoIcon';
import SparkleIcon from '../../assets/icons/SparkleIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Models
// Redux
import {useAppSelector} from '../../store/store';
// Navigation
// Utils
import {getGreetingAndMotivationByCurrentHour} from '../../utils/dateUtil';
import {getFlexDirection} from '../../utils/styleUtil';

const HomeScreen = () => {
  // GLOBAL VARIABLES
  const userName = useAppSelector(state => state.auth.user?.fullName) ?? '';
  const savedWorkouts = useAppSelector(state => state.workout.savedWorkouts);
  const isActiveWorkout = useAppSelector(state => state.workout.activeWorkout);

  // LOCAL VARIABLES
  const {greeting, motivation} = getGreetingAndMotivationByCurrentHour();

  // ** RENDER FUNCTIONS **
  const renderTexts = () => {
    return (
      <View style={styles.textContainer}>
        <RegularText children={motivation} size={FontSizes.regular} />
      </View>
    );
  };

  const renderActionButton = () => {
    return (
      <View style={styles.actionBtnContainer}>
        <PrimaryButton
          text={i18n.t('screens.home.btnAction')}
          onPress={() => {}} // TODO
          icon={<SparkleIcon />}
        />
      </View>
    );
  };

  const renderFunFact = () => {
    return (
      <TitledCard
        title={i18n.t('screens.home.didYouKnow')}
        children={i18n.t('screens.home.emptyState.noFunFacts')}
      />
    );
  };

  const renderActiveWorkout = () => {
    // eslint-disable-next-line curly
    if (!isActiveWorkout) return null;
    return (
      <>
        <TitledCard
          icon={
            <View style={{transform: [{rotate: '180deg'}]}}>
              <InfoIcon />
            </View>
          }
          title={i18n.t('screens.home.activeWorkout')}
          headerColor={colors.SECONDARY}
          children={
            <View style={styles.activeWorkoutContainer}>
              <RegularText
                children={i18n.t('screens.home.clickSaveAtTheEnd')}
                size={FontSizes.regular}
              />
              <RegularText
                children={i18n.t('screens.home.weAutoSave')}
                size={FontSizes.small}
              />
            </View>
          }
        />
      </>
    );
  };

  const renderWorkoutCard = () => {
    // eslint-disable-next-line curly
    if (isActiveWorkout) return null;

    if (savedWorkouts.length === 0) {
      return (
        <TitledCardWithButton
          title={i18n.t('screens.home.startedSavedWorkout')}
          text={i18n.t('screens.home.emptyState.noSavedWorkouts')}
          buttonText={i18n.t('screens.home.btnAction')}
          onPress={() => {}}
        />
      );
    }
    return (
      <CardWithRows
        title={i18n.t('screens.home.startedSavedWorkout')}
        contentRows={savedWorkouts.map(workout => {
          return {text: workout.name, path: 'NoInternet'}; // TODO: replace with Workout screen
        })}
      />
    );
  };

  return (
    <ScrollScreenLayout screenTitle={`${greeting} ${userName}`}>
      <>
        {renderTexts()}
        {renderActionButton()}
        {renderActiveWorkout()}
        {renderFunFact()}
        {renderWorkoutCard()}
      </>
    </ScrollScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textContainer: {
    gap: spaces._8px,
  },
  titleContainer: {
    flexDirection: getFlexDirection(),
    gap: spaces._8px,
  },
  actionBtnContainer: {
    alignSelf: 'center',
  },
  cardContentContainer: {
    gap: spaces._8px,
    paddingVertical: spaces._12px,
  },
  activeWorkoutContainer: {
    gap: spaces._4px,
  },
});
