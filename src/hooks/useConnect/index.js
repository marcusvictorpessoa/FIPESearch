import {Keys} from '../../routes/keys';
import {useNavigation} from '@react-navigation/native';

export default function useConnect() {
  const navigation = useNavigation();

  async function initApp() {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: Keys.search}],
      });
    }, 2000);
  }

  return {
    initApp,
  };
}
