import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import Login from './src/components/Login/Login';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Login />
    </SafeAreaView>
  );
}