import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity  } from 'react-native';


export default function App({navigation}) {
  const [moves,setmoves]=useState(0)
  // const [moves1,setmoves1]=useState()
  // const [moves2,setmoves2]=useState()
  // const [moves3,setmoves3]=useState()
  // const [moves4,setmoves4]=useState()
  // const [moves5,setmoves5]=useState()
  const [time,settime]=useState(0)
  // const [time1,settime1]=useState()
  // const [time2,settime2]=useState()
  // const [time3,settime3]=useState()
  // const [time4,settime4]=useState()
  // const [time5,settime5]=useState()
useEffect(()=>{
const data=async()=>{
  const  lastpuzzle= await AsyncStorage.getItem('lastpuzzle') 
if(lastpuzzle==='puzzle3'){
  const  movedata= await AsyncStorage.getItem('moves3') 
  console.log(movedata);
       setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time3')    
       settime(timedata)            
}
if(lastpuzzle==='puzzle4'){
 const  movedata= await AsyncStorage.getItem('moves4') 
     setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time4')    
       settime(timedata)       
}
 if(lastpuzzle==='puzzle5'){
  const  movedata= await AsyncStorage.getItem('moves5') 
     setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time5')    
       settime(timedata)       
}
 if(lastpuzzle==='puzzle6'){
  const  movedata= await AsyncStorage.getItem('moves6') 
     setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time6')    
       settime(timedata)       
}
 if(lastpuzzle==='puzzle7'){
  const  movedata= await AsyncStorage.getItem('moves7') 
     setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time7')    
       settime(timedata)       
}
if(lastpuzzle==='puzzle8'){
  const  movedata= await AsyncStorage.getItem('moves8') 
     setmoves(movedata)  
 const  timedata= await AsyncStorage.getItem('time8')    
       settime(timedata)       
}
}
data()
},[])

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/c.jpg')}
      ></Image>
      <View style={styles.Textcontainer}>
        <Text style={styles.text}>Moves</Text>
        <Text style={styles.text}>Time</Text>
      </View>
      <View style={styles.recordcontainer}>
      <View style={styles.text}><Text style={styles.text}>{moves}</Text></View>      
      <View style={styles.text}><Text style={styles.text}>{time}</Text></View>
      </View>
      <View style={styles.imgcontainer}>
      <View style={styles.img}>
        <Image
        style={styles.buttonimg}
        source={require('../assets/home.png')}
      ></Image>
        <Image
        style={styles.buttonimg}
        source={require('../assets/restartgame.png')}
      ></Image>
      </View>
      <View style={styles.buttoncontainer}>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.navigate('NumberRiddle')}
      ></TouchableOpacity>
       <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.goBack()}
      ></TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop:30
  },
  background: {
    width: '100%',
    height:'100%',
    position:"absolute"
  },
  Textcontainer:{
   position:"absolute",
   flexDirection:'row',
   width:"38%",
   height:"46%",
   alignItems:"flex-end",
   justifyContent:"space-between"
  },
  text:{
    color:'#DDB048',
    fontSize:20
  },
  recordcontainer:{
    position:"absolute",
    flexDirection:'row',
    width:"33%",
    height:"50%",
    alignItems:"flex-end",
    justifyContent:"space-between",
  },
  imgcontainer:{
    width:'65%',
    height:"65%",
    justifyContent:'flex-end'
  },
  img:{
    width:'50%',
    height:"10%",
    flexDirection:"row",

  },
  buttonimg:{
    width:"100%",
    height:"100%",
    resizeMode:'contain'
  },
  buttoncontainer:{
    height:"10%",
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-between',
    position:"absolute",
    alignItems:"flex-end",
    zIndex:1,
  },
  button:{
    height:"100%",
    width:'49%',
    borderRadius:50,
    zIndex:1,
  },
});