import React from 'react';
import { View, TextInput, Button } from 'react-native';


export default function RecuperarSenha() {
  const handleRecuperarSenha = () => {
    // Lógica para recuperar a senha
  };


  return (
    <View>
      <TextInput placeholder="Email" />
      <Button title="Recuperar Senha" onPress={handleRecuperarSenha} />
    </View>
  );
}
