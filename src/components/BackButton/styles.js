import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const BackButtonStyles = StyleSheet.create({
  backBtn: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    height: 70,
    width: 70,
    marginTop: 60,
    borderRadius: 70,
    marginLeft: 15,
  },
  backBtnTxt: {
    fontSize: 40,
    color: Colors.arsenic,
    alignSelf: 'center',
  },
});
