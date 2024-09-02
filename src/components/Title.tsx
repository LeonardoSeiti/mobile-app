import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function Title() {
    return (
        <View style={styles.title}>
            <KeyboardAvoidingView>
            <Text style={styles.titleText}>Título</Text>
            <TextInput placeholderTextColor={'#7E7070'} style={styles.titleTextInput} placeholder='Insira o título aqui...'/>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 8
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 4,
        paddingVertical: 12
      },
      titleTextInput: {
        height: 60,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        paddingHorizontal: 8
      }
})