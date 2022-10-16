import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';
import Header from './app/utils/header/Header';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Header />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
