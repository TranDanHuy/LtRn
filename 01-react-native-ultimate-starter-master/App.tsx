import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color: "pink"}}> Hello wolrd</Text>
     <View>
      <Text style={styles.test1}>Xin chào</Text>
      <Text style={styles.test2}> Tôi là Đan Huy</Text>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
