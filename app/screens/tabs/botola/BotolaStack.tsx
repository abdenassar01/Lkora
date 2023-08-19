import { createStackNavigator } from "@react-navigation/stack";
import Fixtures from "./stack/fixtures/Fixtures";
import Team from "./stack/team/Team";

export default function BotolaStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BotolaFixtures" component={Fixtures} />
      <Stack.Screen name="Team" component={Team} />
    </Stack.Navigator>
  );
}
