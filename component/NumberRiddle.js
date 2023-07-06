import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function App({navigation}) {
  const [sound, setSound] =useState('');
  const [isPlaying, setIsPlaying] =useState('true');
  useEffect(()=>{
    return sound
    ? ()=>{
      console.log('Unloading Sound');
      sound.unloadAsync();
    }
    :undefined
  },[sound])
  const muteHandler=async()=>{
    console.log('Loading Sound');
    const {sound} = await Audio.Sound.createAsync(require('../assets/Hello.mp3')
    ,{isLooping:true});
    setSound(sound);
    if(isPlaying==='true'){
      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying('false')
    }
    else{
      setIsPlaying('true')
      await sound.pauseAsync();
      console.log('Pause Sound');
    }     
  }
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
        <Text style={styles.text}>Select Level</Text>
        <View style={styles.bottombutton}>
          <View style={styles.mutebutton}>
            <TouchableOpacity
            onPress={()=>muteHandler()}
             style={styles.btn}>
          {isPlaying==='true'?<Image
            style={styles.muteImage}
            source={require('../assets/volume.png')}
            ></Image>: <Image
            style={styles.muteImage}
            source={require('../assets/mute.png')}
            ></Image>}
            </TouchableOpacity>
          </View>
        {/* <View style={styles.deletebutton}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('HomeScreen')}
        style={styles.btn}
        ><Image
        style={styles.delete}
        source={require('../assets/delete.png')}
        ></Image></TouchableOpacity>
        </View> */}
        </View>
        <View style={styles.levelcontainer}>
          <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/three.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoThree')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/four.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoFour')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/five.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoFive')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/six.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoSix')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/seven.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoSeven')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        <View style={styles.main}>
         <Image
         style={styles.level}
         source={require('../assets/eight.png')}
        ></Image>
        <TouchableOpacity
        onPress={()=>navigation.navigate('DemoEight')}
        style={styles.levelbutton}
        ></TouchableOpacity>
        </View>
        </View>
        <StatusBar style="auto" />
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
    fontSize:25,
    fontWeight:'bold',
    position:"absolute",
    margin:5
  },
  bottombutton: {
    height: "10%",
    width: "95%",
    position:"absolute",
    marginTop:30,
    flexDirection:"row" ,
    justifyContent:"flex-end"
  },
  deletebutton:{
  height:"100%",
  width:'10%',
},
delete:{
  height:'100%',
  width:'100%',
  resizeMode:'contain',
},
mutebutton:{
  height:"100%",
  width:'10%',
},
muteImage: {
  height:'100%',
  width:'100%',
  resizeMode:'contain',
},
btn:{
  height:'45%',
  width:'100%',
  borderRadius: 50,
},
levelcontainer:{
  height:"50%",
  width:'100%',
  alignItems:'center',

},
main:{
  height:'15%',
  width:'50%',
  marginTop:30
},
level:{
  height:'100%',
  width:'100%',
  resizeMode:"contain"
},
levelbutton:{
  height:'90%',
  width:'98%',
  borderRadius:50,
  position:'absolute',
  zIndex:1,
  marginTop:9,
}
});
