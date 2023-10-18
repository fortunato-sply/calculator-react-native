import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HistoryProvider } from './src/context/History';
import History from './src/pages/History';
import Main from './src/pages/Main';
import './global.css';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <HistoryProvider>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="main" component={Main} />
          <Stack.Screen options={{ headerShown: false }} name="history" component={History} />
        </Stack.Navigator>
      </HistoryProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
