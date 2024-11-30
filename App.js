import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileScreen from './src/pages/profile';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Status bar dengan gaya khas WhatsApp */}
      <StatusBar style="light" backgroundColor="#075E54" />
      {/* Memuat halaman ProfileScreen */}
      <ProfileScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ECE5DD',
    paddingTop: Constants.statusBarHeight,
  },
});
