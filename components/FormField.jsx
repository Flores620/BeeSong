import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  isPassword,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-yellow-300 font-pmedium">{title}</Text>
      <View
        className="w-full h-14 px-4 rounded-full border flex flex-row items-center"
        style={{ backgroundColor: "#161409", borderColor: "#161409", borderWidth: 1 }}
      >
        <TextInput
          className="flex-1 text-yellow-300 font-u_regular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#6A5D19"
          secureTextEntry={isPassword && !showPassword}
          onChangeText={handleChangeText}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eye}
              className="w-6 h-6"
              resizeMode="contain"
              style={{ tintColor: showPassword ? "#FFD502" : "#6A5D19" }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
