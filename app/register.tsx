import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {

    // password-state
    const [password, setPassword] = useState('');
    // password check, has to have a lenght of 5 and at least 1 digit 
    const isPasswordValid = password.length >= 5 && /\d/.test(password);

    // email-state and email-check 
    const [email, setEmail] = useState('');
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // username check for valid input
    const [username, setUsername] = useState('');
    const isUsernameValid = /^[a-zA-Z0-9._]{3,30}$/.test(username);

    return (
        
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            { /* register page container */}
            { /* username-section / email-section */}
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Create an account</Text>

                <TextInput style={styles.input} placeholder="username" placeholderTextColor= "#999"
                    textContentType="username"
                    value={username}
                    onChangeText={setUsername}    
                >
                </TextInput>
                {/* error-message for invalid username */}
                {username.length > 0 && !isUsernameValid && (
                    <Text style={styles.errorText}>
                        Username must be 3–30 characters and can only contain letters, numbers, periods(.), and underscores(_).
                    </Text>
                )}

                <TextInput style={styles.input} placeholder="email" placeholderTextColor= "#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                >
                </TextInput>

                {/* error-text for email-input */}
                {email.length > 0 && !isEmailValid && (
                    <Text style={styles.errorText}>
                        Please enter a valid email address.
                    </Text>
                )}
                <View style={styles.divider}></View>
                {/* password-part */}
                {password.length > 0 && !isPasswordValid && (
                    <Text style={styles.errorText}>
                        Password has to be at least 5 characters long and needs to contain 1 digit.
                    </Text> 
                )}
                <TextInput style={styles.input} placeholder="password" placeholderTextColor= "#999"
                    textContentType="password" secureTextEntry={true} value={password} onChangeText={setPassword}>
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
        </KeyboardAvoidingView>
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
    errorText: {
        fontSize: 12,
        width: '85%',
        color: '#ff6b6b',
    },
});