import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// importing tabBar icons
import HomeIcon from '../../assets/tabIcons/home_icon';
import DolarIcon from '../../assets/tabIcons/dollar_icon';
import Statement from '../../assets/tabIcons/statement_icon';
import Wallet from '../../assets/tabIcons/wallet_icon';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabsNav = [
    { 
      name: 'index',
      title: 'Home',
      icon: HomeIcon 
    },
    {
      name: 'payments',
      title: 'Payments',
      icon: DolarIcon
    },
    {
      name: 'explore',
      title: 'Statement',
      icon: Statement
    },
    {
      name: 'wallet',
      title: 'Wallet',
      icon: Wallet
    }
  ]

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        {tabsNav.map((tab) => (
        <Tabs.Screen
        key={tab.name}
        name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => <tab.icon size={28}  color={color} style={styles.icon}/>,
          }}
        />
        ))}
        <Tabs.Screen 
          name="modal"
          options={{
            href: null
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
})