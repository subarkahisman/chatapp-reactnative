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
import colors from "./app/utils/color";
import FormInput from "./app/ui/FormInput";
import KeyboardAvoidingWrapper from "./app/components/KeyboardAvoidingWrapper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingWrapper>
        <View style={styles.containerForm}>
          <Text style={styles.textXL}>Sign In</Text>

          <FormInput
            placeholder="Masukan Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormInput
            placeholder="Masukan Password"
            secureTextEntry
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.button}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgColor,
    padding: 15,
  },
  textXL: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
  },

  button: {
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
  },
});
