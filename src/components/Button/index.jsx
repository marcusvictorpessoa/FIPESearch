import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {ButtonStyles, TxtBtnStyles} from './styles';
import {Colors} from '../../themes/colors';

export default function Button({...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        ButtonStyles(props.mt, props.w).button,
        props.disabled && {opacity: 0.5},
      ]}>
      <Text style={TxtBtnStyles.txtButton}>{props.txt}</Text>
    </TouchableOpacity>
  );
}
