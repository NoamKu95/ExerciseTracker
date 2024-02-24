import React from 'react';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import {FontSizes} from '../../constants/ui/fonts';
import {
  getGreetingByCurrentHour,
  getMotivationPhraseByCurrentHour,
} from '../../utils/dateUtil';
import {useAppSelector} from '../../store/store';
import {StyleSheet, View} from 'react-native';
import {spaces} from '../../constants/ui/spaces';
import {getFlexDirection} from '../../utils/styleUtil';
import i18n from '../../translations/i18n';
import {PrimaryButton} from '../../components/Base/Buttons';
import SparkleIcon from '../../assets/icons/SparkleIcon';
import TitledCard from '../../components/Cards/TitledCard';
import CardWithRows from '../../components/Cards/CardWithRows';
import TitledCardWithButton from '../../components/Cards/TitledCardWithButton';
import InfoIcon from '../../assets/icons/InfoIcon';
import {colors} from '../../constants/ui/colors';

const HomeScreen = () => {
  const userName = useAppSelector(state => state.auth.user?.fullName) ?? '';
  const savedWorkouts = useAppSelector(state => state.workout.savedWorkouts);
  const isActiveWorkout = useAppSelector(state => state.workout.activeWorkout);

  // ** RENDER FUNCTIONS **
  const renderTexts = () => {
    getGreetingByCurrentHour();
    return (
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <BoldText
            children={getGreetingByCurrentHour()}
            size={FontSizes.large}
          />
          <BoldText children={userName} size={FontSizes.large} />
        </View>
        <RegularText
          children={getMotivationPhraseByCurrentHour()}
          size={FontSizes.regular}
        />
      </View>
    );
  };

  const renderActionButton = () => {
    return (
      <View style={styles.actionBtnContainer}>
        <PrimaryButton
          text={i18n.t('screens.home.btnAction')}
          onPress={() => {}}
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
    <ScreenLayout>
      <>
        {renderTexts()}
        {renderActionButton()}
        {renderActiveWorkout()}
        {renderFunFact()}
        {renderWorkoutCard()}
      </>
    </ScreenLayout>
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
