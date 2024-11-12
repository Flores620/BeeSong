import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Library = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Icon name="chevron-left" size={14} color="#FFDC00" style={styles.chevronleftIcon} />
        <Text style={styles.headerText}>Library</Text>
      </View>

      
      <TouchableOpacity style={styles.likedMusicContainer}>
        <Icon name="thumbs-up" size={30} color="#FFDC00" style={styles.likedIcon} />
        <Text style={styles.likedMusicText}>Liked Music</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.artistContainer}>
        <Image
          source={require('../../assets/image/Masadug.png')}
          style={styles.artistImage}
        />
        <View>
          <Text style={styles.artistName}>Masugdasgr</Text>
          <Text style={styles.artistSubtitle}>Artist 50K subscribers</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    color: '#FFDC00', 
    fontSize: 30,
    fontWeight: 'bold',
  },
  chevronleftIcon: {
    marginRight: 10, 
  },
  likedMusicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  likedIcon: {
    marginLeft: 10,
    marginRight: 25,
  },
  likedMusicText: {
    color: '#FFDC00', 
    fontSize: 18,
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 15, 
  },
  artistName: {
    color: '#FFDC00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistSubtitle: {
    color: '#6A5D19', 
    fontSize: 14,
  },
});
