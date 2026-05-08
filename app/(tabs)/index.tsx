import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
      {/* title */}
        <Text style={styles.title}>Explotador</Text>
      </View>
      {/* login-/register-field */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.button}>
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
    paddingVertical: 80,
  },
  titleContainer: {
    position: 'absolute',
    top: 130,
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
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
    width: '70%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  }
});