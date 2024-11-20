import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react';
import { AppContext } from '@/Context/useContext';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import  { ComponentBG, BtnColor } from '../constants/Colors';

const WIDTH = Dimensions.get("screen").width;

const MessageComponent = (props: any) => {
    const { message } = useContext(AppContext);

  return (
    <ThemedView style={styles.Container}>
      <ThemedText>{message}</ThemedText>
    </ThemedView>
  )
}

export default MessageComponent

const styles = StyleSheet.create({
    Container: {
        backgroundColor: ComponentBG.message.backgroundColor,
        width: WIDTH * .55,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }
})