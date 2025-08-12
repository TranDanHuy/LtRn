import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./components/learn/home";
import HomeDetail from "./components/learn/home.detail";
import Like from "./components/learn/like";
import LikeDetail from "./components/learn/like.detail";
import About from "./components/learn/about";
import ChangePassword from "./components/learn/change.password";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabApp = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
      </Tab.Navigator>
    );
  };
  const stackApp = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabApp}
        options={{ headerTitle: "Trang chủ", headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetail}
        options={({ route }: { route: any }) => ({
          headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
        })}
      />
      <Stack.Screen name="LikeDetails" component={LikeDetail} />
    </Stack.Navigator>
    
    )
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="StackApp" component={stackApp} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="ChangPassword" component={ChangePassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
