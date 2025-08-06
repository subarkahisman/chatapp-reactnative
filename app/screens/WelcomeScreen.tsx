import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamsList } from "../navigation/AuthNavigation";

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Just<Text style={{ color: colors.primary }}>Chatting</Text>
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus
        deleniti et, corporis, rem aut consequuntur magni, eius quo eum culpa
        tempore amet? Quaerat fugiat libero necessitatibus possimus labore
        tempore.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.textColor}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textColor}>Create A New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    margin: 15,
  },
  button: {
    borderRadius: 5,
    marginVertical: 4,
    padding: 10,
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  textColor: {
    color: colors.white,
  },
});

export default WelcomeScreen;
