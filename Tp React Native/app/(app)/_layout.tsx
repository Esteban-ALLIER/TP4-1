import { Text, } from 'react-native';
import { Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '@/context/ctx';
import React from 'react';
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';



export default function TabLayout() {
  const { user, loading } = useAuth();


  if (!user)
    return <Redirect href="/login" />

  return (

    <Tabs>
      <Tabs.Screen name="tickets" options={{
        title: "Tickets",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={
              focused ? "ticket-outline" : "ticket-outline"
            }
            color={color}
            size={24}
          />
        ),
      }} />
      <Tabs.Screen name="index" options={{
        title: "Dashboard",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={
              focused ? "information-circle" : "information-circle-outline"
            }
            color={color}
            size={24}
          />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={
              focused ? "person-outline" : "person-outline"
            }
            color={color}
            size={24}
          />
        ),
      }} />
    </Tabs>
  )

}