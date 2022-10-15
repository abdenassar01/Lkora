import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './mainStack/MainScreen';


export default function MainStack() {


    const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainScreen' component={ MainScreen } />
    </Stack.Navigator>
  )
}