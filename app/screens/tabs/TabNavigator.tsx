import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main/mainStack/MainScreen';
import MainStack from './main/MainStack';

export default function TabNavigator() {
    
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='MainStack' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='MainSTack' component={ MainStack } />
      <Tab.Screen name='MainScreen2' component={ MainScreen } />
    </Tab.Navigator>
  )
}