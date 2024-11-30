import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>WhatsApp</Text>
      <TouchableOpacity>
        <Feather name="more-vertical" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#075E54',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
