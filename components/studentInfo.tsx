import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ComponentBG } from '../constants/Colors';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('screen').height;

const studentInfo = (props: any) => {
  return (
     <ThemedView style={styles.Container}>
        <View >
            <ThemedText style={{fontWeight: 'bold'}}>Important Information</ThemedText>
            <ThemedText style={styles.AmountText}>Student {props.studentName}</ThemedText>
            <ThemedText style={{fontWeight: 'bold'}}>{props.information}</ThemedText>
            {/* <ThemedText style={{textTransform: 'uppercase'}}>Pay before {props.payBeforeDate}</ThemedText> */}
        </View>
    </ThemedView>
  )
}

export default studentInfo;

const styles = StyleSheet.create({
    Container: {
        width: WIDTH * .95,
        flexDirection: 'row',
        backgroundColor: ComponentBG.dark.backgroundColor,
        alignSelf: 'center',
        padding: 20,
        height: HEIGHT * .20,
        borderRadius: 10
      },
      AmountText : {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 10,
        height: HEIGHT * .10
      },
})