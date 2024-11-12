import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  return (
    <SafeAreaView className = "bg-black h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View
          className = "w-full justify-center items-center px-4 my-6">
            <Image
              source = {images.logo}
              className = "w-[300px] h-[150px] pt-10"
              resizeMode='contain'
              /> 

          
            <Text className="text-2xl text-yellow-500 mt-5 font-regular text-center">
              Login to BeeMusic
          </Text>
      
        <CustomButton
            title="Log In"
            handlePress={()=>router.push('/home')}
            containerStyles="w-full mt-7"
        >
        </CustomButton>   
        </View>
      </ScrollView>
      <StatusBar backgroundColor='black' style='light'></StatusBar>
    </SafeAreaView>
  )
}

export default SignIn