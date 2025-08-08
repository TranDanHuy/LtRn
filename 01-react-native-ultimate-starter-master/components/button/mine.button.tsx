import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#ccc"
  },
});
interface IProps {
    title: string;
    onPress: () =>  void;
}
const MineButton = (props: IProps) => {
    const{title, onPress} = props;
        return (
    <Pressable 
    style={({pressed}) => ({opacity: pressed === true ? 0.5 : 1, alignSelf: "flex-start"})}
    onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <Entypo name="circle-with-plus" size={30} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};
export default MineButton;
