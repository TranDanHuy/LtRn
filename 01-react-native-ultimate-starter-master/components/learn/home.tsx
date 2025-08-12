import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View>
      <Text>Home component</Text>
      <Button
        onPress={() => navigation.navigate("HomeDetails")}
        title="Go to detail"
      />
    </View>
  );
};
export default Home;
