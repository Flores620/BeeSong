import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
       
        <Image 
          source={require('../../assets/logo/bee.png')} 
          style={styles.beeImage} 
        />
       
        <Text style={styles.headerText}>Music</Text>
      </View>

      
      <View style={styles.searchBar}>
        <Icon name="search" size={18} color="#FFDC00" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#6A5D19"
        />
      </View>

     
      <Text style={styles.searchPrompt}>Search a Song</Text>
    </View>
  );
};

export default SearchScreen;

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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', 
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10, 
  },
  searchInput: {
    color: '#FFDC00', 
    fontSize: 16,
    flex: 1,
  },
  searchPrompt: {
    color: '#6A5D19', 
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
