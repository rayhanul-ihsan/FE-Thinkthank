import React from 'react'
import { SimpleLineIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ImgLogo from "../../assets/logo_mobile.png";
import Colors from '../utils/Color';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Auth = () => {
  return (
    <View className="flex-1 justify-center bg-blue-500" style={{backgroundColor:Colors.BLUE}}>
      {/* <Feather name="star" size={80} color="black" /> */}
      <View className='my-56 items-center'>
        <Image
          source={ImgLogo}
          className="w-48 h-32 -rotate-6"
        />
      </View>
      <View className="p-4" >
      {/* <Text className=''>hjsabhsd</Text> */}
        <Pressable className="bg-white mx-4 border-spacing-4 p-2 rounded-full"> 
          <View className="flex flex-row justify-center">
            <SimpleLineIcons name="social-google"  size={20} color="red" />
            <Text className=" color-red text-[20px] font-bold ml-2" >Continue with Google</Text>
          </View>
        </Pressable>
        <Text className="text-white text-center mt-2">by continue, you agree to the Terms and Privacy</Text>
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})
