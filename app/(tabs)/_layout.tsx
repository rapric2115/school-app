import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Importing tabBar icons
import HomeIcon from '../../assets/tabIcons/home_icon';
import DolarIcon from '../../assets/tabIcons/dollar_icon';
import Statement from '../../assets/tabIcons/statement_icon';
import Wallet from '../../assets/tabIcons/wallet_icon';
// import StudentProfile from '../../assets/tabIcons/student_profile_icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabsNav = [
    { 
      name: 'index',
      title: 'Home',
      icon: HomeIcon,
    },
    {
      name: 'payments',
      title: 'Payments',
      icon: DolarIcon,
    },
    {
      name: 'explore',
      title: 'Statement',
      icon: Statement,
    },
    {
      name: 'wallet',
      title: 'Wallet',
      icon: Wallet,
    },
    {
      name: 'StudentProfile',
      title: 'Student Profile',
      icon: Wallet,
      href: null 
    }

    // Removed StudentInfo entry
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Use a transparent background on iOS to show the blur effect
          },
          default: {},
        }),
      }}
    >
        {tabsNav.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) => <tab.icon size={28} color={color} style={styles.icon} />,
              href: tab.href // Keep href here for navigation
            }}
          />
        ))}
        <Tabs.Screen 
          name="modal"
          options={{
            href: null // Ensure this is correctly set if needed
          }}
        />
        
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
});