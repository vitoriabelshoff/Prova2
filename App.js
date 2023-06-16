import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import RecuperarSenha from './src/pages/recuperarsenha';
import Cadastro from './src/pages/cadastro';
import Dashboard from './src/pages/dashboard';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
