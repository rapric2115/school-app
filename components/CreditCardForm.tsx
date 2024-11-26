import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, Dimensions, Pressable } from 'react-native'
import React, { useContext, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppContext } from '../Context/useContext';
import { Colors, BtnColor, ComponentBG } from '@/constants/Colors';

const WIDTH = Dimensions.get('screen').width;



const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [CVVNumber, setCVVNumber] = useState('');
    // const isPresented = router.canGoBack();
    
    const context = useContext(AppContext);
    
    if (!context) return null; // Ensure context is available

    const { onAddCard } = context;

    const handleAddCard = () => {
        if (cardNumber && cardHolder && expirationDate && CVVNumber) {
            onAddCard({ cardNumber, cardHolder, expirationDate, CVVNumber });
            // Clear fields after adding
            setCardNumber('');
            setCardHolder('');
            setExpirationDate('');
            setCVVNumber('');
        }
    };

  return (
      <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0} // Adjust this value based on your header height
        > 
        <ThemedView style={styles.modalContent}>
            <ThemedView style={styles.modalContent}>
                <ThemedText>Add Credit Card</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="number-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Card Holder Name"
                    value={cardHolder}
                    onChangeText={setCardHolder}
                />
                <ThemedView style={{ flexDirection: 'row', gap: 5, backgroundColor: ComponentBG.light.backgroundColor }}>
                    <TextInput
                        style={styles.input_width_50}
                        placeholder="Expiration Date (MM/YY)"
                        value={expirationDate}
                        onChangeText={setExpirationDate}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        style={styles.input_width_50}
                        placeholder="CVV Number"
                        value={CVVNumber}
                        onChangeText={setCVVNumber}
                        keyboardType="number-pad"
                    />
                </ThemedView>
                <ThemedView style={{ flexDirection: 'row', gap: 10, backgroundColor: ComponentBG.light.backgroundColor }}>
                    {/* <Pressable style={styles.Cancel_button} onPress={onClose}>
                        <ThemedText style={styles.buttonText}>Cancel</ThemedText>
                    </Pressable> */}
                    <Pressable style={styles.button} onPress={handleAddCard}>
                        <ThemedText style={styles.buttonText}>Add Card</ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
        </KeyboardAvoidingView>
  )
}

export default CreditCardForm

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Colors.dark.background
    },
    modalContent: {
        backgroundColor: ComponentBG.light.backgroundColor,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: WIDTH * .9,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius :5,
        padding :10,
        marginBottom :15,
        backgroundColor: '#ccc'
    },
    input_width_50: {
        width: '50%',
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius :5,
        padding :10,
        marginBottom :15,
        backgroundColor: '#ccc'
    },
    button:{
       backgroundColor: BtnColor.dark.backgroundColor,
       paddingVertical :10,
       paddingHorizontal :20,
       borderRadius :5,
       marginBottom :10,
    },
    Cancel_button:{
     backgroundColor: BtnColor.light.backgroundColor,
     paddingVertical :10,
     paddingHorizontal :20,
     borderRadius :5,
     marginBottom :10,
  },
    buttonText:{
       color:'white',
       fontSize :16,
    },
 });