import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const ButtonStyles = (mt, w) =>
  StyleSheet.create({
    button: {
      backgroundColor: Colors.ufoGreen,
      width: w,
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: mt,
      borderRadius: 5,
    },
  });

export const TxtBtnStyles = StyleSheet.create({
  txtButton: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
