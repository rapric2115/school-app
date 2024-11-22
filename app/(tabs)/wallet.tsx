import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, Text, Dimensions, Pressable } from 'react-native';
import { AppContext } from '../../Context/useContext';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentBG, Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

// Importing icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wallet = () => {
    const context = useContext(AppContext);
    const { user, creditCards } = context;

    // State to track the selected card index
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const formatCreditCardNumber = (cardNumber: string): string => {
        const length = cardNumber.length;
        if (length <= 4) {
            return cardNumber; // Return as is if it's 4 digits or less
        }
        const lastFourDigits = cardNumber.slice(-4); // Get last four digits
        const maskedPart = '*'.repeat(length - 4); // Create masked part
        return `${maskedPart}${lastFourDigits}`; // Combine masked part with last four digits
    };

    const toggleCardSelection = (index: number) => {
        if (selectedCardIndex === index) {
            // Deselect if the same card is clicked
            setSelectedCardIndex(null);
        } else {
            // Select the clicked card and deselect others
            setSelectedCardIndex(index);
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
            <ThemedView style={styles.Container}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Welcome! {user?.name}</ThemedText>
                    <HelloWave />
                </ThemedView>
                <ThemedText>Choose a card Payment</ThemedText>

                {/* Check if there are any credit cards */}
                {creditCards && creditCards.length > 0 ? (
                    creditCards.map((card, index) => (
                        <Pressable 
                            key={index} 
                            style={[styles.card, selectedCardIndex === index && styles.CardBorder]} 
                            onPress={() => toggleCardSelection(index)} 
                            aria-checked={selectedCardIndex === index}
                        >
                            <ThemedView style={styles.card}>
                                <ThemedView style={{ 
                                  backgroundColor: ComponentBG.dark.backgroundColor, 
                                  flexDirection: 'row', justifyContent: 'space-between', 
                                  width: WIDTH * 0.80 
                                  }}>
                                    <FontAwesome5 name="trash" size={24} color="#F46C1B" />
                                    <ThemedText style={{ fontSize: 20, fontWeight: 'medium' }}>{card.cardHolder}</ThemedText>
                                </ThemedView>
                                <ThemedView style={{ backgroundColor: ComponentBG.dark.backgroundColor, flexDirection: 'row', width: WIDTH * 0.80, justifyContent: 'space-around' }}>
                                    <ThemedText>{formatCreditCardNumber(card.cardNumber)}</ThemedText>
                                    <ThemedText>{card.expirationDate}</ThemedText>
                                    <FontAwesome name="cc-visa" size={30} color="white" />
                                </ThemedView>
                            </ThemedView>
                        </Pressable>
                    ))
                ) : (
                    <ThemedText>No credit cards added.</ThemedText> // Message when no cards are present
                )}

                {/* Button to add new card */}
                <Link style={styles.button} href='/modal'>
                    <Text style={styles.buttonText}>+</Text>
                </Link>
                <SafeAreaView />
            </ThemedView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 20,
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        left: WIDTH * 0.80,
        top: HEIGHT * .75
    },
    buttonText: {
        color: '#FFD233',
        fontSize: 32,
        alignSelf: 'center',
        textAlign: 'center',
    },
    card: {
        width: WIDTH * 0.90,
        padding: 20,
        backgroundColor: ComponentBG.dark.backgroundColor,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        height: 155,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 8,
        marginBottom: 30
    },
    CardBorder: {
      width: WIDTH * 0.95,
      borderColor:'#98FC90',
      borderWidth: 3,
      borderRadius: 20,
      height: 200,
      marginBottom: 0
      
    },
    
});

export default Wallet;