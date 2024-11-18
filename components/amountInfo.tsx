
import { StyleSheet, Pressable, Dimensions, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';
import  { ComponentBG, BtnColor } from '../constants/Colors';
import { AppContext } from '@/Context/useContext';
import MessageComponent from '@/components/MessageComponent';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('screen').height;

const AmountInfo = (props: any) => {
  const label = "PAY";
  const { totalTuition, payment, message } = useContext(AppContext);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
};

  return (
    <ThemedView style={styles.Container}>
        <View style={{ width: WIDTH * .30}}>
            <Image
              style={styles.image}
              source="https://picsum.photos/seed/696/3000/2000"
              placeholder= "School logo"
              contentFit="cover"
              transition={1000}
            />
        </View>
        <View >
            <ThemedText style={{fontWeight: 'bold'}}>Amount Due</ThemedText>
            <ThemedText style={styles.AmountText}>US {formatCurrency(totalTuition)}</ThemedText>
            <ThemedText style={{textTransform: 'uppercase'}}>Pay before {props.payBeforeDate}</ThemedText>
            {message !== null ?
              <MessageComponent props={message} />
                :
              null
            }
            <Pressable style={styles.btn} onPress={() => payment(1500)}>
              <ThemedText style={styles.btnLabel}>{label}</ThemedText>
            </Pressable>
        </View>
    </ThemedView>
  )
}

export default AmountInfo;

const styles = StyleSheet.create({
  Container: {
    width: WIDTH * .95,
    flexDirection: 'row',
    backgroundColor: ComponentBG.dark.backgroundColor,
    alignSelf: 'center',
    padding: 20,
    // height: HEIGHT * .22,
    borderRadius: 10
  },
  AmountText : {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    height: HEIGHT * .05
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#31363F',
    borderRadius: 50
  },
  btn: {
    backgroundColor: BtnColor.dark.backgroundColor,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10
  },
  btnLabel: {
    color: BtnColor.dark.text,
    fontWeight: BtnColor.dark.FontWeight,
    fontSize: BtnColor.dark.FontSize,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})