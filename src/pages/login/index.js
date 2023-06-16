import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();


  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };


  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry={true} />
      <Button title="Entrar" onPress={() => {}} />
      <Button title="Cadastrar" onPress={handleCadastroPress} />
    </View>
  );
}
