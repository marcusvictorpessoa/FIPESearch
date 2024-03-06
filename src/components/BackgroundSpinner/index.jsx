import {View, ActivityIndicator} from 'react-native';
import {BackgroundSpinnerStyles} from './styles';
import {Colors} from '../../themes/colors';

export default function BackgroundSpinner() {
  return (
    <View style={BackgroundSpinnerStyles.backgroundContainer}>
      <ActivityIndicator color={Colors.black} size={'large'} />
    </View>
  );
}
