import HomePage from './component/HomePage'
import HomePage1 from './component/HomePage1';
import HomeScreen from './component/HomeScreen';
import NumberRiddle from './component/NumberRiddle';
import Three from './component/Three';
import Four from './component/Four';
import Five from './component/Five';
import Six from './component/Six';
import Seven from './component/Seven';
import Eight from './component/Eight';
import DemoThree from './component/DemoThree';
import DemoFour from './component/DemoFour';
import DemoFive from './component/DemoFive';
import DemoSix from './component/DemoSix';
import DemoSeven from './component/DemoSeven';
import DemoEight from './component/DemoEight';
import Champion from './component/Champion';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {/* <Stack.Screen name='HomePage' component={HomePage}></Stack.Screen> */}
          {/* <Stack.Screen name='HomePage1' component={HomePage1}></Stack.Screen> */}
          <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
          <Stack.Screen name='NumberRiddle' component={NumberRiddle}></Stack.Screen>
          <Stack.Screen name='Three' component={Three}></Stack.Screen>
          <Stack.Screen name='Four' component={Four}></Stack.Screen>
          <Stack.Screen name='Five' component={Five}></Stack.Screen>
          <Stack.Screen name='Six' component={Six}></Stack.Screen>
          <Stack.Screen name='Seven' component={Seven}></Stack.Screen>
          <Stack.Screen name='Eight' component={Eight}></Stack.Screen>
          <Stack.Screen name='DemoThree' component={DemoThree}></Stack.Screen>
          <Stack.Screen name='DemoFour' component={DemoFour}></Stack.Screen>
          <Stack.Screen name='DemoFive' component={DemoFive}></Stack.Screen>
          <Stack.Screen name='DemoSix' component={DemoSix}></Stack.Screen>
          <Stack.Screen name='DemoSeven' component={DemoSeven}></Stack.Screen>
          <Stack.Screen name='DemoEight' component={DemoEight}></Stack.Screen>
          <Stack.Screen name='Champion' component={Champion}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <>
    // {/* <HomePage></HomePage> */}
    // {/* <HomePage1></HomePage1> */}
    // {/* <HomeScreen></HomeScreen> */}
    // {/* <NumberRiddle></NumberRiddle> */}
    // {/* <DemoThree></DemoThree> */}
    // {/* <Three></Three> */}
    // {/* <Four></Four> */}
    // {/* <Five></Five> */}
    // {/* <Six></Six> */}
    // {/* <Seven></Seven> */}
    // {/* <Eight></Eight> */}
    // {/* <Champion></Champion> */}
    // </>
  )
}