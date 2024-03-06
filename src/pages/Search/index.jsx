import {SafeAreaView, Text, View} from 'react-native';
import BackgroundSpinner from '../../components/BackgroundSpinner';
import {SearchStyles} from './styles';
import Logo from '../../components/Logo';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import BottomSheetModal from '../../components/BottomSheetModal';
import Button from '../../components/Button';

export default function Search() {
  return (
    <SafeAreaView style={SearchStyles.container}>
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
          />
          <BottomSheetModal
            title={Strings.models?.toUpperCase()}
            valuePlaceholder={Strings.model?.toUpperCase()}
          />
          <BottomSheetModal
            title={Strings.years?.toLocaleUpperCase()}
            valuePlaceholder={Strings.year?.toUpperCase()}
          />
        </View>
        <Button
          onPress={() => {}}
          loading={false}
          disabled={false}
          txt={Strings.search.toLocaleUpperCase()}
          mt={40}
          w={'100%'}
        />
      </View>
    </SafeAreaView>
  );
}
