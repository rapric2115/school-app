import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ComponentBG, BtnColor } from '../constants/Colors';
import { AppContext } from '@/Context/useContext';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const StudentInfo = () => {
  const { students, loading } = useContext(AppContext);

  // Show loading state if loading is true
  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  // Handle case where students might be null
  if (!students || students.length === 0) {
    return <ThemedText>No student data available.</ThemedText>;
  }

  console.log('Here is the student data from studentInfo: ', students[0].grade_score)

  return (
    
    <View>
      {students.map((student: any, i: any) => (
        <ThemedView  key={student.id} style={styles.Container}>
            <ThemedText type='defaultSemiBold'>Important Information</ThemedText>
            {/* Map over students and display their information */}
              <View style={styles.Normal}>
                <ThemedText style={styles.AmountText} type='defaultSemiBold'>
                {i + 1} Student: {student.given_name} {student.last_name}
                </ThemedText>
                <ThemedText style={styles.grade} type='defaultSemiBold'>{student.grade}</ThemedText>
                <ThemedText>{student.information}</ThemedText>
                <Pressable onPress={() => alert(`You press my profile ${student.given_name}`)} style={styles.btn}>
                  <ThemedText style={styles.btnText}>{student.given_name} Profile</ThemedText>
                </Pressable>
              </View>
        </ThemedView>
      ))}
    </View>
    
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  Container: {
    width: WIDTH * 0.95,
    flexDirection: 'column', // Change to column for vertical stacking
    backgroundColor: ComponentBG.dark.backgroundColor,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    paddingBottom: 20,
    marginVertical: 10
  },
  AmountText: {
    fontSize: 30,
    paddingTop: 10,
  },
  Normal: {
    marginBottom: 10, // Add some spacing between student entries
  },
  grade: {
    marginTop: 0,
  },
  btn: {
    width: WIDTH * .80,
    height: HEIGHT * .05,
    backgroundColor: BtnColor.dark.backgroundColor,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});