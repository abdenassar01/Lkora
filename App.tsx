import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';

const App = () => {

  const queryClient = new QueryClient()

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
