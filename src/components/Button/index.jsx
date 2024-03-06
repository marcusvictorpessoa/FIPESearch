import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {ButtonStyles, TxtBtnStyles} from './styles';
import {Colors} from '../../themes/colors';

export default function Button({...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        ButtonStyles(props.mt, props.w, props.color, props.borderStyle).button,
        props.disabled && {opacity: 0.5},
      ]}>
      <Text style={TxtBtnStyles(props.colorTxt).txtButton}>{props.txt}</Text>
    </TouchableOpacity>
  );
}
