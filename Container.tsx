import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./src/screns/Auth";
import Home from "./src/screns/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvatarHome from "./src/screns/AvatarHome";

const Stack = createNativeStackNavigator();

const Container = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Avatar">
        <Stack.Screen name="Avatar" component={Home} />
        <Stack.Screen name="Home" component={AvatarHome} />
        <Stack.Screen name="Lobby" component={Auth} />
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
      {/* <View style={{flex:1}}>
            <Auth/>
        </View> */}
    </>
  );
};

export default Container;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   body:{
//     fontFamily:'roboto'
//   }
//   });
