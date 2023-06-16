import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
  const navigation = useNavigation();


  const handleLoginPress = () => {
    navigation.navigate('Login');
  };


  return (
    <View>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry={true} />
      <Button title="Cadastrar" onPress={() => {}} />
      <Button title="Já possui uma conta? Faça login" onPress={handleLoginPress} />
    </View>
  );
}
