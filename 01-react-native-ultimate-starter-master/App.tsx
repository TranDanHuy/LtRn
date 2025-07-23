import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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

const [todoList, setTodoList] = useState(
  [
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 7, title: "CR 8" },
    { id: 7, title: "CR 9" },
    { id: 7, title: "CR 10" },
    

  ]
)


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
     <Button title='ADD NEW' onPress={() => alert("click me")}/>
      <ScrollView style={{marginTop: 20, borderColor: "red", borderWidth: 1}}>
        {todoList.map(todo => {
          return(
            <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
          )
        })}
      </ScrollView>

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
    paddingHorizontal: 20,
    marginTop: 50,
  },
  test: {
    color: "blue",
  },
  test1: {
    color: "green",
  },
  test2: {
    color: "blue",
  },
  todo: {
    fontSize: 30,
    backgroundColor: "yellow",
    marginBottom: 20,
    padding: 15,

  }
});
