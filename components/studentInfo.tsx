import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ComponentBG } from '../constants/Colors';

import { app } from '../firebase/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('screen').height;

interface Student {
  id: string; // Firestore document ID
  name: string; // Example field
  age?: number; // Optional field
  grade?: string; // Optional field
}

const StudentInfo = (props: any) => {
  const [studentData, setStudentData] = useState<any[]>([]); // State to hold student data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "students"));
        const students: Student[] = [];
        querySnapshot.forEach((doc) => {
          students.push({ id: doc.id, ...doc.data() } as Student);
        });
        setStudentData(students); // Update state with fetched data
        // console.log('Esta es la data del Estudiante:', students)
      } catch (error) {
        console.error("Error fetching student data: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchStudentData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount


  console.log('Data de Studiante ', studentData[0])

  if (loading) {
    return <ThemedText>Loading...</ThemedText>; // Show loading state
  }

  return (
    <ThemedView style={styles.Container}>
      <View>
        <ThemedText style={{ fontWeight: 'bold' }}>Important Information</ThemedText>
        {/* Assuming studentData contains relevant information */}
        {studentData.map((student) => (
          <ThemedText key={student.id} style={styles.AmountText}>
            Student {studentData[0].given_name} {studentData[0].last_name} {/* Adjust based on actual data structure */}
          </ThemedText>
        ))}
      </View>
    </ThemedView>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  Container: {
    width: WIDTH * 0.95,
    flexDirection: 'row',
    backgroundColor: ComponentBG.dark.backgroundColor,
    alignSelf: 'center',
    padding: 20,
    height: HEIGHT * 0.20,
    borderRadius: 10,
  },
  AmountText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    height: HEIGHT * 0.10,
  },
});