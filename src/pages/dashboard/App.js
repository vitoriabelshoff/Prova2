import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Filme from './src/components/Teste';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';


export default function App() {


  const filmes = [
    {
      Item: 'Espada',
      Descrição: 'Principal arma para combate corpo a corpo. A espada é formada basicamente por uma lâmina de metal, com gumes em ambos ou num dos dois lados, e uma ponta.',
      imgUrl: "https://p.turbosquid.com/ts-thumb/ME/w4WKOk/7x/ts_urp_custom..._26.02.2022_150937/jpg/1645859659/600x600/fit_q87/43adbcef4b3416ace9399462a747d480f0881c16/ts_urp_custom..._26.02.2022_150937.jpg"
    },
    {
      Item: 'Escudo',
      Descrição: 'O escudo ornamental é um pequeno escudo forjado com algum material preciosos, como ouro ou prata, decorado com símbolos sagrados, brasões de famílias ou reinos. ',
      imgUrl: "https://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png"
    },
    {
      Item: 'Machado',
      Descrição: 'O machado possui técnicas diferenciadas da luta com espadas. Primeiro era necessária uma boa força, pois o uso do machado requer uma energia considerável.',
      imgUrl: "https://3.bp.blogspot.com/-xx6yU5yiI94/WYzw5rpCl6I/AAAAAAAABjU/s21ipdE5v-sKvf3vnASoU0tPPBWt1ifBACLcBGAs/s1600/sanderhall_by_delta1976-d5wotfx.jpg"
    },
  ]




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={FilmesScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function FilmesScreen() {
  return (
    <View style={styles.container}>
      <Filme filme={filmes[0]} />
      <Filme filme={filmes[1]} />
      <Filme filme={filmes[2]} />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
