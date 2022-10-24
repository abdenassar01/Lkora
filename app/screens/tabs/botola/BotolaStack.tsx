import { createStackNavigator } from '@react-navigation/stack';
import Fixtures from './stack/fixtures/Fixtures';
import Standing from './stack/standing/Standing';

export default function BotolaStack() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BotolaFixtures" component={ Fixtures } />
      <Stack.Screen name="BotolaStanding" component={ Standing } />
    </Stack.Navigator>
  )
}