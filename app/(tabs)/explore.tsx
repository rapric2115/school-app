import React, { useContext } from 'react';
import { StyleSheet, Image, Platform, Dimensions, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { AppContext } from '../../Context/useContext';
import ProgressCircle from '@/components/ProgressCircle';
import { ComponentBG, Colors } from '@/constants/Colors';

const WIDTH = Dimensions.get('screen').width;

export default function TabTwoScreen() {
  const context = useContext(AppContext);
  const { user, totalTuition, formatCurrency } = context;

  const totalPaid = 1381.64;
  const percentage = Math.floor((totalPaid / totalTuition) * 100);

  return (
    <ScrollView style={styles.ScrollContainer}>
    <ThemedView style={styles.Container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! {user.name}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText style={{marginLeft: 15}}>Statement</ThemedText>
      </ThemedView>

     <ThemedView style={styles.installmentContainer}>
        <ThemedView style={{backgroundColor: ComponentBG.dark.backgroundColor, width: WIDTH * .50}}>
          <ThemedText style={[styles.title, {marginBottom: 10}]}>Installments</ThemedText>
          <ThemedText style={styles.title}>Total  US {formatCurrency(totalTuition)}</ThemedText>
          <ThemedText style={styles.title}>Paid US {formatCurrency(totalPaid)}</ThemedText>
          <ThemedText style={styles.title}>Left US {formatCurrency(totalTuition - totalPaid)}</ThemedText>
        </ThemedView>
        <ThemedView style={{backgroundColor: ComponentBG.dark.backgroundColor, width: WIDTH * .40, justifyContent: 'center'}}>
         <ProgressCircle radius={50} strokeWidth={5} percentage={percentage} color="white" />
        </ThemedView>
     </ThemedView>
     <ThemedText style={{marginVertical: 10, marginLeft: 10}}>History</ThemedText>
     <ThemedView>
     <ThemedView style={[styles.table, {backgroundColor: ComponentBG.dark.backgroundColor}]}>
            {/* Header Row */}
            <ThemedView style={[styles.row, {backgroundColor: ComponentBG.dark.backgroundColor}]}>
                <ThemedText style={styles.headerCell}>Description</ThemedText>
                <ThemedText style={styles.headerCell}>Date</ThemedText>
                <ThemedText style={styles.headerCell}>Late Feed</ThemedText>
                <ThemedText style={styles.headerCell}>Amount Paid</ThemedText>
            </ThemedView>

            {/* Data Rows */}
            {Array.from({ length: 4 }).map((_, index) => (
                <ThemedView key={index} style={[styles.row, {backgroundColor: ComponentBG.dark.backgroundColor}]}>
                    <ThemedText style={styles.cell}>Inscription</ThemedText>
                    <ThemedText style={styles.cell}>Row {index + 1} </ThemedText>
                    <ThemedText style={styles.cell}>Row {index + 1} </ThemedText>
                    <ThemedText style={styles.cell}>Row {index + 1} </ThemedText>
                </ThemedView>
            ))}
            <ThemedView style={[styles.row, {backgroundColor: ComponentBG.dark.backgroundColor}]}>
              <ThemedText style={styles.headerCell}>Total</ThemedText>
                <ThemedText style={styles.headerCell}></ThemedText>
                <ThemedText style={styles.headerCell}>Late Feed Total</ThemedText>
                <ThemedText style={styles.headerCell}>Total</ThemedText>
            </ThemedView>
        </ThemedView>
     </ThemedView>
     <ThemedView style={{justifyContent: 'center', width: WIDTH * .95, marginTop: 10}}>
        <ThemedText style={{justifyContent: 'center', alignSelf: 'center', padding: 8}}>
          For full payment of tuition before the start 
          of schooling, there will be a 10% discount,
          and 5% will be charged for late payment.
        </ThemedText>
     </ThemedView>
    </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollContainer: {
    flex: 1, 
    backgroundColor: Colors.dark.background
  },
  Container: {
    flex: 1,
    marginTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'medium',
    paddingVertical: 3
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 15
  },
  installmentContainer: {
    width: WIDTH * .95,
    flexDirection: 'row',
    backgroundColor: ComponentBG.dark.backgroundColor,
    padding: 15,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  table: {
    borderColor: '#ccc',
    overflow: 'hidden',
    width: WIDTH * .95,
    borderRadius: 10,
    alignSelf: 'center'
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: WIDTH * .95,
    borderRadius: 10
},
headerCell: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
},
cell: {
    flex: 1,
    textAlign: 'center',
},
});
