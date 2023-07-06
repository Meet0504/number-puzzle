import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity  } from 'react-native';
import useClock from 'react-native-timer-hooks';

export default function App({ navigation }) {
  const [number, setnumber] = useState([])
  const [moves,setmoves]=useState(0)
  const [counter, start, pause, reset, isRunning] = useClock({
    from: 0,
    to: Infinity,
    stopOnFinish: true,
  });

  const setHandler = () => {
    let copydata = []
    for (let i = 0; i < 48; i++) {
      let value = Math.round(Math.random() * 47 + 1)
      while (copydata.includes(value)) {
        value = Math.round(Math.random() * 47 + 1)
      }
      copydata.push(value)
    }
    copydata.push('')
    setnumber(copydata)
    if(counter>=1){
      reset()       
      setmoves(0)
    }
  }

  useEffect(() => {
 
    setHandler()
    start()
  }, [])
  const checkwin = (copydata) => {
    if (copydata[0] === 1 && copydata[1] === 2 && copydata[2] === 3 && copydata[3] === 4 && copydata[4] === 5 && copydata[5] === 6 && copydata[6] === 7 && copydata[7] === 8 && copydata[8] === 9 && copydata[9] === 10 && copydata[10] === 11
      && copydata[11] === 12 && copydata[12] === 13 && copydata[13] === 14 && copydata[14] === 15 && copydata[15] === 16 && copydata[16] === 17 && copydata[17] === 18 && copydata[18] === 19 && copydata[19] === 20 && copydata[20] === 21
      && copydata[21] === 22 && copydata[22] === 23 && copydata[23] === 24 && copydata[24] === 25 && copydata[25] === 26 && copydata[26] === 27 && copydata[27] === 28 && copydata[28] === 29 && copydata[29] === 30 && copydata[30] === 31
      && copydata[31] === 32 && copydata[32] === 33 && copydata[33] === 34 && copydata[34] === 35 && copydata[35] === 36 && copydata[36] === 37 && copydata[37] === 38 && copydata[38] === 39 && copydata[39] === 40 && copydata[40] === 41
      && copydata[41] === 42 && copydata[42] === 43 && copydata[43] === 44 && copydata[44] === 45 && copydata[45] === 46 && copydata[46] === 47 && copydata[47] === 48 && copydata[48] === '') {
        AsyncStorage.setItem('moves7',moves.toString())
        AsyncStorage.setItem('time7',counter.toString())
        AsyncStorage.setItem('lastpuzzle','puzzle7')
        setHandler()
        return navigation.navigate('Champion')
    }
  }
  const numberHandler = () => {
    let copydata = [...number]
    if (copydata[7] === '') {
      const swapvalue = copydata[7]
      copydata[7] = copydata[0]
      copydata[0] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[1] === '') {
      const swapvalue = copydata[1]
      copydata[1] = copydata[0]
      copydata[0] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler1 = () => {
    let copydata = [...number]
    if (copydata[8] === '') {
      const swapvalue = copydata[8]
      copydata[8] = copydata[1]
      copydata[1] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[2] === '') {
      const swapvalue = copydata[2]
      copydata[2] = copydata[1]
      copydata[1] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[0] === '') {
      const swapvalue = copydata[0]
      copydata[0] = copydata[1]
      copydata[1] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler2 = () => {
    let copydata = [...number]
    if (copydata[9] === '') {
      const swapvalue = copydata[9]
      copydata[9] = copydata[2]
      copydata[2] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[3] === '') {
      const swapvalue = copydata[3]
      copydata[3] = copydata[2]
      copydata[2] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[1] === '') {
      const swapvalue = copydata[1]
      copydata[1] = copydata[2]
      copydata[2] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler3 = () => {
    let copydata = [...number]
    if (copydata[10] === '') {
      const swapvalue = copydata[10]
      copydata[10] = copydata[3]
      copydata[3] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[4] === '') {
      const swapvalue = copydata[4]
      copydata[4] = copydata[3]
      copydata[3] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[2] === '') {
      const swapvalue = copydata[2]
      copydata[2] = copydata[3]
      copydata[3] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler4 = () => {
    let copydata = [...number]
    if (copydata[11] === '') {
      const swapvalue = copydata[11]
      copydata[11] = copydata[4]
      copydata[4] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[5] === '') {
      const swapvalue = copydata[5]
      copydata[5] = copydata[4]
      copydata[4] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[3] === '') {
      const swapvalue = copydata[3]
      copydata[3] = copydata[4]
      copydata[4] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler5 = () => {
    let copydata = [...number]
    if (copydata[12] === '') {
      const swapvalue = copydata[12]
      copydata[12] = copydata[5]
      copydata[5] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[6] === '') {
      const swapvalue = copydata[6]
      copydata[6] = copydata[5]
      copydata[5] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[4] === '') {
      const swapvalue = copydata[4]
      copydata[4] = copydata[5]
      copydata[5] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }


    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler6 = () => {
    let copydata = [...number]
    if (copydata[13] === '') {
      const swapvalue = copydata[13]
      copydata[13] = copydata[6]
      copydata[6] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[5] === '') {
      const swapvalue = copydata[5]
      copydata[5] = copydata[6]
      copydata[6] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }


    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler7 = () => {
    let copydata = [...number]
    if (copydata[14] === '') {
      const swapvalue = copydata[14]
      copydata[14] = copydata[7]
      copydata[7] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[0] === '') {
      const swapvalue = copydata[0]
      copydata[0] = copydata[7]
      copydata[7] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[8] === '') {
      const swapvalue = copydata[8]
      copydata[8] = copydata[7]
      copydata[7] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }


    else {
      setnumber(copydata)
    }
    checkwin(copydata)


  }
  const numberHandler8 = () => {
    let copydata = [...number]
    if (copydata[15] === '') {
      const swapvalue = copydata[15]
      copydata[15] = copydata[8]
      copydata[8] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[7] === '') {
      const swapvalue = copydata[7]
      copydata[7] = copydata[8]
      copydata[8] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[9] === '') {
      const swapvalue = copydata[9]
      copydata[9] = copydata[8]
      copydata[8] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[1] === '') {
      const swapvalue = copydata[1]
      copydata[1] = copydata[8]
      copydata[8] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }


    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler9 = () => {
    let copydata = [...number]
    if (copydata[16] === '') {
      const swapvalue = copydata[16]
      copydata[16] = copydata[9]
      copydata[9] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[8] === '') {
      const swapvalue = copydata[8]
      copydata[8] = copydata[9]
      copydata[9] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[2] === '') {
      const swapvalue = copydata[2]
      copydata[2] = copydata[9]
      copydata[9] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[10] === '') {
      const swapvalue = copydata[10]
      copydata[10] = copydata[9]
      copydata[9] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }
  const numberHandler10 = () => {
    let copydata = [...number]
    if (copydata[17] === '') {
      const swapvalue = copydata[17]
      copydata[17] = copydata[10]
      copydata[10] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[9] === '') {
      const swapvalue = copydata[9]
      copydata[9] = copydata[10]
      copydata[10] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[11] === '') {
      const swapvalue = copydata[11]
      copydata[11] = copydata[10]
      copydata[10] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[3] === '') {
      const swapvalue = copydata[3]
      copydata[3] = copydata[10]
      copydata[10] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }


    else {
      setnumber(copydata)
    }
    checkwin(copydata)


  }

  const numberHandler11 = () => {
    let copydata = [...number]
    if (copydata[18] === '') {
      const swapvalue = copydata[18]
      copydata[18] = copydata[11]
      copydata[11] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[10] === '') {
      const swapvalue = copydata[10]
      copydata[10] = copydata[11]
      copydata[11] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[12] === '') {
      const swapvalue = copydata[12]
      copydata[12] = copydata[11]
      copydata[11] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[4] === '') {
      const swapvalue = copydata[4]
      copydata[4] = copydata[11]
      copydata[11] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }

  const numberHandler12 = () => {
    let copydata = [...number]
    if (copydata[19] === '') {
      const swapvalue = copydata[19]
      copydata[19] = copydata[12]
      copydata[12] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[11] === '') {
      const swapvalue = copydata[11]
      copydata[11] = copydata[12]
      copydata[12] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[13] === '') {
      const swapvalue = copydata[13]
      copydata[13] = copydata[12]
      copydata[12] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[5] === '') {
      const swapvalue = copydata[5]
      copydata[5] = copydata[12]
      copydata[12] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }

  const numberHandler13 = () => {
    let copydata = [...number]
    if (copydata[20] === '') {
      const swapvalue = copydata[20]
      copydata[20] = copydata[13]
      copydata[13] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[12] === '') {
      const swapvalue = copydata[12]
      copydata[12] = copydata[13]
      copydata[13] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[6] === '') {
      const swapvalue = copydata[6]
      copydata[6] = copydata[13]
      copydata[13] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)

  }

  const numberHandler14 = () => {
    let copydata = [...number]
    if (copydata[21] === '') {
      const swapvalue = copydata[21]
      copydata[21] = copydata[14]
      copydata[14] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[15] === '') {
      const swapvalue = copydata[15]
      copydata[15] = copydata[14]
      copydata[14] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[7] === '') {
      const swapvalue = copydata[7]
      copydata[7] = copydata[14]
      copydata[14] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }

  const numberHandler15 = () => {
    let copydata = [...number]
    if (copydata[22] === '') {
      const swapvalue = copydata[22]
      copydata[22] = copydata[15]
      copydata[15] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[16] === '') {
      const swapvalue = copydata[16]
      copydata[16] = copydata[15]
      copydata[15] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[8] === '') {
      const swapvalue = copydata[8]
      copydata[8] = copydata[15]
      copydata[15] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[14] === '') {
      const swapvalue = copydata[14]
      copydata[14] = copydata[15]
      copydata[15] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }

    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler16 = () => {
    let copydata = [...number]
    if (copydata[23] === '') {
      const swapvalue = copydata[23]
      copydata[23] = copydata[16]
      copydata[16] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[17] === '') {
      const swapvalue = copydata[17]
      copydata[17] = copydata[16]
      copydata[16] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[9] === '') {
      const swapvalue = copydata[9]
      copydata[9] = copydata[16]
      copydata[16] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[15] === '') {
      const swapvalue = copydata[15]
      copydata[15] = copydata[16]
      copydata[16] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler17 = () => {
    let copydata = [...number]
    if (copydata[24] === '') {
      const swapvalue = copydata[24]
      copydata[24] = copydata[17]
      copydata[17] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[18] === '') {
      const swapvalue = copydata[18]
      copydata[18] = copydata[17]
      copydata[17] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[10] === '') {
      const swapvalue = copydata[10]
      copydata[10] = copydata[17]
      copydata[17] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[16] === '') {
      const swapvalue = copydata[16]
      copydata[16] = copydata[17]
      copydata[17] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler18 = () => {
    let copydata = [...number]
    if (copydata[25] === '') {
      const swapvalue = copydata[25]
      copydata[25] = copydata[18]
      copydata[18] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[19] === '') {
      const swapvalue = copydata[19]
      copydata[19] = copydata[18]
      copydata[18] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[11] === '') {
      const swapvalue = copydata[11]
      copydata[11] = copydata[18]
      copydata[18] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[17] === '') {
      const swapvalue = copydata[17]
      copydata[17] = copydata[18]
      copydata[18] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler19 = () => {
    let copydata = [...number]
    if (copydata[26] === '') {
      const swapvalue = copydata[26]
      copydata[26] = copydata[19]
      copydata[19] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[20] === '') {
      const swapvalue = copydata[20]
      copydata[20] = copydata[19]
      copydata[19] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[12] === '') {
      const swapvalue = copydata[12]
      copydata[12] = copydata[19]
      copydata[19] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[18] === '') {
      const swapvalue = copydata[18]
      copydata[18] = copydata[19]
      copydata[19] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler20 = () => {
    let copydata = [...number]
    if (copydata[27] === '') {
      const swapvalue = copydata[27]
      copydata[27] = copydata[20]
      copydata[20] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[13] === '') {
      const swapvalue = copydata[13]
      copydata[13] = copydata[20]
      copydata[20] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[19] === '') {
      const swapvalue = copydata[19]
      copydata[19] = copydata[20]
      copydata[20] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler21 = () => {
    let copydata = [...number]
    if (copydata[28] === '') {
      const swapvalue = copydata[28]
      copydata[28] = copydata[21]
      copydata[21] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[22] === '') {
      const swapvalue = copydata[22]
      copydata[22] = copydata[21]
      copydata[21] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[14] === '') {
      const swapvalue = copydata[14]
      copydata[14] = copydata[21]
      copydata[21] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler22 = () => {
    let copydata = [...number]
    if (copydata[29] === '') {
      const swapvalue = copydata[29]
      copydata[29] = copydata[22]
      copydata[22] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[21] === '') {
      const swapvalue = copydata[21]
      copydata[21] = copydata[22]
      copydata[22] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[15] === '') {
      const swapvalue = copydata[15]
      copydata[15] = copydata[22]
      copydata[22] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[23] === '') {
      const swapvalue = copydata[23]
      copydata[23] = copydata[22]
      copydata[22] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler23 = () => {
    let copydata = [...number]
    if (copydata[30] === '') {
      const swapvalue = copydata[30]
      copydata[30] = copydata[23]
      copydata[23] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[22] === '') {
      const swapvalue = copydata[22]
      copydata[22] = copydata[23]
      copydata[23] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[24] === '') {
      const swapvalue = copydata[24]
      copydata[24] = copydata[23]
      copydata[23] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[16] === '') {
      const swapvalue = copydata[16]
      copydata[16] = copydata[23]
      copydata[23] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler24 = () => {
    let copydata = [...number]
    if (copydata[31] === '') {
      const swapvalue = copydata[31]
      copydata[31] = copydata[24]
      copydata[24] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[23] === '') {
      const swapvalue = copydata[23]
      copydata[23] = copydata[24]
      copydata[24] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[25] === '') {
      const swapvalue = copydata[25]
      copydata[25] = copydata[24]
      copydata[24] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[17] === '') {
      const swapvalue = copydata[17]
      copydata[17] = copydata[24]
      copydata[24] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler25 = () => {
    let copydata = [...number]
    if (copydata[32] === '') {
      const swapvalue = copydata[32]
      copydata[32] = copydata[25]
      copydata[25] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[24] === '') {
      const swapvalue = copydata[24]
      copydata[24] = copydata[25]
      copydata[25] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[26] === '') {
      const swapvalue = copydata[26]
      copydata[26] = copydata[25]
      copydata[25] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[18] === '') {
      const swapvalue = copydata[18]
      copydata[18] = copydata[25]
      copydata[25] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler26 = () => {
    let copydata = [...number]
    if (copydata[33] === '') {
      const swapvalue = copydata[33]
      copydata[33] = copydata[26]
      copydata[26] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[25] === '') {
      const swapvalue = copydata[25]
      copydata[25] = copydata[26]
      copydata[26] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[27] === '') {
      const swapvalue = copydata[27]
      copydata[27] = copydata[26]
      copydata[26] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[19] === '') {
      const swapvalue = copydata[19]
      copydata[19] = copydata[26]
      copydata[26] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler27 = () => {
    let copydata = [...number]
    if (copydata[34] === '') {
      const swapvalue = copydata[34]
      copydata[34] = copydata[27]
      copydata[27] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[26] === '') {
      const swapvalue = copydata[26]
      copydata[26] = copydata[27]
      copydata[27] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[20] === '') {
      const swapvalue = copydata[20]
      copydata[20] = copydata[27]
      copydata[27] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler28 = () => {
    let copydata = [...number]
    if (copydata[35] === '') {
      const swapvalue = copydata[35]
      copydata[35] = copydata[28]
      copydata[28] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[29] === '') {
      const swapvalue = copydata[29]
      copydata[29] = copydata[28]
      copydata[28] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[21] === '') {
      const swapvalue = copydata[21]
      copydata[21] = copydata[28]
      copydata[28] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
        setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler29 = () => {
    let copydata = [...number]
    if (copydata[36] === '') {
      const swapvalue = copydata[36]
      copydata[36] = copydata[29]
      copydata[29] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[30] === '') {
      const swapvalue = copydata[30]
      copydata[30] = copydata[29]
      copydata[29] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[28] === '') {
      const swapvalue = copydata[28]
      copydata[28] = copydata[29]
      copydata[29] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[22] === '') {
      const swapvalue = copydata[22]
      copydata[22] = copydata[29]
      copydata[29] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler30 = () => {
    let copydata = [...number]
    if (copydata[37] === '') {
      const swapvalue = copydata[37]
      copydata[37] = copydata[30]
      copydata[30] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[31] === '') {
      const swapvalue = copydata[31]
      copydata[31] = copydata[30]
      copydata[30] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[29] === '') {
      const swapvalue = copydata[29]
      copydata[29] = copydata[30]
      copydata[30] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[23] === '') {
      const swapvalue = copydata[23]
      copydata[23] = copydata[30]
      copydata[30] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler31 = () => {
    let copydata = [...number]
    if (copydata[38] === '') {
      const swapvalue = copydata[38]
      copydata[38] = copydata[31]
      copydata[31] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[32] === '') {
      const swapvalue = copydata[32]
      copydata[32] = copydata[31]
      copydata[31] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[30] === '') {
      const swapvalue = copydata[30]
      copydata[30] = copydata[31]
      copydata[31] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[24] === '') {
      const swapvalue = copydata[24]
      copydata[24] = copydata[31]
      copydata[31] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler32 = () => {
    let copydata = [...number]
    if (copydata[39] === '') {
      const swapvalue = copydata[39]
      copydata[39] = copydata[32]
      copydata[32] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[33] === '') {
      const swapvalue = copydata[33]
      copydata[33] = copydata[32]
      copydata[32] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[31] === '') {
      const swapvalue = copydata[31]
      copydata[31] = copydata[32]
      copydata[32] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[25] === '') {
      const swapvalue = copydata[25]
      copydata[25] = copydata[32]
      copydata[32] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler33 = () => {
    let copydata = [...number]
    if (copydata[40] === '') {
      const swapvalue = copydata[40]
      copydata[40] = copydata[33]
      copydata[33] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[34] === '') {
      const swapvalue = copydata[34]
      copydata[34] = copydata[33]
      copydata[33] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[32] === '') {
      const swapvalue = copydata[32]
      copydata[32] = copydata[33]
      copydata[33] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[26] === '') {
      const swapvalue = copydata[26]
      copydata[26] = copydata[33]
      copydata[33] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler34 = () => {
    let copydata = [...number]
    if (copydata[41] === '') {
      const swapvalue = copydata[41]
      copydata[41] = copydata[34]
      copydata[34] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[33] === '') {
      const swapvalue = copydata[33]
      copydata[33] = copydata[34]
      copydata[34] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[27] === '') {
      const swapvalue = copydata[27]
      copydata[27] = copydata[34]
      copydata[34] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler35 = () => {
    let copydata = [...number]
    if (copydata[42] === '') {
      const swapvalue = copydata[42]
      copydata[42] = copydata[35]
      copydata[35] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[36] === '') {
      const swapvalue = copydata[36]
      copydata[36] = copydata[35]
      copydata[35] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[28] === '') {
      const swapvalue = copydata[28]
      copydata[28] = copydata[35]
      copydata[35] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler36 = () => {
    let copydata = [...number]
    if (copydata[43] === '') {
      const swapvalue = copydata[43]
      copydata[43] = copydata[36]
      copydata[36] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[35] === '') {
      const swapvalue = copydata[35]
      copydata[35] = copydata[36]
      copydata[36] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[37] === '') {
      const swapvalue = copydata[37]
      copydata[37] = copydata[36]
      copydata[36] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[29] === '') {
      const swapvalue = copydata[29]
      copydata[29] = copydata[36]
      copydata[36] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler37 = () => {
    let copydata = [...number]
    if (copydata[44] === '') {
      const swapvalue = copydata[44]
      copydata[44] = copydata[37]
      copydata[37] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[36] === '') {
      const swapvalue = copydata[36]
      copydata[36] = copydata[37]
      copydata[37] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[38] === '') {
      const swapvalue = copydata[38]
      copydata[38] = copydata[37]
      copydata[37] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[30] === '') {
      const swapvalue = copydata[30]
      copydata[30] = copydata[37]
      copydata[37] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler38 = () => {
    let copydata = [...number]
    if (copydata[45] === '') {
      const swapvalue = copydata[45]
      copydata[45] = copydata[38]
      copydata[38] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[37] === '') {
      const swapvalue = copydata[37]
      copydata[37] = copydata[38]
      copydata[38] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[39] === '') {
      const swapvalue = copydata[39]
      copydata[39] = copydata[38]
      copydata[38] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[31] === '') {
      const swapvalue = copydata[31]
      copydata[31] = copydata[38]
      copydata[38] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler39 = () => {
    let copydata = [...number]
    if (copydata[46] === '') {
      const swapvalue = copydata[46]
      copydata[46] = copydata[39]
      copydata[39] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[38] === '') {
      const swapvalue = copydata[38]
      copydata[38] = copydata[39]
      copydata[39] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[40] === '') {
      const swapvalue = copydata[40]
      copydata[40] = copydata[39]
      copydata[39] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[32] === '') {
      const swapvalue = copydata[32]
      copydata[32] = copydata[39]
      copydata[39] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler40 = () => {
    let copydata = [...number]
    if (copydata[47] === '') {
      const swapvalue = copydata[47]
      copydata[47] = copydata[40]
      copydata[40] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[39] === '') {
      const swapvalue = copydata[39]
      copydata[39] = copydata[40]
      copydata[40] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[41] === '') {
      const swapvalue = copydata[41]
      copydata[41] = copydata[40]
      copydata[40] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[33] === '') {
      const swapvalue = copydata[33]
      copydata[33] = copydata[40]
      copydata[40] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler41 = () => {
    let copydata = [...number]
    if (copydata[48] === '') {
      const swapvalue = copydata[48]
      copydata[48] = copydata[41]
      copydata[41] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[40] === '') {
      const swapvalue = copydata[40]
      copydata[40] = copydata[41]
      copydata[41] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[34] === '') {
      const swapvalue = copydata[34]
      copydata[34] = copydata[41]
      copydata[41] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler42 = () => {
    let copydata = [...number]
    if (copydata[43] === '') {
      const swapvalue = copydata[43]
      copydata[43] = copydata[42]
      copydata[42] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[35] === '') {
      const swapvalue = copydata[35]
      copydata[35] = copydata[42]
      copydata[42] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler43 = () => {
    let copydata = [...number]
    if (copydata[44] === '') {
      const swapvalue = copydata[44]
      copydata[44] = copydata[43]
      copydata[43] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[36] === '') {
      const swapvalue = copydata[36]
      copydata[36] = copydata[43]
      copydata[43] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[42] === '') {
      const swapvalue = copydata[42]
      copydata[42] = copydata[43]
      copydata[43] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler44 = () => {
    let copydata = [...number]
    if (copydata[45] === '') {
      const swapvalue = copydata[45]
      copydata[45] = copydata[44]
      copydata[44] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[43] === '') {
      const swapvalue = copydata[43]
      copydata[43] = copydata[44]
      copydata[44] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[37] === '') {
      const swapvalue = copydata[37]
      copydata[37] = copydata[44]
      copydata[44] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler45 = () => {
    let copydata = [...number]
    if (copydata[46] === '') {
      const swapvalue = copydata[46]
      copydata[46] = copydata[45]
      copydata[45] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[44] === '') {
      const swapvalue = copydata[44]
      copydata[44] = copydata[45]
      copydata[45] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[38] === '') {
      const swapvalue = copydata[38]
      copydata[38] = copydata[45]
      copydata[45] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler46 = () => {
    let copydata = [...number]
    if (copydata[47] === '') {
      const swapvalue = copydata[47]
      copydata[47] = copydata[46]
      copydata[46] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[45] === '') {
      const swapvalue = copydata[45]
      copydata[45] = copydata[46]
      copydata[46] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[39] === '') {
      const swapvalue = copydata[39]
      copydata[39] = copydata[46]
      copydata[46] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler47 = () => {
    let copydata = [...number]
    if (copydata[48] === '') {
      const swapvalue = copydata[48]
      copydata[48] = copydata[47]
      copydata[47] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[46] === '') {
      const swapvalue = copydata[46]
      copydata[46] = copydata[47]
      copydata[47] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[40] === '') {
      const swapvalue = copydata[40]
      copydata[40] = copydata[47]
      copydata[47] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const numberHandler48 = () => {
    let copydata = [...number]
    if (copydata[41] === '') {
      const swapvalue = copydata[41]
      copydata[41] = copydata[48]
      copydata[48] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    if (copydata[47] === '') {
      const swapvalue = copydata[47]
      copydata[47] = copydata[48]
      copydata[48] = swapvalue
      setnumber(copydata)
      setmoves(moves+1)
    }
    else {
      setnumber(copydata)
    }
    checkwin(copydata)
  }
  const setbg=(num)=>{
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
            onPress={() => navigation.navigate('NumberRiddle')}
            style={styles.back}
          ></TouchableOpacity>
        </View>
        <View style={styles.restartbutton}>
          <Image
            style={styles.restartimage}
            source={require('../assets/restart.png')}
          ></Image>
          <TouchableOpacity
            onPress={() => setHandler()}
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
          onPress={() => numberHandler()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[0]}</Text>{setbg(number[0])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler1()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[1]}</Text>{setbg(number[1])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler2()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[2]}</Text>{setbg(number[2])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler3()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[3]}</Text>{setbg(number[3])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler4()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[4]}</Text>{setbg(number[4])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler5()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[5]}</Text>{setbg(number[5])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler6()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[6]}</Text>{setbg(number[6])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler7()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[7]}</Text>{setbg(number[7])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler8()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[8]}</Text>{setbg(number[8])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler9()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[9]}</Text>{setbg(number[9])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler10()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[10]}</Text>{setbg(number[10])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler11()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[11]}</Text>{setbg(number[11])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler12()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[12]}</Text>{setbg(number[12])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler13()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[13]}</Text>{setbg(number[13])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler14()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[14]}</Text>{setbg(number[14])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler15()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[15]}</Text>{setbg(number[15])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler16()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[16]}</Text>{setbg(number[16])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler17()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[17]}</Text>{setbg(number[17])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler18()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[18]}</Text>{setbg(number[18])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler19()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[19]}</Text>{setbg(number[19])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler20()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[20]}</Text>{setbg(number[20])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler21()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[21]}</Text>{setbg(number[21])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler22()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[22]}</Text>{setbg(number[22])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler23()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[23]}</Text>{setbg(number[23])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler24()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[24]}</Text>{setbg(number[24])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler25()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[25]}</Text>{setbg(number[25])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler26()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[26]}</Text>{setbg(number[26])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler27()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[27]}</Text>{setbg(number[27])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler28()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[28]}</Text>{setbg(number[28])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler29()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[29]}</Text>{setbg(number[29])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler30()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[30]}</Text>{setbg(number[30])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler31()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[31]}</Text>{setbg(number[31])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler32()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[32]}</Text>{setbg(number[32])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler33()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[33]}</Text>{setbg(number[33])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler34()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[34]}</Text>{setbg(number[34])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler35()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[35]}</Text>{setbg(number[35])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler36()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[36]}</Text>{setbg(number[36])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler37()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[37]}</Text>{setbg(number[37])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler38()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[38]}</Text>{setbg(number[38])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler39()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[39]}</Text>{setbg(number[39])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler40()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[40]}</Text>{setbg(number[40])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler41()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[41]}</Text>{setbg(number[41])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler42()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[42]}</Text>{setbg(number[42])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler43()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[43]}</Text>{setbg(number[43])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler44()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[44]}</Text>{setbg(number[44])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler45()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[45]}</Text>{setbg(number[45])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler46()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[46]}</Text>{setbg(number[46])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler47()}
          activeOpacity={1}
          style={styles.code}
        ><Text style={styles.textField}>{number[47]}</Text>{setbg(number[47])}</TouchableOpacity>
        <TouchableOpacity
          onPress={() => numberHandler48()}
          activeOpacity={1}
          style={styles.empty}
        ><Text style={styles.textField}>{number[48]}</Text>{setbg(number[48])}</TouchableOpacity>
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
    alignItems: "center",
    marginTop:30
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  decoration: {
    height: '20%',
    width: "100%",
  },
  board: {
    height: '7%',
    width: '100%',
    resizeMode: 'contain',
    position: "absolute",
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
  setbutton: {
    width: "100%",
    height: "10%",
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deletebutton: {
    height: "100%",
    width: '10%',
    marginLeft: 20,
    marginTop: 30
  },
  deleteimage: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
    position: "absolute",

  },
  back: {
    height: '50%',
    width: '100%',
    borderRadius: 50,
    zIndex: 1,

  },
  restartbutton: {
    height: "50%",
    width: '75%',
    marginTop: 30,
    alignItems: "flex-end",
    marginRight: 20

  },
  restartimage: {
    height: '100%',
    width: '15%',
    resizeMode: 'contain',
    zIndex: 1,
    position: 'absolute',
    alignItems: "flex-end",
  },
  restart: {
    height: '100%',
    width: '12%',
    borderRadius: 50,
    zIndex: 1,
    marginRight: 3
  },
  gamecontainer: {
    width: "88%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 50,
    position: 'relative'
  },
  game: {
    width: "95%",
    flexWrap: "wrap",
    flexDirection: 'row',
  },
  gamebg: {
    height: "100%",
    width: "100%",
    resizeMode: 'stretch',
    position: 'absolute',
  },
  code: {
    width: "14.28%",
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden'
  },
  boxbg: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  textField: { 
    fontSize: 30, 
    fontWeight: "bold",
    width: 43,
    height: 43,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  empty: {
    width: "14.28%",
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden'
  },
  bottom: {
    height: "20%",
    width: "100%",
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
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