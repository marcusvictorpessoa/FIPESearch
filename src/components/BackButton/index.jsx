import {Text, TouchableOpacity} from 'react-native';
import {BackButtonStyles} from './styles';
import Strings from '../../strings';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={goBack} style={BackButtonStyles.backBtn}>
      <Text style={BackButtonStyles.backBtnTxt}>&laquo;</Text>
    </TouchableOpacity>
  );
}
