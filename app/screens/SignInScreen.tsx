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
import customFetch from "../config/db";
import { showMessage } from "react-native-flash-message";
import { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = () => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleChange = (name: string) => {
    return (text: string) => {
      setUserInfo({ ...userInfo, [name]: text });
    };
  };

  const handleLogin = async () => {
    try {
      const { data } = await customFetch.post("/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", data);

      if (data) {
        await AsyncStorage.setItem("token", data.token);
        const storage = await AsyncStorage.getItem("token");
        console.log("Token stored:", storage);
        showMessage({ message: "Login berhasil", type: "success" });
      }
    } catch (error) {
      let errorMsg = error as any;
      if (error instanceof AxiosError) {
        errorMsg = errorMsg.response.data;
        showMessage({ message: errorMsg.message, type: "danger" });
      }
    }
  };

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
