import React from 'react'
import { TextInput } from 'react-native'
import { Avatar } from "react-native-elements";
import { Image, View, Text, Pressable } from 'react-native'
import ImgLogo from "../../assets/logo_mobile.png";
import ImgLogo1 from "../../assets/emoj2.jpeg";
import ImgLogo2 from "../../assets/emoj3.jpeg";
import ImgLogo3 from "../../assets/emoj4.jpeg";
// import ImgLogo4 from "../../assets/Ellipse 8.png";
// import ImgLogo5 from "../../assets/Ellipse 11.png";
// import ImgLogo6 from "../../assets/Ellipse 9.png";
// import ImgLogo7 from "../../assets/Ellipse 10.png";
// import ImgLogo8 from "../../assets/Ellipse 13.png";
// import ImgLogo9 from "../../assets/Ellipse 12.png";
// import ImgLogo10 from "../../assets/Ellipse 7.png";
// import ImgLogo11 from "../../assets/Ellipse 6.png";
import ImgLogo12 from "../../assets/emoj1.jpeg";
import avatar from '../mocks/avatar'
import AvatarTrivia from '../componets/Avatar';



const Home = () => {
  return (
    <View className="flex-1 justify-center bg-slate-950">
      <View className="my-56  items-center">
        <View className="w-3/4 items-center">
          <View className="mt-20 items-center">
            <Image
              source={ImgLogo}
              className="w-48 h-32 -rotate-6 " 
            />
              <Text className=" text-white text-[20px] font-bold ">
                CHOOSE YOUR AVATAR
              </Text>
          </View>
          <View className=" flex-row flex-wrap my-10 border-spacing-4 items-center">
            {avatar.map((item, index) => (
              <AvatarTrivia 
              key={index}
              image={item.image}/>
            ))}

            {/* <Avatar/> */}
          </View>
          
          <TextInput
            className="border-2 my-4 border-white text-white rounded-2xl p-2 w-full mt-8 "
            placeholder="Enter your name"
          />
          <Pressable className="bg-white  border-spacing-4 p-3 w-full rounded-2xl">
            <View className="flex flex-row justify-center">
              <Text className=" color-red text-[20px] font-bold ">
                Continue
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Home