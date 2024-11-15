import React, { useContext } from 'react';
import { Image, StyleSheet, Platform, Button } from 'react-native';

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
  
  const { user, setUser, student, setStudent } = context;
  
  const handleLogin = () => {
      // Simulate a login action
      setUser({ name: 'John Doe', email: 'john@example.com' });
      setStudent({
        name: "Peter",
        last_name: "Doe",
        DOB: new Date('2005-06-15'), // Example date
        gender: "Male"
      });
  };

  return (
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
                    {student ? 
                      <StudentInfo information={'Field Day Trip Friday 23 de 8am a 1pm'} studentName={student.name} />
                    : 'No Student Assigned'  
                    }
                    </ThemedView>
                  </ThemedView>
                  <NotificationMessage amountDue={'1500.00'}/>
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