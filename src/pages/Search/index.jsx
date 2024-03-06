import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import BackgroundSpinner from '../../components/BackgroundSpinner';
import {SearchStyles} from './styles';
import Logo from '../../components/Logo';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import BottomSheetModal from '../../components/BottomSheetModal';
import Button from '../../components/Button';
import useSearchRequests from '../../hooks/useSearchRequests';
import useSearchForm from '../../hooks/useSearchForm';

export default function Search() {
  const {
    loading,
    loadingSearch,
    brands,
    getBrandsFromAPI,
    models,
    getModelsFromAPI,
    years,
    getYearsFromAPI,
    getInfoFromAPI,
  } = useSearchRequests();

  const {
    brand,
    changeBrandValue,
    model,
    changeModelValue,
    year,
    changeYearValue,
    isSubmitDisable,
    resetAllFields,
  } = useSearchForm();

  return (
    <SafeAreaView style={SearchStyles.container}>
      {loadingSearch && <BackgroundSpinner />}
      <View style={SearchStyles.header}>
        <Logo
          logo_with={'100%'}
          logo_height={'100%'}
          logo_color={Colors.white}
          container_flex={0.25}
          container_width={'100%'}
          container_height={'100%'}
        />
        <Text style={SearchStyles.welcomeMsg}>{Strings.welcome}</Text>
        <Text style={SearchStyles.infoMsg}>{Strings.info}</Text>
        <View style={SearchStyles.specificationsLabelContainer}>
          <Text style={SearchStyles.specificationsLabelTxt}>
            {Strings.selectTheSpecifications?.toLocaleUpperCase()}
          </Text>
        </View>
      </View>
      <View style={SearchStyles.content}>
        <View style={SearchStyles.wrapperFields}>
          <BottomSheetModal
            title={Strings.brands?.toLocaleUpperCase()}
            valuePlaceholder={Strings.brand?.toUpperCase()}
            options={brands}
            getData={getBrandsFromAPI}
            spinner={loading}
            isDisable={false}
            validate={false}
            value={brand}
            selectValue={changeBrandValue}
          />
          <BottomSheetModal
            title={Strings.models?.toUpperCase()}
            valuePlaceholder={Strings.model?.toUpperCase()}
            options={models}
            getData={getModelsFromAPI}
            spinner={loading}
            isDisable={false}
            validate={!brand?.nome}
            value={model}
            selectValue={changeModelValue}
          />
          <BottomSheetModal
            title={Strings.years?.toLocaleUpperCase()}
            valuePlaceholder={Strings.year?.toUpperCase()}
            options={years}
            getData={getYearsFromAPI}
            spinner={loading}
            isDisable={false}
            validate={!model?.nome}
            value={year}
            selectValue={changeYearValue}
          />
        </View>
        <View style={SearchStyles.wrapperRowBtns}>
          <Button
            onPress={() => resetAllFields()}
            loading={false}
            color={Colors.white}
            colorTxt={Colors.arsenic}
            borderStyle={true}
            disabled={false}
            txt={Strings.cleanFields?.toLocaleUpperCase()}
            mt={0}
            w={'48%'}
          />
          <Button
            onPress={() =>
              getInfoFromAPI(brand?.codigo, model?.codigo, year?.codigo)
            }
            color={Colors.ufoGreen}
            colorTxt={Colors.white}
            loading={false}
            borderStyle={false}
            disabled={isSubmitDisable}
            txt={Strings.search.toLocaleUpperCase()}
            mt={0}
            w={'48%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
