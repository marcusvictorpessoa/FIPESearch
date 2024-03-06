import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const ButtonStyles = (mt, w, color, borderStyle) =>
  StyleSheet.create({
    button: {
      backgroundColor: color,
      width: w,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: mt,
      borderRadius: 5,
      borderWidth: borderStyle ? 1 : 0,
      borderColor: borderStyle ? Colors.arsenic : null,
    },
  });

export const TxtBtnStyles = colorTxt =>
  StyleSheet.create({
    txtButton: {
      color: colorTxt,
      fontSize: 17,
      fontWeight: '300',
    },
  });
