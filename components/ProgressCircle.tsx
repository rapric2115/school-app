import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ProgressCircleProps {
    radius: number; // Radius of the circle
    strokeWidth: number; // Width of the stroke
    percentage: number; // Percentage to display (0-100)
    color?: string; // Color of the progress circle
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ radius, strokeWidth, percentage, color = 'blue' }) => {
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <View style={styles.container}>
            <Svg height={radius} width={radius}>
                <Circle
                    stroke="#e6e6e6" // Background circle color
                    fill="none"
                    cx={radius / 2}
                    cy={radius / 2}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    stroke={color} // Progress circle color
                    fill="none"
                    cx={radius / 2}
                    cy={radius / 2}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
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
    },
    percentage: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Text color
    },
});

export default ProgressCircle;