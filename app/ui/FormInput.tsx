import { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import colors from "../utils/color";

interface FormInputProps extends TextInputProps {}

const FormInput: FC<FormInputProps> = (props) => {
  const [isActive, setIsActivce] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        isActive ? styles.inputActive : styles.inputDeactive,
      ]}
      {...props}
      onFocus={() => {
        setIsActivce(true);
      }}
      onBlur={() => {
        setIsActivce(false);
      }}
      placeholderTextColor={colors.primary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
  },
  inputActive: {
    borderWidth: 4,
    borderColor: colors.primary,
  },
  inputDeactive: {
    borderWidth: 4,
    borderColor: colors.deactive,
  },
});

export default FormInput;
