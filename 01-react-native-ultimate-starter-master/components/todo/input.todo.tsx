import { useState } from "react";
import { Alert, Button, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

interface IProps {
  addTodo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");
  const handleAddNewTodo = () => {
    if (!name) {
      Alert.alert("Thông tin k hợp lệ", "Tiêu đề k được trống",
        [
      //{
       // text: 'Cancel',
       // onPress: () => console.log('Cancel Pressed'),
       // style: 'cancel',
      //},
      {text: 'OK hahaa', onPress: () => console.log('OK Pressed')},
    ]
      );
      return;
    }
    addTodo(name);
    setName("");
  };
  return (
    <>
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
       <View>
        <TextInput
          onChangeText={(value) => setName(value)}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          //keyboardType='numeric'
          //maxLength={2}
          //multiline
          style={styles.todoInput}
        />
        <Button title="ADD NEW" onPress={handleAddNewTodo} />
      </View>
     </TouchableWithoutFeedback>
    </>
  );
};
export default InputTodo;
