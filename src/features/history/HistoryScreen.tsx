import React, {useEffect, useState} from 'react';
import {FlatList, LogBox, Pressable, StyleSheet, View} from 'react-native';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import FilterExcHistoryBottomSheet from '../../components/BottomSheets/FilterExcHistoryBottomSheet';
// Icons
import FilterIcon from '../../assets/icons/FilterIcon';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Models
import {HistoryExercise} from '../../models/core/exercise';
import {HistoryExerciseSection} from '../../models/ui/historyExerciseSection';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
// Utils
import {getFlexDirection, hp} from '../../utils/styleUtil';
import EmptyStateComponent from '../../components/Base/EmptyStateComponent';
import {fetchWorkoutHistory} from '../home_page/state/workoutActions';

const HistoryScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const dispatch = useAppDispatch();

  // STATE VARIABLES
  const {pastWorkouts, page, isLoading, didFinishFetchingAllHistory} =
    useAppSelector(state => state.workout);

  // LOCAL VARIABLES
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // ** RENDER FUNCTIONS **
  const renderFilterButton = () => {
    return (
      <Pressable
        style={styles.filterContainer}
        onPress={() => setIsFilterSheetOpen(true)}>
        <RegularText children={'סינון תוצאות'} size={FontSizes.regular} />
        <FilterIcon />
      </Pressable>
    );
  };

  const renderPeriodCard = (section: HistoryExerciseSection) => {
    return (
      <View style={styles.cardContainer}>
        <TitledCard title={section.title}>
          {section.data.map((data, index) => {
            return (
              <Pressable
                key={data.id}
                onPress={() => handleExerciseTapped(data.id)}
                style={[
                  styles.innerRow,
                  index === 0 ? styles.firstRow : null,
                  index === section.data.length - 1 ? styles.lastRow : null,
                ]}>
                {renderHistoryWorkoutRow(data)}
              </Pressable>
            );
          })}
        </TitledCard>
      </View>
    );
  };

  const renderHistoryWorkoutRow = (workout: HistoryExercise) => {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.textsContainer}>
          <View style={styles.rowDateContainer}>
            <RegularText
              children={`${workout.date}, `}
              size={FontSizes.regular}
            />
            <RegularText
              children={`${i18n.t(`common.dayTimes.${workout.time}`)}`}
              size={FontSizes.regular}
              color={colors.GRAY}
            />
          </View>
          <BoldText children={workout.name} size={FontSizes.medium} />
        </View>
        <ChevronLeftIcon />
      </View>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleFilterSelected = () => {
    //
  };

  const handleExerciseTapped = (exerciseID: string) => {
    console.log(exerciseID);
    // navigate
  };

  const fetchMoreHistoryData = () => {
    if (!isLoading && !isFetching && !didFinishFetchingAllHistory) {
      //   setIsFetching(true);
      dispatch(
        fetchWorkoutHistory({
          page,
          limit: 20,
        }),
      ).finally(() => setIsFetching(false));
    }
  };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.workoutsHistory.title')}
      isBackButton={true}
      isScrollable={false}>
      <>
        {renderFilterButton()}
        <FlatList
          data={pastWorkouts}
          renderItem={({item}) => renderPeriodCard(item)}
          keyExtractor={item => item.title}
          onEndReachedThreshold={0.1}
          //   onEndReached={fetchMoreHistoryData}
          ListEmptyComponent={
            <EmptyStateComponent
              text={i18n.t('screens.workoutsHistory.emptyStateText')}
            />
          }
        />
        <FilterExcHistoryBottomSheet
          isOpen={isFilterSheetOpen}
          onSavePressed={handleFilterSelected}
          onCloseSheet={() => setIsFilterSheetOpen(false)}
        />
      </>
    </ScreenLayout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  filterContainer: {
    justifyContent: 'flex-end',
    flexDirection: getFlexDirection(),
    gap: spaces._4px,
    alignItems: 'center',
  },
  cardContainer: {
    paddingBottom: spaces._36px,
  },
  firstRow: {
    paddingTop: spaces._8px,
    paddingBottom: spaces._16px,
  },
  innerRow: {
    borderWidth: 1,
    borderColor: colors.TRANSPARENT,
    borderBottomColor: colors.SUPER_LIGHT_GRAY,
  },
  lastRow: {
    paddingTop: spaces._16px,
    paddingBottom: spaces._8px,
    borderWidth: 0,
  },
  rowContainer: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textsContainer: {
    gap: spaces._8px,
  },
  rowDateContainer: {
    flexDirection: getFlexDirection(),
  },
  footer: {
    paddingBottom: hp(20),
  },
});
