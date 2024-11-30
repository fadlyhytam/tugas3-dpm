import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="message-circle" size={24} color="#075E54" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="phone" size={24} color="#075E54" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="settings" size={24} color="#075E54" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
});
