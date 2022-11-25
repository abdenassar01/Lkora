import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './app/assets/theme';
import { useState } from 'react';

const queryClient = new QueryClient()

const App = () => {

  const [ theme, setTheme ] = useState("light")

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={ queryClient }>
        <ThemeProvider theme={ theme == "light" ? light : dark }>
          <StatusBar />
          <TabNavigator onThemeToggle={ handleThemeToggle } />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
