import {SafeAreaView, View} from 'react-native';
import {InfoStyles} from './styles';
import BackButton from '../../components/BackButton';
import InfoCard from '../../components/InfoCard';
import {useRoute} from '@react-navigation/native';

export default function Info() {
  const {params} = useRoute();

  return (
    <SafeAreaView style={InfoStyles.container}>
      <View style={InfoStyles.header}>
        <BackButton />
        <InfoCard
          fipeCodeValue={params?.CodigoFipe}
          mothReferenceValue={params?.MesReferencia}
          acronymFuelValue={params?.SiglaCombustivel}
          brandValue={params?.Marca}
          modelValue={params?.Modelo}
          yearValue={params?.AnoModelo}
          fuelValue={params?.Combustivel}
          carTypeValue={params?.TipoVeiculo}
          valueValue={params?.Valor}
        />
      </View>
      <View style={InfoStyles.content} />
    </SafeAreaView>
  );
}
