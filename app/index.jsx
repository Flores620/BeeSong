import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Link, redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from "../constants"
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-black h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View
          className = "w-full justify-center items-center min-h-screen h-[85vh] px-4">
            <Image
              source = {images.logo}
              className = "w-[300px] h-[150px] pt-10"
              resizeMode='contain'
              /> 

          <View className= "relative mt-5">
            <Text className="text-2xl text-yellow-500 font-bold text-center">
              A streaming music application for mobile.
          </Text>
          </View>

          <CustomButton
            title="Get Started"
            handlePress={()=>router.push('/signin')}
            containerStyles="w-full mt-7"
          >

          </CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='black' style='light'></StatusBar>
    </SafeAreaView>
  );
}

