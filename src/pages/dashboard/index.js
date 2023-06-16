import { Button, Image, Text, View } from "react-native";


import styles from './styles';


export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.filme.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.Item}>Item: {props.filme.Item}</Text>
                <Text style={styles.Descrição}>Descrição: {props.filme.Descrição}</Text>
                <Button style={styles.btn}color='green' title="Trocar"/>
            </View>
        </View>
    );
}
