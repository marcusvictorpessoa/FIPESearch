import {Text, TouchableOpacity, View, Modal, ScrollView} from 'react-native';
import {Colors} from '../../themes/colors';
import {useState} from 'react';
import {BottomSheetModalStyles} from './styles';
import Strings from '../../strings';

export default function BottomSheetModal({
  title,
  valuePlaceholder,
  value,
  options,
  selectValue,
  isDisable,
}) {
  const [showModal, setShowModal] = useState(false);

  /*function selectOption(op) {
    selectValue(op);
    setShowModal(false);
  }*/

  return (
    <View style={BottomSheetModalStyles.bottomSheetContainer}>
      <TouchableOpacity
        disabled={isDisable}
        style={BottomSheetModalStyles.btnBottomSheet}
        onPress={() => setShowModal(true)}>
        <View>
          {value ? (
            <Text style={BottomSheetModalStyles.valueSelectedBtnBottomSheet}>
              {value}
            </Text>
          ) : (
            <Text style={BottomSheetModalStyles.valueBtnBottomSheet}>
              {valuePlaceholder}
            </Text>
          )}
        </View>
        <Text style={BottomSheetModalStyles.arrowDownIcon}>v</Text>
      </TouchableOpacity>
      {showModal && (
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowModal(false)}>
          <View style={BottomSheetModalStyles.bgModal}>
            <View
              onTouchStart={() => setShowModal(false)}
              style={BottomSheetModalStyles.bgCloseModal}
            />
            <View style={BottomSheetModalStyles.contentModal}>
              <View style={BottomSheetModalStyles.headerModal}>
                <Text style={BottomSheetModalStyles.titleModal}>{title}</Text>
                <TouchableOpacity
                  style={BottomSheetModalStyles.btnClose}
                  onPress={() => setShowModal(false)}>
                  <Text style={BottomSheetModalStyles.closeIcon}>X</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={BottomSheetModalStyles.optionsContainer}>
                {options?.map(option => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectOption(option)}
                      key={option?.id}
                      style={[
                        BottomSheetModalStyles.option,
                        option?.selected &&
                          BottomSheetModalStyles.selectedOption,
                      ]}>
                      <Text style={BottomSheetModalStyles.txtOption}>
                        {option?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
