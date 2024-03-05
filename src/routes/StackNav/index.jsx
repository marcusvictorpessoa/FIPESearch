import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Keys} from '../keys';
import {RouteComponents} from '../RouteComponents';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  const options_customized = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={Keys.connect}>
      <Stack.Screen
        options={options_customized}
        name={Keys.connect}
        component={RouteComponents.Connect}
      />
      <Stack.Screen
        options={options_customized}
        name={Keys.search}
        component={RouteComponents.Search}
      />
      <Stack.Screen
        options={options_customized}
        name={Keys.info}
        component={RouteComponents.Info}
      />
    </Stack.Navigator>
  );
}
