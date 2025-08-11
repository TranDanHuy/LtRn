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

export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Go to detail"
            onPress={() => navigation.navigate("Details")}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Go user id = 1"
            onPress={() =>
              navigation.navigate("Details", { userId: 1, name: "Huy" })
            }
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Go user id = 2"
            onPress={() =>
              navigation.navigate("Details", { userId: 1, name: "Huy thứ hai" })
            }
          />
        </View>
      </View>
    );
  }
  function DetailsScreen() {
    const route: any = useRoute();

    const navigation: any = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>user id = {route?.params?.userId}</Text>
        <Button title="Go back Home" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  return (
    <NavigationContainer 
    >
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home"
         component={HomeScreen}
         options={{headerTitle: "Trang chủ"}} />
        <Stack.Screen name="Details"
         component={DetailsScreen}
         options={({route}: {route: any} ) => ({
          headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
