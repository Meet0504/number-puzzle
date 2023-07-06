import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  // const [sound, setSound] =useState('');
  // const [isPlaying, setIsPlaying] =useState('true');
  // const playAudio=async()=>{
  //   console.log('Loading Sound');
  //   const {sound} = await Audio.Sound.createAsync(require('../assets/Hello.mp3')
  //   ,{isLooping:true});
  //   setSound(sound);
  //   await sound.playAsync()
  //   // if(sound){
  //   //   console.log('Unloading Sound');
  //   //   sound.unloadAsync();
  //   // }
  // }
  useEffect(() => {
    setTimeout(()=>{
      return navigation.navigate('NumberRiddle')
    },1000)
  }, []);
  // const muteHandler=async()=>{
  //   console.log('Loading Sound');
  //   const {sound} = await Audio.Sound.createAsync(require('../assets/Hello.mp3')
  //   ,{isLooping:true});
  //   setSound(sound);
  //   if(isPlaying==='true'){
  //     console.log('Playing Sound');
  //     await sound.playAsync()
  //     setIsPlaying('false')
  //   }
  //   else{
  //       setIsPlaying('true')
  //       await sound.pauseAsync();
  //       console.log('Pause Sound');
  //   }     
  // }
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/background.png')}
      ></Image>
      <Image
        style={styles.title}
        source={require('../assets/title.png')}
      ></Image>
      {/* <View style={styles.newgamebutton}>
        <Image
          style={styles.newgame}
          source={require('../assets/newgame.png')}
        ></Image>
        <TouchableOpacity
          style={styles.newbutton}
          onPress={() => navigation.navigate('NumberRiddle')}
        ></TouchableOpacity>
      </View> */}
      {/* <View style={styles.bottombutton}>
            <Image
            style={styles.settingbutton}
            source={require('../assets/setting.png')}
            ></Image>
            {isPlaying==='true'?<Image
            style={styles.muteImage}
            source={require('../assets/volume.png')}
            ></Image>: <Image
            style={styles.muteImage}
            source={require('../assets/mute.png')}
            ></Image>}
            <View style={styles.buttoncontainer}>
            <TouchableOpacity
            style={styles.button}
            ></TouchableOpacity>
              <TouchableOpacity
            style={styles.button}
            onPress={()=>playAudio()}
            ></TouchableOpacity>
            </View>
        </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:30
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  title: {
    width: "60%",
    aspectRatio: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: "center",
    marginTop:150
  },
  // newgamebutton: {
  //   height: '7%',
  //   width: '44%',
  //   marginTop: 100,
  // },
  // newgame: {
  //   height: '100%',
  //   width: '100%',
  //   resizeMode: 'contain',
  // },
  // newbutton: {
  //   height: '99%',
  //   width: '99%',
  //   zIndex: 1,
  //   position: 'absolute',
  //   borderRadius: 50,
  // },
  // bottombutton: {
  //   height: "10%",
  //   width: "70%",
  //   flexDirection: "row",
  //   justifyContent: 'space-around',
  //   alignItems: "center",
  //   marginTop: 100,
  //   borderRadius: 50,
  // },
  // settingbutton: {
  //   width: '25%',
  //   aspectRatio: 1,
  //   resizeMode: 'contain',
  // },
  // muteImage: {
  //   width: '25%',
  //   aspectRatio: 1,
  //   resizeMode: 'contain',
  // },
  // buttoncontainer: {
  //   height: "80%",
  //   width: "75%",
  //   flexDirection: "row",
  //   position: "absolute",
  //   justifyContent: 'space-between',
  // },
  // button: {
  //   width: "33%",
  //   aspectRatio:1,
  //   borderRadius: 50,
  // }
});
