import { View, Text, Image,} from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icons, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icons}
        resizeMode="contain"
        className="w-6 h-6"
        style={{ tintColor: focused ? 'yellow' : '#6A5D19', width: 24, height: 24 }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name = "home"
          options = {{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.home}
                  color = {color}
                  name = "Home"
                  focused = {focused}
                />
              );
            },
            tabBarActiveTintColor: 'yellow',   // Active icon color
            tabBarInactiveTintColor: '#6A5D19',   // Inactive icon color
            tabBarStyle: { backgroundColor: 'black' },
          }}
        />

<Tabs.Screen
          name = "search"
          options = {{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.search}
                  color = {color}
                  name = "Search"
                  focused = {focused}
                />
              );
            },
            tabBarActiveTintColor: 'yellow',   // Active icon color
            tabBarInactiveTintColor: '#6A5D19',   // Inactive icon color
            tabBarStyle: { backgroundColor: 'black' },
          }}
        />

<Tabs.Screen
          name = "library"
          options = {{
            title: 'Library',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.library}
                  color = {color}
                  name = "Library"
                  focused = {focused}
                />
              );
            },
            tabBarActiveTintColor: 'yellow',   // Active icon color
            tabBarInactiveTintColor: '#6A5D19',   // Inactive icon color
            tabBarStyle: { backgroundColor: 'black' },
          }}
        />
<Tabs.Screen
          name = "user"
          options = {{
            title: 'User',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.user}
                  color = {color}
                  name = "User"
                  focused = {focused}
                />
              );
            },
            tabBarActiveTintColor: 'yellow',   // Active icon color
            tabBarInactiveTintColor: '#6A5D19',   // Inactive icon color
            tabBarStyle: { backgroundColor: 'black' },
          }}
        />        
      </Tabs>
    </>
  );
};


export default TabsLayout