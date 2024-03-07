import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const InfoCardStyles = StyleSheet.create({
  card: {
    width: '90%',
    height: '150%',
    backgroundColor: Colors.white,
    position: 'absolute',
    top: '55%',
    left: '5%',
    borderRadius: 5,
    borderWidth: 0.5,
    //bottom: -15,
    //left: '7%',
    padding: 5,
    borderColor: Colors.arsenic,
    elevation: 2,
    shadowColor: Colors.arsenic,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.arsenic,
  },
  icon: {
    width: 60,
    height: 60,
  },
  wrapperRowTxts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  labelTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.arsenic,
  },
  valueTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.arsenic,
    maxWidth: 250,
    textAlign: 'right'
  },
});
