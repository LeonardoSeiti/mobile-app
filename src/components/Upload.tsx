import { Text, View, StyleSheet, Button } from "react-native";
import Image from "./Image";


export default function Upload() {
    return(
        <View style={styles.upload}>
            <Text style={styles.uploadText}>Imagem</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    upload:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 8
    },
    uploadText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 4,
        paddingVertical: 12
    },
})