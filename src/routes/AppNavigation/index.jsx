import {NavigationContainer} from '@react-navigation/native';
import StackNav from '../StackNav';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
