import React, { useState, useContext } from "react";
import { Pressable, View, Text, TextInput, Alert } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../utils/styles";
import { hasPasswordErrors, isEmailValid } from "../utils/validations";
import { AuthContext } from "../context/AuthContext";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const { login } = useContext(AuthContext);

  const handleEmail = (email) => {
    setEmail(email);
    setValidEmail(isEmailValid(email));
  };

  const handlePassword = (password) => {
    setPassword(password);
    const error = hasPasswordErrors(password);
    setPasswordError(error);
  };

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Error", "Email format is invalid");
      return;
    }

    const passwordError = hasPasswordErrors(password); //Save it in a variable to avoid calling the function twice
    if (passwordError) {
      Alert.alert("Error", passwordError);
      return;
    }

    login(email);
    Alert.alert(
      "Successful Login",
      "User: " + email + "\nPassword: " + password
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <View style={globalStyles.container}>
      {/* Title */}
      <Text style={globalStyles.title}>Login Screen</Text>

      {/* Email field */}
      <View style={globalStyles.fieldContainer}>
        <Text>Email</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={(text) => handleEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {validEmail ? null : (
          <Text style={globalStyles.wrongText}>Email format is invalid</Text>
        )}
      </View>

      {/* Password field */}
      <View style={globalStyles.fieldContainer}>
        <Text>Password</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter password"
            value={password}
            onChangeText={handlePassword}
            secureTextEntry={seePassword}
            autoCapitalize="none"
          />
          <Pressable onPress={() => setSeePassword(!seePassword)}>
            <Icon name={seePassword ? "eye" : "eye-off"} size={20} />
          </Pressable>
        </View>
        {passwordError ? (
          <Text style={globalStyles.wrongText}>{passwordError}</Text>
        ) : null}
      </View>

      {/* Login button */}
      <Pressable style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </Pressable>

      {/* Navigate to Signup */}
      <Pressable
        style={[
          globalStyles.button,
          { marginTop: 16, backgroundColor: "#6c757d" },
        ]}
        onPress={() => navigation.replace("Signup")}
      >
        <Text style={globalStyles.buttonText}>Go to Signup</Text>
      </Pressable>
    </View>
  );
}
