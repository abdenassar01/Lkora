import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';
import MainScreen from "./app/screens/tabs/main/MainScreen";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <MainScreen />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
    
  );
};

export default App;
