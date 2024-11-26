import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { app } from '../firebase/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Define the shape of the user object
interface User {
    name: string;
    email: string;
}

interface Student {
    id: string; 
    name: string;
    last_name: string;
    DOB: Date;
    gender: string;
    tuition: number; // Ensure this matches your Firestore field name
}

// Define the shape of a credit card object
interface CreditCard {
    cardNumber: string; // Changed to string for better handling
    cardHolder: string;
    expirationDate: string;
    CVVNumber: string; // Changed to string for better handling
}

// Define the shape of the combined context state
interface AppContextType {
    user: User | null; // User can be null if not logged in
    setUser: (user: User | null) => void; // Function to update user state
    students: Student[] | null; // Array of students
    setStudents: (students: Student[] | null) => void; // Function to update student state
    loading: boolean; // Loading state
    setLoading: (loading: boolean) => void; // Function to update loading state
    totalTuition: number; // Total tuition amount
    message: string;
    payment: (paymentAmount: number) => void; // Payment function declaration
    formatCurrency: (paymentAmount: number) => string;
    onAddCard: (card: CreditCard) => void; // Updated type for onAddCard
    creditCards: CreditCard[]; // Changed to non-nullable array
}

// Create a Context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); 
    const [students, setStudents] = useState<Student[] | null>(null); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [totalTuition, setTotalTuition] = useState<number>(0); 
    const [message, setMessage] = useState<string>(''); 
    const [creditCards, setCreditCards] = useState<CreditCard[]>([]); // Initialize as an empty array

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    const payment = (paymentAmount: number) => {
        setMessage('Your Payment is being processed...');
        if (totalTuition >= 0) {
            setTimeout(() => {
                if (paymentAmount > 0) {
                    setTotalTuition(prevTotal => prevTotal - paymentAmount);
                    setMessage(`Your Payment is Complete. You paid US ${formatCurrency(paymentAmount)} for your Tuition.`);
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                } else {
                    setMessage('Invalid payment amount.');
                }
            }, 7000);
        }
    };

    useEffect(() => {
        const fetchStudentData = async () => {
            setLoading(true);
            try {
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, "students"));
                const studentsData: Student[] = [];
                let totalTuitionAmount = 0;

                querySnapshot.forEach((doc) => {
                    const studentData = { id: doc.id, ...doc.data() } as Student;
                    studentsData.push(studentData);

                    if (studentData.tuition) {
                        totalTuitionAmount += studentData.tuition;
                    }
                });

                setStudents(studentsData);
                setTotalTuition(totalTuitionAmount);
            } catch (error) {
                console.error("Error fetching student data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
        
    }, []);

    const onAddCard = (card: CreditCard) => {
        // Ensure that this function is not called during render.
        console.log('Adding card:', card); // Debugging log for card addition.
        setCreditCards(prevCards => [...prevCards, card]); // Add new card to existing cards.
        console.log('Updated Credit Cards:', [...creditCards, card]); // Log updated credit cards for debugging.
    };

    return (
        <AppContext.Provider value={{ user, setUser, students, setStudents, loading, setLoading,
            totalTuition, message, payment, formatCurrency, onAddCard, creditCards }}>
            {children}
        </AppContext.Provider>
    );
};