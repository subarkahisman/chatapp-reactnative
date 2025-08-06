import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import colors from "../utils/color";
import FormInput from "../ui/FormInput";
import { Link } from "@react-navigation/native";

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.containerForm}>
        <Text style={styles.textXL}>
          Create New <Text style={{ color: colors.primary }}>Account</Text>
        </Text>

        <FormInput placeholder="Masukan Username" autoCapitalize="none" />

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
          <Text style={{ color: colors.white }}>Register</Text>
        </TouchableOpacity>

        <View style={styles.formDivider} />

        <Text>
          Sudah Ada Account, Silahkan Login{" "}
          <Link action={{ type: "NAVIGATE", payload: { name: "SignIn" } }}>
            <Text>Disini</Text>
          </Link>
        </Text>
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
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
  },
  formDivider: {
    alignSelf: "center",
    marginVertical: 15,
    padding: 2,
    width: "70%",
    backgroundColor: colors.primary,
  },
});

export default SignUpScreen;
