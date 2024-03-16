import {StyleSheet, View} from 'react-native';
// Components
import {BoldText} from '../components/Base/Texts';
// UI
import {spaces} from '../constants/ui/spaces';
import {FontSizes} from '../constants/ui/fonts';

export const renderCategoryTitle = (categoryName: string) => {
  return (
    <View style={styles.sectionHeader}>
      <BoldText children={categoryName} size={FontSizes.large} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingBottom: spaces._16px,
  },
});
