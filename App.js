import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
    </SafeAreaView>
  );
}

