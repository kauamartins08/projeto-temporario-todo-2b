import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, Button, FlatList  } from 'react-native';
import logo from "./assets/kaua2info.png";

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.viewLogo}>
     <Image source={logo} style={styles.logo} />
      <Text  style={styles.textLogo}>TODO list</Text>
    </View>
    <View style={styles.viewTask}>
      <TextInput style={styles.inputTask} placeholder="Digite a tarefa"/>
      <Button title="Adicionar"/>
 </View>
    <FlatList style={styles.taskList}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  logo: {
   height:200,
   width: 200,
  },
viewTask:{
  flexDirection: "row",
  marginTop:10
},
inputTask:{
 flex: 1,
 borderColor:"gray",
 borderWidth: 1,
 paddingLeft: 10,
 marginRight:10,

},
viewLogo:{
 alignItems: 'center',
 justifyContent: 'center',

},
textLogo:{
justifyContent: "center",
},

taskList:{
  flex:1,
}


});
