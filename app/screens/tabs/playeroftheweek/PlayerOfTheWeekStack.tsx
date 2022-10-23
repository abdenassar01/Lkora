import { createStackNavigator } from '@react-navigation/stack'
import PlayerDetails from './stack/playerdetails/PlayerDetails';
import PlayersList from './stack/playerlist/PlayersList';

export default function PlayerOfTheWeekStack() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PlayerList' component={ PlayersList } />                                                
      <Stack.Screen name='playerDetails' component={ PlayerDetails } />                                                
    </Stack.Navigator>
  )
}