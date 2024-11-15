
import React, { useContext, useState } from 'react';
import { StyleSheet, Pressable, Text, Dimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../../Context/useContext';
import { BtnColor, ComponentBG } from '../../constants/Colors';

import NotificationMessage from '@/components/NotificationMessage';
import CredictCardIcon from '../../assets/tabIcons/credictCard_icon';
import BankIcon from '../../assets/tabIcons/bank_icon';
import Check_icon from '../../assets/tabIcons/check_icon';

const WIDTH = Dimensions.get('screen').width;

const Payments = (props: any) => {
    const context = useContext(AppContext);
    const [checked, setChecked] = useState(false);
    const { user } = context;

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
    ]

    const payment = [
      {
        id: 'CS',
        title: "COMPLETE SCHOLARSHIP",
        amount: 7500.00 
      },
      {
        id: 'MP',
        title: 'MONTHLY PAYMENT',
        amount: 1500.00 
      },
      {
        id: 'CP',
        title: 'CREDIT TO PAYMENT',
        amount: 0
      }
    ]

  return (
    <ThemedView style={styles.Container}>
         <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome! {user.name}</ThemedText>
            <HelloWave />
        </ThemedView>        
      <ThemedText style={{marginLeft: 20, marginBottom: 10}}>Payments Options.</ThemedText>
      <NotificationMessage amountDue={'1500.00'} />
      <ThemedView style={{flexDirection: 'row', gap: 10, marginTop: 20, justifyContent: 'space-around'}}>
        {payment_Options.map((option) => (
          <Pressable key={option.id} onPress={() => alert('You Payments is been process.')} style={styles.btn}>
            <option.icon size={30} color={'#eee'} style={styles.btnIcon}/>
            <Text style={styles.btnText}>{option.name}</Text>
          </Pressable>
        ))}
      </ThemedView>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
        <ThemedText>Factura Comprobante Fiscal</ThemedText>
        <Pressable
          role="checkbox"
          aria-checked={checked}
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => setChecked(!checked)}>
          {checked && <Check_icon />}
        </Pressable>
      </ThemedView>

      <ThemedView style={{marginTop: 20}}>
        <ThemedText style={{marginLeft: 15}}>Select your Payment Option</ThemedText>
      </ThemedView>
        {payment.map((pay) => (
        <ThemedView style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, backgroundColor: ComponentBG.dark.backgroundColor,
          borderRadius: 10, padding: 10, width: WIDTH * .95, alignSelf: 'center'
        }}>
            <ThemedView style={{backgroundColor: ComponentBG.dark.backgroundColor}}>
              <ThemedText>{pay.title}</ThemedText>
              <ThemedText>US$ {pay.amount}</ThemedText>
            </ThemedView>
            <ThemedView style={{justifyContent: 'center', backgroundColor: ComponentBG.dark.backgroundColor}}>
              <Pressable
                role="checkbox"
                aria-checked={checked}
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={() => setChecked(!checked)}>
                {checked && <Check_icon />}
              </Pressable>
            </ThemedView>
        </ThemedView>
        ))}

      <SafeAreaView />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
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
      display: 'flex',
      flexDirection: 'column',
      width: 131,
      height: 118,
      borderRadius: 10,
      backgroundColor: ComponentBG.dark.backgroundColor,
      justifyContent: 'center'
    },
    btnIcon: {
      color: BtnColor.dark.text,
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      width: 50,
      height: 40
    },
    btnText : {
      color: BtnColor.dark.text,
      textAlign: 'center',
    },
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'coral',
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: 'coral',
    },
})

export default Payments;