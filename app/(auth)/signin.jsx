import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import CustomButton from "../../components/CustomButton"; 
import FormField from "../../components/FormField";
import { Link, router, redirect } from "expo-router";
import {images} from "../../constants"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View
          className = "">
            <Image
              source = {images.logo}
              className = "w-[300px] h-[150px] pt-10"
              resizeMode='contain'
              /> 
        </View>

        <FormField
          title="Enter email address"
          value={email}
          placeholder="Email"
          handleChangeText={setEmail}
          otherStyles="mt-5"
        />
        <FormField
          title="Password"
          value={password}
          placeholder="Password"
          handleChangeText={setPassword}
          isPassword={true}
          otherStyles="mt-5"
        />

        <CustomButton
          title="Log In"
          handlePress={()=>router.push('/home')}
          containerStyles="w-full mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-yellow-300 font-pregular">
            Don't have an account?
          </Text>
          <Link
            href="/signup"
            className="text-lg font-u_bold" style={{ color: "#6A5D19" }}
          >
            Create an account
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
