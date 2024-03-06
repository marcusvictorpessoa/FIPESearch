import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Colors } from './src/themes/colors';
import AppNavigation from './src/routes/AppNavigation';
import { SearchFormProvider } from './src/contexts/SearchFormContext';

import AnimatedSplash from "react-native-animated-splash-screen";

function App(): React.JSX.Element {

  const [load, setLoad] = useState(false);

  async function loading_splashscreen() {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
    setLoad(false);
  }

  useEffect(() => {
    loading_splashscreen();
  }, []);

  return (
    <AnimatedSplash translucent={true}
      isLoaded={load}
      logoImage={require('./src/assets/FIPESearch_logo_white_transparent.png')}
      backgroundColor={Colors.blueBolt}
      logoHeight={150}
      logoWidth={150}
    >
      <SafeAreaView style={AppStyles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.blueBolt}
        />
        <SearchFormProvider>
          <AppNavigation />
        </SearchFormProvider>
      </SafeAreaView>
    </AnimatedSplash>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }
});

export default App;
