import { ScrollView, StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import ProfileNavBar from '../../components/navBarProfile';
import ProfileHeader from '../../components/headerProfile';
import React, { useState, useEffect } from 'react';

const mockChats = [
  { id: '1', name: 'Pace Hytam', message: 'Kapan kita berdua?', time: '12:00 PM' },
  { id: '2', name: 'Surya', message: 'Kapan gacha HSR?', time: '11:30 AM' },
  { id: '3', name: 'Farhan', message: 'Cepat kerjain tugas_-', time: '10:15 AM' },
];

const ProfileScreen = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setChats(mockChats);
    }, 1000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
      <ProfileNavBar />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD',
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: 'gray',
    marginTop: 4,
  },
  chatTime: {
    color: 'gray',
    fontSize: 12,
  },
});
