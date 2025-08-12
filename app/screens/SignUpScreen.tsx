import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import colors from "../utils/color";
import FormInput from "../ui/FormInput";
import { Link, NavigationProp, useNavigation } from "@react-navigation/native";
import customFetch from "../config/db";
import { AxiosError } from "axios";
import { showMessage } from "react-native-flash-message";
import { AuthStackParamsList } from "../navigation/AuthNavigation";

const SignUpScreen = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userInfo;

  const handleChange = (name: string) => {
    return (text: string) => {
      setUserInfo({ ...userInfo, [name]: text });
    };
  };

  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>();

  const handlePress = () => {
    try {
      console.log(userInfo);
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error appropriately, e.g., show an alert or message to the user
    }
  };

  const handlePressSignUp = async () => {
    try {
      await customFetch.post("/auth/register", {
        name,
        email,
        password,
      });

      showMessage({ message: "Register berhasil", type: "success" });
      navigation.navigate("SignIn");
    } catch (error) {
      let errorMsg = error as any;
      if (error instanceof AxiosError) {
        errorMsg = errorMsg.response.data;
        if (Array.isArray(errorMsg.errors)) {
          const listError = errorMsg.errors[0];
          showMessage({ message: listError, type: "danger" });
        } else {
          showMessage({ message: errorMsg.error, type: "danger" });
        }
      }
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.containerForm}>
        <Text style={styles.textXL}>
          Create New <Text style={{ color: colors.primary }}>Account</Text>
        </Text>

        <FormInput
          placeholder="Masukan Username"
          autoCapitalize="none"
          value={name}
          onChangeText={handleChange("name")}
        />

        <FormInput
          placeholder="Masukan Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={handleChange("email")}
        />

        <FormInput
          placeholder="Masukan Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={handleChange("password")}
        />

        <TouchableOpacity style={styles.button} onPress={handlePressSignUp}>
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
