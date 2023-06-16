import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: '30%',
        height: 150,
        backgroundColor: 'black'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: 'grey',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    Item: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    Descrição: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
   
    btn: {
        padding: 10,
        backgroundColor: 'white'
    }
});


export default styles;
