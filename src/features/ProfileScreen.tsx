import React from 'react';
// UI
import {FontSizes} from '../constants/ui/fonts';
// Components
import ScreenLayout from '../components/Base/ScreenLayout';
import {RegularText} from '../components/Base/Texts';

const ProfileScreen = () => {
  return (
    <ScreenLayout>
      <RegularText children="Hello App" size={FontSizes.large} />
    </ScreenLayout>
  );
};

export default ProfileScreen;
