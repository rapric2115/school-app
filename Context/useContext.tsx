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
    formatCurrency: (paymentAmount: number) => void;
}


// Create a Context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); // Initial state can be null or an object
    const [students, setStudents] = useState<Student[] | null>(null); // State for students
    const [loading, setLoading] = useState<boolean>(false); // State for loading
    const [totalTuition, setTotalTuition] = useState<number>(0); // State for total tuition
    const [message, setMessage] = useState<string>(''); // State for

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    const payment = (paymentAmount: number) => {
        setMessage('Your Payment is being Process, please wait until confirmation...');
     if(totalTuition >= 0) {
         // Simulate processing time with a timeout
         setTimeout(() => {
             // Update total tuition only if paymentAmount is valid
             if (paymentAmount > 0) {
                 setTotalTuition(prevTotal => prevTotal - paymentAmount);
                 setMessage(`Your Payment is Complete. You paid US ${formatCurrency(paymentAmount)} for your Tuition.`);

                 setTimeout(() => {
                    setMessage('')
                 }, 5000)
             } else {
                 setMessage('Invalid payment amount.');
             }
         }, 7000); // Simulate a 7-second processing time
         
     } 
    };

    useEffect(() => {
        const fetchStudentData = async () => {
            setLoading(true); // Set loading to true before fetching data
            try {
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, "students"));
                const studentsData: Student[] = [];
                let totalTuitionAmount = 0;

                querySnapshot.forEach((doc) => {
                    const studentData = { id: doc.id, ...doc.data() } as Student;
                    studentsData.push(studentData);

                    // Correctly access the tuition property from each student object
                    if (studentData.tuition) {
                        totalTuitionAmount += studentData.tuition; // Sum up tuition payments
                    }
                });
                
                setStudents(studentsData); // Update state with fetched data
                setTotalTuition(totalTuitionAmount); // Set total tuition amount
            } catch (error) {
                console.error("Error fetching student data: ", error);
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };

        fetchStudentData(); // Call the fetch function

        
    }, []); // Empty dependency array means this runs once on mount

    return (
        <AppContext.Provider value={{ user, setUser, students, setStudents, loading, setLoading, totalTuition, message, payment,
            formatCurrency
         }}>
            {children}
        </AppContext.Provider>
    );
};