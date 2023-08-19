import { createStackNavigator } from "@react-navigation/stack";
import Team from "../botola/stack/team/Team";
import EventDetails from "./mainStack/eventDetails/EventDetails";
import MainScreen from "./mainStack/MainScreen";

type Props = {
  onThemeToggle: () => void;
};

export default function MainStack({ onThemeToggle }: Props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="MainScreen"
        children={() => <MainScreen onThemeToggle={onThemeToggle} />}
      />
      <Stack.Screen name="EvantDetails" children={() => <EventDetails />} />
      <Stack.Screen name="Team" children={() => <Team />} />
    </Stack.Navigator>
  );
}
