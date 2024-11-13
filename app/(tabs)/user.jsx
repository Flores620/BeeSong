import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/profile.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.username}>Taputa Taputi</Text>
          <Text style={styles.subscribers}>Subscriber 50K</Text>
        </View>
      </ImageBackground>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="play-circle-outline" size={24} color="#FFDD00" />
          <Text style={styles.menuText}>Your Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="file-download" size={24} color="#FFDD00" />
          <Text style={styles.menuText}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="history" size={24} color="#FFDD00" />
          <Text style={styles.menuText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="account-circle" size={24} color="#FFDD00" />
          <Text style={styles.menuText}>Switch account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  username: {
    color: '#FFDD00',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subscribers: {
    color: '#FFDD00',
    fontSize: 16,
  },
  menu: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    color: '#FFDD00',
    fontSize: 16,
    marginLeft: 10,
  },
});
