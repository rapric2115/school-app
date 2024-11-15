import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wallet = () => {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText>Wallet</ThemedText>
      <SafeAreaView />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 20
    }
})

export default Wallet