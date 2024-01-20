import React from 'react';
// Components
import ScreenLayout from '../../components/ScreenLayout';
import {RegularText} from '../../components/Texts';
import {FontSizes} from '../../constants/ui/fonts';

const HomeScreen = () => {
  return (
    <ScreenLayout>
      <RegularText children="Hello App" size={FontSizes.large} />
    </ScreenLayout>
  );
};

export default HomeScreen;
