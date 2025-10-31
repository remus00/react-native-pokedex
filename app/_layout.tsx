import TanstackQueryProvider from '@/providers/tanstack-query-provider';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

export default function RootLayout() {
    return (
        <TanstackQueryProvider>
            <SafeAreaProvider>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false, title: 'Pokemon App' }}
                    />
                </Stack>
            </SafeAreaProvider>
        </TanstackQueryProvider>
    );
}
