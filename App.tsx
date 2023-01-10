import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Alert,
  StatusBar,
} from 'react-native';
import TabNavigator from './app/screens/tabs/TabNavigator';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './app/assets/theme';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const queryClient = new QueryClient()

const App = () => {

  const [ theme, setTheme ] = useState<string>("light")

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const storeTheme = async (value: string) => {
    try {
      await AsyncStorage.setItem('@theme', value)
    } catch (e) {
      Alert.alert("Error presesting theme value");
    }
  }


  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme')
      if(value !== null) {
        return value;
      }
    } catch(e) {
      Alert.alert("Error reading theme value");
    }
  }

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      storeTheme("dark");
      return;
    }
    setTheme("light");
    storeTheme("light");
  }

  if(getTheme() != undefined){
    getTheme().then(theme => theme != undefined && setTheme(theme)).catch(e => Alert.alert("Error"))
  }else{
    storeTheme("light")
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
