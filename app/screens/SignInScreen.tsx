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
import { Link } from "@react-navigation/native";

const SignInScreen = () => {
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.containerForm}>
        <Text style={styles.textXL}>
          Log<Text style={{ color: colors.primary }}>In</Text>
        </Text>

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
          <Text style={{ color: colors.white }}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.formDivider} />

        <Text>
          Belum Ada Account, Silahkan Daftar{" "}
          <Link action={{ type: "NAVIGATE", payload: { name: "SignUp" } }}>
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

export default SignInScreen;
