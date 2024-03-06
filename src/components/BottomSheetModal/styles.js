import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const BottomSheetModalStyles = StyleSheet.create({
  bottomSheetContainer: {
    marginTop: 10,
  },
  btnBottomSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    //borderBottomWidth: 1,
    //borderBottomColor: Colors.lightGray,
    borderColor: Colors.arsenic,
    borderWidth: 0.7,
    height: 70,
    borderRadius: 5,
  },
  valueBtnBottomSheet: {
    fontSize: 17,
    color: Colors.quickSilver,
  },
  valueSelectedBtnBottomSheet: {
    fontSize: 17,
    color: Colors.black,
  },
  bgModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgCloseModal: {
    backgroundColor: Colors.black,
    opacity: 0.3,
    height: '100%',
  },
  contentModal: {
    backgroundColor: Colors.white,
    height: '70%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 7,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  titleModal: {
    fontSize: 19,
    fontWeight: '500',
    color: Colors.arsenic,
  },
  optionsContainer: {
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.black,
  },
  txtOption: {
    fontSize: 20,
    color: Colors.black,
  },
  selectedOption: {
    backgroundColor: Colors.platinum,
    justifyContent: 'space-between',
  },
  btnClose: {
    padding: 10,
  },
  closeIcon: {
    fontSize: 25,
    color: Colors.black,
  },
  arrowDownIcon: {
    fontSize: 17,
    color: Colors.lightGray,
  },
});
