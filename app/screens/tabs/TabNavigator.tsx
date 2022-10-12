import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main/MainScreen';

export default function TabNavigator() {
    
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='MainScreen' component={ MainScreen } />
    </Tab.Navigator>
  )
}