import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 0.4,
    width: '100%',
    backgroundColor: Colors.blueBolt,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  welcomeMsg: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '600',
  },
  infoMsg: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '100',
    textAlign: 'justify',
  },
  specificationsLabelContainer: {
    position: 'absolute',
    zIndex: 2,
    //left: '5%',
    bottom: -15,
    backgroundColor: Colors.cultured,
    width: '80%',
    padding: 5,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.arsenic,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  specificationsLabelTxt: {
    fontSize: 18,
    fontWeight: '200',
    color: Colors.arsenic,
    textAlign: 'center',
  },
  content: {
    flex: 0.6,
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  wrapperFields: {
    height: '55%',
    width: '100%',
    justifyContent: 'space-around'
  },
});
