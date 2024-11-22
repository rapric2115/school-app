import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View, Pressable, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppContext } from '../../Context/useContext';
import { BtnColor } from '@/constants/Colors';
import { Link, router } from 'expo-router';

const WIDTH = Dimensions.get('screen').width;

export default function Modal() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [CVVNumber, setCVVNumber] = useState('');
    const isPresented = router.canGoBack();
    
    const context = useContext(AppContext);
    
   if (!context) return null; // Ensure context is available

   const { onAddCard, creditCards } = context;

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
   const handleCancelCard = () => {
     alert('Close the modal')
   }

   return (
       <ThemedView style={styles.container}>
           <ThemedText>Add Credit Card</ThemedText>
           <ThemedView style={styles.modalContent}>
               <TextInput
                   style={styles.input}
                   placeholder="Card Number"
                   value={cardNumber}
                   onChangeText={setCardNumber}
                   keyboardType="numeric"
               />
               <TextInput
                   style={styles.input}
                   placeholder="Card Holder Name"
                   value={cardHolder}
                   onChangeText={setCardHolder}
               />
               <ThemedView style={{flexDirection: 'row', gap: 5}}>
                <TextInput
                    style={styles.input_width_50}
                    placeholder="Expiration Date (MM/YY)"
                    value={expirationDate}
                    onChangeText={setExpirationDate}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input_width_50}
                    placeholder="CVV Number"
                    value={CVVNumber}
                    onChangeText={setCVVNumber}
                    keyboardType="numeric"
                />
               </ThemedView>
               <ThemedView style={{flexDirection: 'row', gap: 10}}>
               <Pressable style={styles.Cancel_button} onPress={handleCancelCard}>
                   <ThemedText style={styles.buttonText}>Cancel</ThemedText>
               </Pressable>
              
               <Pressable style={styles.button} onPress={handleAddCard}>
                   <ThemedText style={styles.buttonText}>Add Card</ThemedText>
               </Pressable>
               </ThemedView>
           </ThemedView>
       </ThemedView>
   );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   },
   modalContent: {
    //    backgroundColor: ComponentBG.dark.backgroundColor,
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