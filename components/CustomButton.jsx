import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, 
    textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-yellow-500 rounded-xl min-h-[62px] justify-center items-center
             ${containerStyles} ${isLoading ? 'opacity-50':'' } `}
        
        
        >
            <Text className={`font-bold text-lg ${textStyles}`}>
                {title}
            </Text>
       
    </TouchableOpacity>
  )
}

export default CustomButton