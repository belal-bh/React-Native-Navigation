import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen 
          name="BigImageView"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center",
  }
});

export default App;