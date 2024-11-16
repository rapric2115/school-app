import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ComponentBG } from '../constants/Colors';
import { AppContext } from '@/Context/useContext';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('screen').height;

const StudentInfo = (props: any) => {
  const { students, loading } = useContext(AppContext);

  console.log('Student Data from studentInfo: ', students)

  // Show loading state if loading is true
  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  // Handle case where students might be null
  if (!students) {
    return <ThemedText>No student data available.</ThemedText>;
  }

  return (
    <ThemedView style={styles.Container}>
      <View>
        <ThemedText style={{ fontWeight: 'bold' }}>Important Information</ThemedText>
        {/* Map over students and display their information */}
        {students ? 
          <View style={styles.Normal}>
            <ThemedText key={students[0].id} style={styles.AmountText}>
              Student: {students[0].given_name} {students[0].last_name} {/* Adjust based on actual data structure */}
            </ThemedText>
            <ThemedText style={styles.grade}>{students[0].grade}</ThemedText>
            <ThemedText>{students[0].information}</ThemedText>
          </View>
        : <ThemedText>There is not student listed!</ThemedText>}
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
    paddingTop: 10,
    // paddingBottom: 10,
    // height: HEIGHT * 0.1,
  },
  Normal: {
    height: HEIGHT * .10
  },
  grade: {
    marginTop: 0,
    fontWeight: 'bold',
  },
 
});