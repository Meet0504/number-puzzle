import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native-web';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image
      style={styles.background}
      source={require('../assets/background.png')}
      ></Image>
      <View style={styles.Navigation}>
        <Image
        style={styles.leftnavigation}
        source={require('../assets/left.jpg')}
        ></Image>
      <TouchableOpacity
      style={styles.left}
      onPress={()=>navigation.navigate("HomePage")}
      ></TouchableOpacity>
      <View style={styles.nextnavigation}>
       <Image
        style={styles.rightnavigation}
        source={require('../assets/right.jpg')}
        ></Image>
       <TouchableOpacity
      style={styles.right}
      ></TouchableOpacity>
      </View>
      </View>
      <View style={styles.Head}>
      <Text style={{color:'brown',fontSize:'20px'}}>NUMBER PUZZLE</Text>
      <TouchableOpacity
      style={styles.button}
      >1</TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      >2</TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      >3</TouchableOpacity>
      </View>
      <View style={styles.levelcontainer}>
        <TouchableOpacity
        style={styles.level}
        >Picture Cross</TouchableOpacity>
        <TouchableOpacity
        style={styles.level}
        >Happy Click</TouchableOpacity>
        <TouchableOpacity
        style={styles.level}
        >Bounce Pop</TouchableOpacity>
        <TouchableOpacity
        style={styles.level}
        >Slice Puzzle</TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    height:'100%',
    width:"100%",
    position:"absolute"
  },
  Navigation:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute'
  },
  leftnavigation:{
    height:'10%',
    width:"10%",
    resizeMode:'contain',
  },
  rightnavigation:{
    height:'10%',
    width:"10%",
    resizeMode:'contain',
    position:"absolute"
  },
  left:{
    width:'10%',
    height:"6%",
    zIndex:1,
    position:'absolute'
  },
  nextnavigation:{
    height:"100%",
    width:"100%",
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    position:'absolute'

  },
  right:{
    width:'10%',
    height:"6%",
    zIndex:1,
  },
  Head:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'15px'
  },
  button:{
    height:'100%',
    width:'10%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'brown'
    
  },
  levelcontainer:{
    height:'30%',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'120px'
  },
  level:{
    width:'100%',
    height:'25%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'brown',
    zIndex:1,
    margin:'5px',
    color:'white',
  },
});
