// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { useClock } from 'react-native-timer-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({navigation}) {
  const [number,setnumber]=useState([])
  const [moves,setMoves]=useState(0)
  const [counter, start, pause, reset,isRunning] = useClock({
    from: 0,
    to: Infinity,
    stopOnFinish: true,
  });
  const setHandler = ()=>{
    let copydata=[]
    for(let i=0 ; i<15 ; i++){
      let value=Math.round(Math.random()*14+1)
      while(copydata.includes(value)){
        value=Math.round(Math.random()*14+1)
      }
      copydata.push(value)
    }
    copydata.push('')
    setnumber(copydata)
    if(counter>=1){
      reset()     
      setMoves(0)
    }
  }
  useEffect(()=>{
  setHandler()
  start()
},[])

const checkwin=(copydata)=>{
  if(copydata[0] === 1 && copydata[1] === 2 && copydata[2] === 3 && copydata[3] === 4 && copydata[4] === 5 && copydata[5] === 6 && copydata[6] === 7 && copydata[7] === 8 && copydata[8] === 9 && copydata[9]===10 && copydata[10]===11
    && copydata[11]===12 && copydata[12]===13 && copydata[13]===14 && copydata[14]===15 && copydata[15]===''){
      AsyncStorage.setItem('moves4',moves.toString())
      AsyncStorage.setItem('time4',counter.toString())
      AsyncStorage.setItem('lastpuzzle','puzzle4')
      setHandler()
      return navigation.navigate('Champion')
  }
}
  const numberHandler=()=>{
    let copydata=[...number]
    if(copydata[4]===''){
      const swapvalue=copydata[4]
      copydata[4]=copydata[0]
      copydata[0]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }
    if(copydata[1]===''){
      const swapvalue=copydata[1]
      copydata[1]=copydata[0]
      copydata[0]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }
    else{
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler1=()=>{
    let copydata=[...number]
    if(copydata[5]===''){
      const swapvalue=copydata[5]
      copydata[5]=copydata[1]
      copydata[1]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[0]===''){
      const swapvalue=copydata[0]
      copydata[0]=copydata[1]
      copydata[1]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[2]===''){
      const swapvalue=copydata[2]
      copydata[2]=copydata[1]
      copydata[1]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

    else{
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler2=()=>{
    let copydata=[...number]
    if(copydata[6]===''){
      const swapvalue=copydata[6]
      copydata[6]=copydata[2]
      copydata[2]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[1]===''){
      const swapvalue=copydata[1]
      copydata[1]=copydata[2]
      copydata[2]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[3]===''){
      const swapvalue=copydata[3]
      copydata[3]=copydata[2]
      copydata[2]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
  
    else{
      setnumber(copydata)
    }  
    checkwin(copydata)
  }
  const numberHandler3=()=>{
    let copydata=[...number]
    if(copydata[7]===''){
      const swapvalue=copydata[7]
      copydata[7]=copydata[3]
      copydata[3]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[2]===''){
      const swapvalue=copydata[2]
      copydata[2]=copydata[3]
      copydata[3]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
 
    else{
      setnumber(copydata)
    }  
    checkwin(copydata)
    
  }
  const numberHandler4=()=>{
    let copydata=[...number]
    if(copydata[8]===''){
      const swapvalue=copydata[8]
      copydata[8]=copydata[4]
      copydata[4]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[5]===''){
      const swapvalue=copydata[5]
      copydata[5]=copydata[4]
      copydata[4]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[0]===''){
      const swapvalue=copydata[0]
      copydata[0]=copydata[4]
      copydata[4]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

    else{
      setnumber(copydata)
    }  
    checkwin(copydata)
  }
  const numberHandler5=()=>{
    let copydata=[...number]
    if(copydata[9]===''){
      const swapvalue=copydata[9]
      copydata[9]=copydata[5]
      copydata[5]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[6]===''){
      const swapvalue=copydata[6]
      copydata[6]=copydata[5]
      copydata[5]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[4]===''){
      const swapvalue=copydata[4]
      copydata[4]=copydata[5]
      copydata[5]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[1]===''){
      const swapvalue=copydata[1]
      copydata[1]=copydata[5]
      copydata[5]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
  
    else{
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler6=()=>{
    let copydata=[...number]
    if(copydata[10]===''){
      const swapvalue=copydata[10]
      copydata[10]=copydata[6]
      copydata[6]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[7]===''){
      const swapvalue=copydata[7]
      copydata[7]=copydata[6]
      copydata[6]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[2]===''){
      const swapvalue=copydata[2]
      copydata[2]=copydata[6]
      copydata[6]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[5]===''){
      const swapvalue=copydata[5]
      copydata[5]=copydata[6]
      copydata[6]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

    else{
      setnumber(copydata)
  }
  checkwin(copydata)
  }
  const numberHandler7=()=>{
    let copydata=[...number]
    if(copydata[11]===''){
      const swapvalue=copydata[11]
      copydata[11]=copydata[7]
      copydata[7]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[3]===''){
      const swapvalue=copydata[3]
      copydata[3]=copydata[7]
      copydata[7]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
  
    if(copydata[6]===''){
      const swapvalue=copydata[6]
      copydata[6]=copydata[7]
      copydata[7]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
  
  
    else{
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler8=()=>{
    let copydata=[...number]
    if(copydata[12]===''){
      const swapvalue=copydata[12]
      copydata[12]=copydata[8]
      copydata[8]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[9]===''){
      const swapvalue=copydata[9]
      copydata[9]=copydata[8]
      copydata[8]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[4]===''){
      const swapvalue=copydata[4]
      copydata[4]=copydata[8]
      copydata[8]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

    else{
      setnumber(copydata)
  }
   checkwin(copydata)
  }
  const numberHandler9= ()=>{
    let copydata=[...number]
    if(copydata[13]===''){
      const swapvalue=copydata[13]
      copydata[13]=copydata[9]
      copydata[9]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[8]===''){
      const swapvalue=copydata[8]
      copydata[8]=copydata[9]
      copydata[9]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[5]===''){
      const swapvalue=copydata[5]
      copydata[5]=copydata[9]
      copydata[9]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[10]===''){
      const swapvalue=copydata[10]
      copydata[10]=copydata[9]
      copydata[9]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

      else{
        setnumber(copydata)
    }
     checkwin(copydata)

  }
  const numberHandler10= ()=>{
    let copydata=[...number]
    if(copydata[14]===''){
      const swapvalue=copydata[14]
      copydata[14]=copydata[10]
      copydata[10]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[9]===''){
      const swapvalue=copydata[9]
      copydata[9]=copydata[10]
      copydata[10]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }
    if(copydata[6]===''){
      const swapvalue=copydata[6]
      copydata[6]=copydata[10]
      copydata[10]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }
    if(copydata[11]===''){
      const swapvalue=copydata[11]
      copydata[11]=copydata[10]
      copydata[10]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }

      else{
        setnumber(copydata)
    }
     checkwin(copydata)
    
  }

  const numberHandler11= ()=>{
    let copydata=[...number]
    if(copydata[15]===''){
      const swapvalue=copydata[15]
      copydata[15]=copydata[11]
      copydata[11]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[10]===''){
      const swapvalue=copydata[10]
      copydata[10]=copydata[11]
      copydata[11]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[7]===''){
      const swapvalue=copydata[7]
      copydata[7]=copydata[11]
      copydata[11]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }
      else{
        setnumber(copydata)
    }
     checkwin(copydata)
  }

  const numberHandler12= ()=>{
    let copydata=[...number]
    if(copydata[13]===''){
      const swapvalue=copydata[13]
      copydata[13]=copydata[12]
      copydata[12]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[8]===''){
      const swapvalue=copydata[8]
      copydata[8]=copydata[12]
      copydata[12]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }

      else{
        setnumber(copydata)
    }
     checkwin(copydata)
  }

  const numberHandler13= ()=>{
    let copydata=[...number]
    if(copydata[14]===''){
      const swapvalue=copydata[14]
      copydata[14]=copydata[13]
      copydata[13]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[12]===''){
      const swapvalue=copydata[12]
      copydata[12]=copydata[13]
      copydata[13]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[9]===''){
      const swapvalue=copydata[9]
      copydata[9]=copydata[13]
      copydata[13]=swapvalue
      setnumber(copydata)
      setMoves(moves+1)
    }

      else{
        setnumber(copydata)
    }
     checkwin(copydata)
  }

  const numberHandler14= ()=>{
    let copydata=[...number]
    if(copydata[15]===''){
      const swapvalue=copydata[15]
      copydata[15]=copydata[14]
      copydata[14]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[13]===''){
      const swapvalue=copydata[13]
      copydata[13]=copydata[14]
      copydata[14]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[10]===''){
      const swapvalue=copydata[10]
      copydata[10]=copydata[14]
      copydata[14]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
      else{
        setnumber(copydata)
    }
     checkwin(copydata)
  }

  const numberHandler15= ()=>{
    let copydata=[...number]
    if(copydata[11]===''){
      const swapvalue=copydata[11]
      copydata[11]=copydata[15]
      copydata[15]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
    if(copydata[14]===''){
      const swapvalue=copydata[14]
      copydata[14]=copydata[15]
      copydata[15]=swapvalue
      setnumber(copydata)            
      setMoves(moves+1)
    }
      else{
        setnumber(copydata)
    }
     checkwin(copydata)
  }

  const setBg = (num) => {
    if(num){
      return <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.boxbg}
      ></ImageBackground>
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
        <View style={styles.text}><Text style={{fontSize:20,fontWeight: 'bold'}}>Seconds: {counter}</Text></View>
        <View style={styles.movecontainer}>
        <Image
         style={styles.move}
         source={require('../assets/move.png')}
        ></Image>
        <View style={styles.movecount}><Text style={{fontSize:20,fontWeight: 'bold',color:'white'}}>Moves: {moves}</Text></View>
        </View>
        <View style={styles.setbutton}>
          <View style={styles.deletebutton}>
          <Image
          style={styles.deleteimage}
          source={require('../assets/delete.png')}
          ></Image>
          <TouchableOpacity
          onPress={()=>navigation.navigate('NumberRiddle')}
          style={styles.back}
          ></TouchableOpacity>
          </View>
          <View style={styles.restartbutton}>
          <Image
          style={styles.restartimage}
          source={require('../assets/restart.png')}
          ></Image>
          <TouchableOpacity
          onPress={()=>setHandler()}
          style={styles.restart}
          ></TouchableOpacity>
          </View>
        </View>
        <View style={styles.gamecontainer}>
          <Image
          style={styles.gamebg}
          source={require('../assets/emptybg.png')}
          ></Image>
          <View style={styles.game}>
          <TouchableOpacity
          onPress={()=>numberHandler()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[0]}</Text>{setBg(number[0])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler1()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[1]}</Text>{setBg(number[1])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler2()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[2]}</Text>{setBg(number[2])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler3()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[3]}</Text>{setBg(number[3])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler4()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[4]}</Text>{setBg(number[4])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler5()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[5]}</Text>{setBg(number[5])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler6()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[6]}</Text>{setBg(number[6])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler7()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[7]}</Text>{setBg(number[7])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler8()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[8]}</Text>{setBg(number[8])}</TouchableOpacity>
           <TouchableOpacity
          onPress={()=>numberHandler9()}
          style={styles.code}
          ><Text style={styles.textField}>{number[9]}</Text>{setBg(number[9])}</TouchableOpacity>
           <TouchableOpacity
          onPress={()=>numberHandler10()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[10]}</Text>{setBg(number[10])}</TouchableOpacity>
           <TouchableOpacity
          onPress={()=>numberHandler11()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[11]}</Text>{setBg(number[11])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler12()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[12]}</Text>{setBg(number[12])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler13()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[13]}</Text>{setBg(number[13])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler14()}
          activeOpacity={1}
          style={styles.code}
          ><Text style={styles.textField}>{number[14]}</Text>{setBg(number[14])}</TouchableOpacity>
          <TouchableOpacity
          onPress={()=>numberHandler15()}
            activeOpacity={1}
          style={styles.empty}
          ><Text style={styles.textField}>{number[15]}</Text>{setBg(number[15])}</TouchableOpacity>
          </View>
          </View>
          {/* <View style={styles.bottom}> 
          <View style={styles.settingcontainer}>
          <Image
             style={styles.setting}
             source={require('../assets/setting.png')}
            ></Image>
             <TouchableOpacity
            style={styles.settingbutton}
            ></TouchableOpacity>
            </View>
            <View style={styles.hintcontainer}>
            <Image
            style={styles.hint}
            source={require('../assets/hint.png')}
            ></Image>
             <TouchableOpacity
            style={styles.hintbutton}
            ></TouchableOpacity>
            </View>
            <View style={styles.mutecontainer}>
             <Image
             style={styles.mute}
             source={require('../assets/mute.png')}
            ></Image>
             <TouchableOpacity
            style={styles.mutebutton}
            ></TouchableOpacity>
            </View>
          </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    marginTop:30
  },
  background:{
    height:'100%',
    width:'100%',
    position:'absolute'
  },
  decoration:{
    height:'20%',
    width:"100%",
  },
  board:{
    height:'7%',
    width:'100%',
    resizeMode:'contain',
    position:"absolute",
  },
  text:{
    width:'50%',
    aspectRatio:1,
    marginTop:5,
    position:"absolute",
    alignItems:'center',
  },
  movecontainer: {
    width: 130,
    position: 'absolute',
    top: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  move: {
    position: 'absolute',
    resizeMode: "contain",
  },
 setbutton:{
    width:"100%",
    height:"10%",
    position:"absolute",
    flexDirection:'row',
   justifyContent:'space-between',
 },
deletebutton:{
height:"100%",
width:'10%',
marginLeft:20,
marginTop:30
},
deleteimage:{
  height:'50%',
  width:'100%',
  resizeMode:'contain',
  position:"absolute",

},
back:{
  height:'50%',
  width:'100%',
  borderRadius:50,
  zIndex:1,

},
restartbutton:{
  height:"50%",
  width:'75%',
  marginTop:30,
  alignItems:"flex-end",
  marginRight:20

},
restartimage:{
  height:'100%',
  width:'15%',
  resizeMode:'contain',
  zIndex:1,
  position:'absolute',
  alignItems:"flex-end",
},
restart:{
  height:'100%',
  width:'12%',
  borderRadius:50,
  zIndex:1,
  marginRight:3
},
gamecontainer: {
  width: "88%",
  aspectRatio: 1,
  alignItems: "center",
  justifyContent: 'center',
  marginTop: 50,
  position: 'relative'
},
  game:{
    width:"95%",
    flexWrap:"wrap",
    flexDirection:'row',
  },
  gamebg: {
    height: "100%",
    width: "100%",
    resizeMode: 'stretch',
    position: 'absolute',
  },
  code: {
    width: "25%",
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  boxbg: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  textField: { 
    fontSize: 50, 
    fontWeight: "bold",
    width: 75,
    height: 75,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  empty: {
    width: "25%",
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden'
  },
bottom:{
  height:"20%",
  width:"100%",
  marginTop:50,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between'
},
hintcontainer:{
  height:'60%',
  width:"50%",
  alignItems:'center',
  marginTop:50
  
  },
  hint:{
    height:"100%",
    width:'100%',
    resizeMode:"contain",
  },
  hintbutton:{
  height:"73%",
  width:"90%",
  position:"absolute",
  borderRadius:50,
  marginTop:3,
  },
  settingcontainer:{
    // height:"100%",
    aspectRatio:1,
    width:'20%',
    alignItems:"center"
  },
  settingbutton:{
    // height:"42%",
    aspectRatio:1,
    width:'78%',
    borderRadius:50,
    position:"absolute",
    marginTop:30,
  
  },
  setting:{
    // height:"40%",
    aspectRatio:1,
    width:'80%',
    resizeMode:"contain",
    marginTop:30
  
  },
  mutecontainer: {
    aspectRatio: 1,
    width: '20%',
    alignItems: "center"
  },
  mute: {
    width: '80%',
    height: "80%",
    resizeMode: "contain",
    marginTop: 30
  },
  mutebutton: {
    aspectRatio: 1,
    width: '78%',
    borderRadius: 50,
    position: "absolute",
    marginTop: 30,
  },

});
