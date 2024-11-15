import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import { ComponentBG } from '../constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const NotificationMessage = (props: any) => {
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
    <View style={{display:'flex', justifyContent: 'flex-end'}}>
        <ThemedText>Total Balance</ThemedText>
        <ThemedText style={styles.AmountText}>US$ {props.amountDue}</ThemedText>
    </View>
</ThemedView>

  )
}

export default NotificationMessage

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: ComponentBG.dark.backgroundColor,
        justifyContent: 'space-between',
        width: WIDTH * .95,
        borderRadius: 10,
        padding: 20,
        alignSelf: 'center'
    },
    AmountText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: '#31363F',
        borderRadius: 50
      },
})