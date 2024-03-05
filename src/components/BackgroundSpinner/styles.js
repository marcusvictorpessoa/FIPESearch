import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const BackgroundSpinnerStyles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arsenic,
    opacity: 0.3,
    zIndex: 5,
  },
});
