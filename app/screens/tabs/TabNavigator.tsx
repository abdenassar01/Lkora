import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './main/MainStack';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import PlayerOfTheWeekStack from './playeroftheweek/PlayerOfTheWeekStack';
import Standing from './standings/Standing';
import BotolaStack from './botola/BotolaStack';
import { COLOR } from '../../assets/color';

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
          backgroundColor: COLOR.text,
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
      <Tab.Screen name='Botola' component={ BotolaStack } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Botola" icon="football" />
        }}
      />
      <Tab.Screen name='Matches' component={ Standing } 
        options={{
          tabBarIcon: ({ focused }) => <NavigationIcon focused={ focused } label="Standing" icon="ios-layers" />
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