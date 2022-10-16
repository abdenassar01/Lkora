import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main/mainStack/MainScreen';
import MainStack from './main/MainStack';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';

export default function TabNavigator() {
    
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='MainStack' 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
          backgroundColor: "#FFFFFF",
          elevation: 3,
          height: 50
        }
      }} 
    >
      <Tab.Screen name='MainSTack' component={ MainStack } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Home" icon="home" />
        }}
      />
      <Tab.Screen name='Matches' component={ MainScreen } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Matches" icon="football" />
        }}
      />
    </Tab.Navigator>
  )
}