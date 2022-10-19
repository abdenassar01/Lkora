import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
