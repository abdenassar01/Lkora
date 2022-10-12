import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';
import MainScreen from "./app/screens/tabs/main/MainScreen";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <MainScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
