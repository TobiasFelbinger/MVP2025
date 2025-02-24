import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { RootStackParamList } from './types';
import { ContactListScreen } from '../screens/ContactListScreen';
import { ContactDetailsScreen } from '../screens/ContactDetailsScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import { MessageThreadScreen } from '../screens/MessageThreadScreen';
import { JournalScreen } from '../screens/JournalScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Connect' }}
        />
        <Stack.Screen 
          name="ContactList" 
          component={ContactListScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen 
          name="ContactDetails" 
          component={ContactDetailsScreen}
          options={({ route }) => ({ title: route.params.id })}
        />
        <Stack.Screen 
          name="Messages" 
          component={MessagesScreen}
          options={{ title: 'Messages' }}
        />
        <Stack.Screen 
          name="MessageThread" 
          component={MessageThreadScreen}
          options={{ title: 'Chat' }}
        />
        <Stack.Screen 
          name="Journal" 
          component={JournalScreen}
          options={{ title: 'Journal' }}
        />
        <Stack.Screen 
          name="Search" 
          component={SearchScreen}
          options={{ title: 'Search' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 