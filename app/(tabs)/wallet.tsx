import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, Text, Dimensions, Pressable, Modal, Alert, View } from 'react-native';
import { AppContext } from '../../Context/useContext';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentBG, Colors } from '@/constants/Colors';
import CardModal from '@/components/CardModal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CreditCardForm from '@/components/CreditCardForm';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wallet = () => {
    const context = useContext(AppContext);
    const { user, creditCards } = context;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const formatCreditCardNumber = (cardNumber: string): string => {
        const length = cardNumber.length;
        if (length <= 4) {
            return cardNumber; // Return as is if it's 4 digits or less
        }
        const lastFourDigits = cardNumber.slice(-4); // Get last four digits
        const maskedPart = '* '.repeat(length - 4); // Create masked part
        return `${maskedPart} ${lastFourDigits}`; // Combine masked part with last four digits
    };

    const toggleCardSelection = (index: number) => {
        setSelectedCardIndex(selectedCardIndex === index ? null : index);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
        // console.log('You press the button')
        // alert('You press me')
    }

    const onModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
            
            <SafeAreaView>
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
                                        // backgroundColor: '#eee', 
                                        flexDirection: 'row', justifyContent: 'space-between', 
                                        width: WIDTH * 0.80, padding: 15, paddingTop: 0, alignSelf: 'center'
                                    }}>
                                        <FontAwesome5 name="trash" size={24} color="#F46C1B" />
                                        <ThemedText style={{ fontSize: 20 }}>{card.cardHolder}</ThemedText>
                                    </ThemedView>
                                    <ThemedView style={{ 
                                        backgroundColor: ComponentBG.dark.backgroundColor,
                                        // backgroundColor: '#eee',  
                                        flexDirection: 'row', width: WIDTH * 0.80, 
                                        justifyContent: 'space-between',
                                        padding: 15, alignSelf: 'center'
                                        }}>
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
                </ThemedView>
                {/* Button to add new card */}
                <Pressable style={styles.button} onPress={onAddSticker}>
                    <MaterialIcons name="add" size={38} color="#fff" />
                </Pressable>
            </SafeAreaView>
            {/* Modal for adding a card */}
            <ThemedView style={{zIndex: 1000}}>
                <CardModal isVisible={isModalVisible} onClose={onModalClose}>
                    <CreditCardForm />
                </CardModal>
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
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: WIDTH * 0.80,
        top: HEIGHT * 0.75,
        zIndex: 0
    },
    card: {
        width: WIDTH * 0.90,
        padding: 8,
        backgroundColor: ComponentBG.dark.backgroundColor,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: 20
    },
    CardBorder: {
      borderColor:'#98FC90',
      borderWidth: 3,
      borderRadius: 20,
      height: 200,
      width: WIDTH * 0.95,
      marginBottom: 0
    }
});

export default Wallet;