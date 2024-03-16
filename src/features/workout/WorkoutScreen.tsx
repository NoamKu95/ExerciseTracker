import React from 'react';
// UI
import {FontSizes} from '../../constants/ui/fonts';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {RegularText} from '../../components/Base/Texts';

const WorkoutScreen = () => {
  return (
    <ScrollScreenLayout>
      <RegularText children="Hello App" size={FontSizes.large} />
    </ScrollScreenLayout>
  );
};

export default WorkoutScreen;
