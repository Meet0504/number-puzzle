import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
         <Image
        style={styles.background}
        source={require('../assets/background.png')}
        ></Image>
        <Image
        style={styles.decoration}
        source={require('../assets/decoration.png')}
        ></Image>
        <Image
         style={styles.board}
         source={require('../assets/board.png')}
        ></Image>
        <Text style={styles.text}>4 x 4</Text>
        <View style={styles.deletebutton}>
        <Image
        style={styles.delete}
        source={require('../assets/delete.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('NumberRiddle')}
        style={styles.back}
        ></TouchableOpacity>
        </View>
        <Text style={styles.Text}>Target Pattern</Text>
        <Image
        style={styles.box}
        source={require('../assets/demo4.png')}
        ></Image>
         <View style={styles.startbutton}>
          <Image
          style={styles.start}
          source={require('../assets/start.png')}
          ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Four')}
        style={styles.button}
        ></TouchableOpacity>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    marginTop:30
  },
  background:{
    height:'100%',
    width:'100%',
    position:'absolute',
  },
  decoration:{
    height:'25%',
    width:"100%",
  },
  board:{
    height:'10%',
    width:'100%',
    resizeMode:'contain',
    position:"absolute",
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    position:"absolute",
    margin:5
  },
  deletebutton:{
  height:"20%",
  width:'95%',
  position:'absolute',
  alignItems:'flex-end',
  marginTop:30,
  marginRight:40,
  zIndex:1
},
delete:{
  height:'25%',
  width:'10%',
  resizeMode:'contain',
  position:"absolute",
},
back:{
  height:'25%',
  width:'10%',
},
box:{
  height:'45%',
  width:'100%',
  resizeMode:'contain'
},

Text:{
  fontSize:30,
  fontWeight:"bold",
  alignItems:"center",
  marginBottom:10
},
startbutton:{
height:'86%',
width:"100%",
position:"absolute",
justifyContent:'flex-end',
alignItems:"center",
marginTop:40
},
start:{
  height:'10%',
  width:'100%',
  resizeMode:"contain"
},
button:{
  height:'10%',
  width:"49%",
  borderRadius:50,
  position:'absolute',
}
});
