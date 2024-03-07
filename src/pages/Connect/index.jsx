import {StatusBar, SafeAreaView, ActivityIndicator} from 'react-native';
import {ConnectStyles} from './styles';
import {Colors} from '../../themes/colors';
import Logo from '../../components/Logo';
import {useEffect} from 'react';
import useConnect from '../../hooks/useConnect';

export default function Connect() {
  const {initApp} = useConnect();

  useEffect(() => {
    initApp();
  }, []);

  return (
    <SafeAreaView style={ConnectStyles.container}>
      <Logo
        logo_with={'100%'}
        logo_height={'100%'}
        logo_color={Colors.white}
        container_flex={0.12}
        container_width={'100%'}
        container_height={'100%'}
      />
      <ActivityIndicator size={'large'} color={Colors.white} />
    </SafeAreaView>
  );
}
