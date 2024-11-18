import React, { useContext } from 'react';
import { Image, StyleSheet, Platform, Button, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppContext } from '../../Context/useContext';

// importing Components
import AmountInfo from '../../components/amountInfo';
import StudentInfo from '../../components/studentInfo';
import NotificationMessage  from '../../components/NotificationMessage';

export default function HomeScreen() {
  const context = useContext(AppContext);
  
  if (!context) {
      throw new Error('HomeScreen must be used within an AppProvider');
  }
  
  const { user, setUser, students } = context;
  
  const handleLogin = () => {
      // Simulate a login action
      setUser({ name: 'John Doe', email: 'john@example.com' });
      
  };

  return (
    <ScrollView>
    <ThemedView style={styles.container}>
       {user ? (
                <ThemedView style={styles.info}>
                  <ThemedView>
                    <ThemedView style={styles.titleContainer}>
                      <ThemedText type="title">Welcome! {user.name}</ThemedText>
                      <HelloWave />
                    </ThemedView>
                    <AmountInfo amountDue={'USD 1,500.00'} payBeforeDate={'Nov 15, 2024'}/>
                  </ThemedView>
                  <ThemedView style={styles.titleContainer}>
                    <ThemedView style={styles.info}>
                    {students ? 
                      <StudentInfo />
                    : 'No Student Assigned'  
                    }
                    </ThemedView>
                  </ThemedView>
                 
                </ThemedView>
                
            ) : (
                <Button title="Login" onPress={handleLogin} />
            )}

      {/* Other content remains unchanged */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView> */}
      {/* Additional steps omitted for brevity */}
    </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  info: {
    flexDirection: 'column'
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
});