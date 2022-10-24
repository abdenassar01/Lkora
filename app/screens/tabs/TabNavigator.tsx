import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main/mainStack/MainScreen';
import MainStack from './main/MainStack';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import PlayerOfTheWeekStack from './playeroftheweek/PlayerOfTheWeekStack';
import Matches from './matches/Matches';

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
          borderRadius: 50,
          backgroundColor: "#ffffff",
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
      <Tab.Screen name='Matches' component={ Matches } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Matches" icon="football" />
        }}
      /> 
      <Tab.Screen name='PlayerOfTheWeek' component={ PlayerOfTheWeekStack } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Top Players" icon="person-circle-outline" />
        }}
      /> 
    </Tab.Navigator>
  )
}