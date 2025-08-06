import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import FormInput from "../ui/FormInput";
import colors from "../utils/color";

const SignInScreen = () => {
  return (
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

        <TouchableOpacity style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
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

export default SignInScreen;
