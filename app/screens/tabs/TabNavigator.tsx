import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main/MainScreen';

export default function TabNavigator() {
    
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='MainScreen' component={ MainScreen } />
      <Tab.Screen name='MainScreen2' component={ MainScreen } />
    </Tab.Navigator>
  )
}