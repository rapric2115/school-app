import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { ComponentBG } from '@/constants/Colors';

interface ProgressCircleProps {
    radius: number; // Radius of the circle
    strokeWidth: number; // Width of the stroke
    percentage: number; // Percentage to display (0-100)
    color?: string; // Color of the progress circle
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ radius, strokeWidth, percentage, color = 'white' }) => {
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <View style={styles.container}>
            <Svg height='100' width='100' viewBox="0 0 100 100">
            <Circle
                    stroke="#E6A540" // Background circle color
                    fill="none"
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    stroke={color} // Progress circle color
                    fill="none"
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 50 50)"
                />
               
            </Svg>
            <Text style={styles.percentage}>{`${percentage}%`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        alignSelf: 'center'
    },
    percentage: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // Text color
    },
});

export default ProgressCircle;