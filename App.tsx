import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Colors } from './src/themes/colors';
import AppNavigation from './src/routes/AppNavigation';
import { SearchFormProvider } from './src/contexts/SearchFormContext';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.blueBolt}
      />
      <SearchFormProvider>
        <AppNavigation />
      </SearchFormProvider>
    </SafeAreaView>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }
});

export default App;
