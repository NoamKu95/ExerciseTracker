import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store/store';
import {colors} from './src/constants/ui/colors';

const App = () => {
  useEffect(() => {
    try {
    } catch (error) {
      console.error(error); // TODO: Error Handling
      throw error;
    }
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor={colors.TRANSPARENT}
          barStyle="dark-content"
        />
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
