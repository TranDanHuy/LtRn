import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //data type
//string
  const [name, setName] = useState<string>("danhuyhehe");

//number
const [age,setAge] = useState<number>(30);
//null, undefined, boolean
const test = null;
//object, array
const [person, setPerson] = useState([{
  name: "Huy",
  age: 21
}])


  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color: "pink"}}> Hello wolrd</Text>
     <View>
      <Text style={styles.test1}>{name}</Text>
      <Text style={styles.test1}>{JSON.stringify(person)}</Text>
      <Text style={styles.test2}> Tôi là Đan Huy</Text>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  test: {
    color: "red",
  },
  test1: {
    color: "green",
  },
  test2: {
    color: "red",
  }
});
