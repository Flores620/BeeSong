import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        
        <Image 
          source={require('../../assets/logo/bee.png')}  
          style={styles.beeImage} 
        />
       
        <Text style={styles.headerText}>Music</Text>
      </View>

      
      <View style={styles.categoryContainer}>
        {['Relax', 'Sleep', 'Romance', 'Sad', 'Energizer'].map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.albumSectionTitle}>Albums for you</Text>
      <Link href = "./NowPlaying"> 
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumScrollContainer}>
      
        {Array(6).fill(0).map((_, index) => (
          <View key={index} style={styles.albumCard}>
            <Image 
              source={require('../../assets/image/duck.png')} 
              style={styles.albumImage} 
            />
            <Text style={styles.albumTitle}>Alibaba</Text>
            <Text style={styles.albumArtist}>Masugdasgr</Text>
          </View>
        ))}
      </ScrollView>
      </Link>
      <Text style={styles.albumSectionTitle}>Albums for you</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumScrollContainer}>
       
        {Array(6).fill(0).map((_, index) => (
          <View key={index} style={styles.albumCard}>
            <Image 
              source={require('../../assets/image/duck.png')} 
              style={styles.albumImage} 
            />
            <Text style={styles.albumTitle}>Alibaba</Text>
            <Text style={styles.albumArtist}>Masugdasgr</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row', 
  },
  beeImage: {
    width: 45, 
    height: 45, 
    marginRight: 5, 
  },
  headerText: {
    color: '#FFDC00',
    fontSize: 30,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#25241E', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFDC00',
    fontSize: 14,
  },
  albumSectionTitle: {
    color: '#FFDC00',
    fontSize: 18,
    marginLeft: 15,
    marginVertical: 10,
  },
  albumScrollContainer: {
    marginHorizontal: 10,
  },
  albumCard: {
    width: 100,
    alignItems: 'center',
    marginRight: 15,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  albumTitle: {
    color: '#FFDC00',
    marginTop: 5,
    fontWeight: 'bold',
  },
  albumArtist: {
    color: '#6A5D19',
    fontSize: 12,
  },
});
