import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const InfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 0.4,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.blueBolt,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //paddingHorizontal: 10,
  },
  content: {
    flex: 0.6,
    width: '100%',
  },
});
