import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  //data type
//string
  const [name, setName] = useState<string>("a");

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
      
     <View>
      <TextInput 
      onChangeText={value => setName(value)}
      value={name}
      autoCapitalize='none'
      autoCorrect= {false}
      //keyboardType='numeric'
      //maxLength={2}
      //multiline
      style={{
        
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
      }}/>
      <Text style={styles.test1}>{name}</Text>
     
     </View>
     <Button title='ADD NEW'/>
      <TextInput style={styles.test2}> Tôi là Đan Huy</TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    fontSize: 60,
    color:"red",
    paddingTop: 20,
    paddingHorizontal: 20
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
