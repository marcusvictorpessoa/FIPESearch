import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../themes/colors';
import {useEffect, useState} from 'react';
import {BottomSheetModalStyles} from './styles';
import Strings from '../../strings';

export default function BottomSheetModal({
  title,
  valuePlaceholder,
  value,
  options,
  selectValue,
  isDisable,
  getData,
  spinner,
}) {
  const [showModal, setShowModal] = useState(false);

  function selectOption(op) {
    selectValue(op);
    setShowModal(false);
  }

  async function initOptions() {
    await getData();
  }

  useEffect(() => {
    if (showModal) {
      initOptions();
    }
  }, [showModal]);

  return (
    <View style={BottomSheetModalStyles.bottomSheetContainer}>
      <TouchableOpacity
        disabled={isDisable}
        style={BottomSheetModalStyles.btnBottomSheet}
        onPress={() => setShowModal(true)}>
        <View>
          {!!value?.nome ? (
            <Text style={BottomSheetModalStyles.valueSelectedBtnBottomSheet}>
              {value?.nome}
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
              {spinner ? (
                <ActivityIndicator size={'large'} color={Colors.arsenic} />
              ) : (
                <ScrollView style={BottomSheetModalStyles.optionsContainer}>
                  {options?.map(option => {
                    return (
                      <TouchableOpacity
                        onPress={() => selectOption(option)}
                        key={option?.codigo}
                        style={[
                          BottomSheetModalStyles.option,
                          option?.selected &&
                            BottomSheetModalStyles.selectedOption,
                        ]}>
                        <Text style={BottomSheetModalStyles.txtOption}>
                          {option?.nome}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
