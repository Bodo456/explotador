import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Create an account</Text>
                <TextInput style={styles.input} placeholder="username" placeholderTextColor= "#999"
                    textContentType="username">
                </TextInput>
                <TextInput style={styles.input} placeholder="email" placeholderTextColor= "#999"
                >
                </TextInput>
                <View style={styles.divider}></View>
                <TextInput style={styles.input} placeholder="password" placeholderTextColor= "#999"
                    textContentType="password" secureTextEntry={true}>
                </TextInput>
                <TextInput style={styles.input} placeholder="repeat password" placeholderTextColor= "#999"
                    textContentType="password" secureTextEntry={true}>
                </TextInput>
                <Pressable style={({ pressed }) => [
                      styles.button,
                      pressed && styles.buttonPressed,
                    ]}
                    >
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    buttonContainer: {
        width: '85%',
        alignItems: 'center',
        gap: 15,
        borderColor: '#555',
        borderWidth: 1,
        backgroundColor: '#3a3a3a',
        padding: 25,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#6a6a6a',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        width: '85%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
    },
    buttonPressed : {
        opacity: 0.7,
    },
    buttonTitle : {
        color: 'white',
        fontSize: 20,
        fontWeight: 600,
    },
    input : {
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '85%',
        borderColor: '#888',
        fontWeight: 600,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    divider: {
    height: 1,
    backgroundColor: '#666',
    width: '80%',
    marginVertical: 10,
    },
});