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
}

// Define the shape of the combined context state
interface AppContextType {
    user: User | null; // User can be null if not logged in
    setUser: (user: User | null) => void; // Function to update user state
    students: Student[] | null; // Array of students
    setStudents: (students: Student[] | null) => void; // Function to update student state
    loading: boolean; // Loading state
    setLoading: (loading: boolean) => void; // Function to update loading state
}

// Create a Context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); // Initial state can be null or an object
    const [students, setStudents] = useState<Student[] | null>(null); // State for students
    const [loading, setLoading] = useState<boolean>(false); // State for loading

    useEffect(() => {
        const fetchStudentData = async () => {
            setLoading(true); // Set loading to true before fetching data
            try {
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, "students"));
                const studentsData: Student[] = [];
                querySnapshot.forEach((doc) => {
                    studentsData.push({ id: doc.id, ...doc.data() } as Student);
                });
                setStudents(studentsData); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching student data: ", error);
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };

        fetchStudentData(); // Call the fetch function
    }, []); // Empty dependency array means this runs once on mount

    return (
        <AppContext.Provider value={{ user, setUser, students, setStudents, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};