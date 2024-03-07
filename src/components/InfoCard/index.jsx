import {Image, View, Text} from 'react-native';
import {InfoCardStyles} from './styles';
import Divider from '../Divider';
import Strings from '../../strings';

export default function InfoCard({
  fipeCodeValue,
  mothReferenceValue,
  acronymFuelValue,
  brandValue,
  modelValue,
  yearValue,
  fuelValue,
  carTypeValue,
  valueValue,
}) {
  return (
    <View style={InfoCardStyles.card}>
      <View style={InfoCardStyles.headerCard}>
        <Text style={InfoCardStyles.headerTitle}>
          {Strings.informations?.toLocaleUpperCase()}
        </Text>
        <Image
          source={require('../../assets/lupa_png.png')}
          resizeMode="contain"
          style={InfoCardStyles.icon}
        />
      </View>
      <Divider />
      <View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.codeFipe?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{fipeCodeValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.mothReference?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{mothReferenceValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.brand?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{brandValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.model?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{modelValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.year?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{yearValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.fuel?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{fuelValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.acronymFuel?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{acronymFuelValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.carType?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{carTypeValue}</Text>
        </View>
        <View style={InfoCardStyles.wrapperRowTxts}>
          <Text style={InfoCardStyles.labelTxt}>
            {Strings.value?.toLocaleUpperCase()}:
          </Text>
          <Text style={InfoCardStyles.valueTxt}>{valueValue}</Text>
        </View>
      </View>
    </View>
  );
}
