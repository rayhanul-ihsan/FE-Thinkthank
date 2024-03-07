// import { SimpleLineIcons } from "@expo/vector-icons";
// import { Avatar } from "@rneui/themed";
// import { Avatar } from "react-native-elements";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
  Image,
} from "react-native";
import Container from "./Container";
import Auth from "./src/screns/Auth";
// import from 'style.css'
import { setCustomText } from "react-native-global-props";
// import { FontAwesome6 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screns/Home";
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed";

const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontFamily: "roboto",
  },
};

export default function App() {
  setCustomText(customTextProps);
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Container />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// body:{
//   fontFamily:'roboto'
// }
// });
