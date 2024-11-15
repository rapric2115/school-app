import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the user object
interface User {
    name: string;
    email: string;
}

interface Student {
    name: string;
    last_name: string;
    DOB: Date;
    gender: string;
}

// Define the shape of the combined context state
interface AppContextType {
    user: User | null; // User can be null if not logged in
    setUser: (user: User | null) => void; // Function to update user state
    student: Student | null; // Student can be null if not assigned
    setStudent: (student: Student | null) => void; // Function to update student state
}

// Create a Context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); // Initial state can be null or an object
    const [student, setStudent] = useState<Student | null>(null); // Initial state can be null or an object

    return (
        <AppContext.Provider value={{ user, setUser, student, setStudent }}>
            {children}
        </AppContext.Provider>
    );
};