import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.textXL}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukan Password"
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textXL: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
  },
});
