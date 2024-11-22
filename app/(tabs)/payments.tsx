import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, Dimensions, ScrollView, TextInput } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../../Context/useContext';
import { BtnColor, ComponentBG, Colors } from '../../constants/Colors';

import NotificationMessage from '@/components/NotificationMessage';
import CredictCardIcon from '../../assets/tabIcons/credictCard_icon';
import BankIcon from '../../assets/tabIcons/bank_icon';
import Check_icon from '../../assets/tabIcons/check_icon';
import MessageComponent from '@/components/MessageComponent';

const WIDTH = Dimensions.get('screen').width;

const Payments = (props: any) => {
    const context = useContext(AppContext);
    const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
    const [tuitionAmount, setTuitionAmount] = useState<number>(0); // Initialize to 0
    const [comprobanteFiscal, setComprobanteFiscal] = useState<boolean>(false);
    const { user, totalTuition, formatCurrency, payment, message } = context;
    const [number, onChangeNumber] = useState<string>(''); // State for input

    const payment_Options = [
      {
        id: 'Tarjeta',
        name: 'Tarjeta de Credito',
        icon: CredictCardIcon
      },
      {
        id: 'banco',
        name: 'Transferencia Bancaria',
        icon: BankIcon
      }
    ];

    const paymentsData = [
      {
        id: 'CS',
        title: "COMPLETE SCHOLARSHIP",
        amount: 7500.00 
      },
      {
        id: 'MP',
        title: 'MONTHLY PAYMENT',
        amount: 1500.00 
      }
    ];

    // Initialize checkedItems based on paymentsData length
    useEffect(() => {
        setCheckedItems(Array(paymentsData.length).fill(false)); // Initialize with false values
    }, [paymentsData.length]);

    const ToPay = (amount: number) => {
      setTuitionAmount(amount);
    };

    const toggleCheckbox = (index: number) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checkbox state
      setCheckedItems(newCheckedItems);
      
      if (newCheckedItems[index]) {
          ToPay(paymentsData[index].amount); // Set tuition amount when checked
      } else {
          ToPay(0); // Reset tuition amount if unchecked
      }
    };

    // Handle input change and convert to number
    const handleInputChange = (inputValue: string) => {
        onChangeNumber(inputValue);
        
        // Convert to number and update tuition amount only if input is valid
        const convertedNumber = Number(inputValue);
        if (!isNaN(convertedNumber)) {
            setTuitionAmount(convertedNumber);
        } else {
            setTuitionAmount(0); // Reset to 0 if input is invalid
        }
    };

  return (
    <ScrollView style={styles.ScrollViewContainer}>      
      <ThemedView style={styles.Container}>
          <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome! {user.name}</ThemedText>
              <HelloWave />
          </ThemedView>        
          <ThemedText style={{marginLeft: 20, marginBottom: 10}}>Payments Options.</ThemedText>
           {message !== '' ? 
          <ThemedView style={{justifyContent: 'center', alignContent: 'center', width: WIDTH * .99, paddingVertical: 20 }}>
           <MessageComponent /> 
          </ThemedView>
           : null }
          <NotificationMessage amountDue={formatCurrency(totalTuition)} />
          <ThemedView style={{flexDirection: 'row', gap: 10, marginTop: 20, justifyContent: 'space-around'}}>
            {payment_Options.map((option) => (
              <Pressable key={option.id} onPress={() => alert('Your Payment is being processed.')} style={styles.btn}>
                <option.icon size={30} color={'#eee'} style={styles.btnIcon}/>
                <Text style={styles.btnText}>{option.name}</Text>
              </Pressable>
            ))}
          </ThemedView>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <ThemedText>Factura Comprobante Fiscal</ThemedText>
            <Pressable
              role="checkbox"
              aria-checked={checkedItems.some(checked => checked)} // Check if any checkbox is checked
              style={[styles.checkboxBase, comprobanteFiscal && styles.checkboxChecked]}
              onPress={() => setComprobanteFiscal(!comprobanteFiscal)}>
              {comprobanteFiscal && <Check_icon />}
            </Pressable>
          </ThemedView>

          <ThemedView style={{marginTop: 20}}>
            <ThemedText style={{marginLeft: 15}}>Select your Payment Option</ThemedText>
          </ThemedView>
          {paymentsData.map((pay, index) => (
            <ThemedView key={pay.id} style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, backgroundColor: ComponentBG.dark.backgroundColor,
              borderRadius: 10, padding: 10, width: WIDTH * .95, alignSelf: 'center'
            }}>
                <ThemedView style={{backgroundColor: ComponentBG.dark.backgroundColor}}>
                  <ThemedText>{pay.title}</ThemedText>
                  <ThemedText>US$ {pay.amount}</ThemedText>
                </ThemedView>
                <ThemedView style={{justifyContent: 'center', backgroundColor: ComponentBG.dark.backgroundColor}}>
                  <Pressable
                    role="checkbox"
                    aria-checked={checkedItems[index]}
                    style={[styles.checkboxBase, checkedItems[index] && styles.checkboxChecked]}
                    onPress={() => toggleCheckbox(index)}>
                    {checkedItems[index] && <Check_icon />}
                  </Pressable>
                </ThemedView>
            </ThemedView>
          ))}
            <Collapsible title="Credit To Payment">
              <ThemedText >
                Digit the Amount you want to pay:
              </ThemedText>
              {/* Use handleInputChange instead of onChangeNumber directly */}
              <TextInput
                  style={styles.input}
                  onChangeText={handleInputChange}
                  value={number}
                  placeholder="How much you want to pay"
                  keyboardType="numeric"
              />
            </Collapsible>
          <SafeAreaView />
        </ThemedView>
        <ThemedView style={{marginBottom: 20, padding: 10, justifyContent: 'flex-end'}}>
          <Pressable style={[styles.btnButton, {alignSelf: 'flex-end'}]} onPress={() => payment(tuitionAmount)} >
            <ThemedText style={{textAlign: 'center'}}>PAY</ThemedText>
          </Pressable>
        </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
    Container: {
        flex: 1,
        marginTop: 20
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 20,
      marginBottom: 20,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    btn: {
      display:'flex',
      flexDirection:'column',
      width :131,
      height :118,
      borderRadius :10,
      backgroundColor :ComponentBG.dark.backgroundColor,
      justifyContent :'center'
    },
    btnIcon : {
      color : BtnColor.dark.text,
      justifyContent :'center',
      alignSelf :'center',
      textAlign :'center',
      width :50,
      height :40
    },
    btnText : {
       color : BtnColor.dark.text,
       textAlign :'center',
     },
     checkboxBase : {
       width :24,
       height :24,
       justifyContent :'center',
       alignItems :'center',
       borderRadius :4,
       borderWidth :2,
       borderColor :'coral',
       backgroundColor :'transparent',
     },
     checkboxChecked:{
       backgroundColor :'coral',
     },
     btnButton:{
       width : WIDTH * .3,
       padding :10,
       backgroundColor : BtnColor.dark.backgroundColor,
       marginVertical :10,
       borderRadius :10,
     },
     input:{
       height :40,
       margin :12,
       borderWidth :1,
       padding :10,
       backgroundColor:'#eee',
       borderRadius :10,
     }
});

export default Payments;