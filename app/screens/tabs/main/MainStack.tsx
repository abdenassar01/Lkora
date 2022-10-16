import { createStackNavigator } from '@react-navigation/stack';
import EventDetails from './mainStack/eventDetails/EventDetails';
import MainScreen from './mainStack/MainScreen';


export default function MainStack() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainScreen' component={ MainScreen } />
      <Stack.Screen name='EvantDetails' component={ EventDetails } />
    </Stack.Navigator>
  )
}