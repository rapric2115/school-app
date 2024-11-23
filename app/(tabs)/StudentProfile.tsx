import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const StudentProfile = () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Student Profile</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}

export default StudentProfile;

const styles = StyleSheet.create({})