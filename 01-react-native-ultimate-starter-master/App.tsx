import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //string
  const [name, setName] = useState("hoi dan it");
  //number
  const [age, setAge] = useState(30)
  //null, undefined, boolean
  const test = false;
  //object, aray
  const [person, setPerson] = useState([{
    name: "tam",
    age: 22
  }])

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}> Hello wolrd</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  test: {
    color: "red",
  }
});
