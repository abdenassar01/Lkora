import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <Text>Empty App</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
