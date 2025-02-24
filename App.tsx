import React, { useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { RootNavigator } from './src/navigation/RootNavigator';

const queryClient = new QueryClient();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <RootNavigator />
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
} 