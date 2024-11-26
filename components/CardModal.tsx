import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ComponentBG } from '@/constants/Colors';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function CardModal({ isVisible, children, onClose }: Props) {
  return (
    <View>
    <Modal animationType="slide" transparent={true} visible={isVisible}>
        <GestureHandlerRootView>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Choose a sticker</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name="close" color="#fff" size={22} />
                </Pressable>
                </View>
                {children}
            </View>
        </GestureHandlerRootView>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '50%',
    width: '100%',
    backgroundColor: ComponentBG.light.backgroundColor,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: ComponentBG.light.backgroundColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
