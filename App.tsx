import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';

const queryClient = new QueryClient()

const App = () => {

  return (
    <NavigationContainer>
      <QueryClientProvider client={ queryClient }>
        <StatusBar />
        <TabNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
