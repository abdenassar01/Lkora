import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';
import { ThemeProvider } from 'styled-components';
import theme from './app/assets/theme';

const queryClient = new QueryClient()

const App = () => {

  return (
    <NavigationContainer>
      <QueryClientProvider client={ queryClient }>
        <ThemeProvider theme={ theme }>
          <StatusBar />
          <TabNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
