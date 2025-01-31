import React, { useState, useContext } from "react";
import { Pressable, View, Text, TextInput, Alert } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../utils/styles";
import { hasPasswordErrors, isEmailValid } from "../utils/validations";
import { AuthContext } from "../context/AuthContext";

/**
 * LoginScreen component. This screen allows the user to enter their email and
 * password to log in. It also contains a button that allows the user to navigate
 * to the Signup screen.
 * @param {object} navigation - It is used to navigate between different screens.
 * @returns {JSX.Element} LoginScreen component.
 */
export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  // Get the login function from the AuthContext, which will be used to log in the user
  const { login } = useContext(AuthContext);

  /**
   * This function is called when the user types in the email field. It updates the
   * email state and checks if the email format is valid.
   * @param {string} email - The email entered by the user.
   */
  const handleEmail = (email) => {
    setEmail(email);
    setValidEmail(isEmailValid(email));
  };

  /**
   * This function is called when the user types in the password field. It updates the
   * password state and checks if the password format is valid.
   * @param {string} password - The password entered by the user.
   */
  const handlePassword = (password) => {
    setPassword(password);
    const error = hasPasswordErrors(password);
    setPasswordError(error);
  };

  /**
   * This function is called when the user presses the login button. It checks if the
   * email and password are valid and logs in the user if they are. Otherwise, it shows
   * an error message.
   */
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
      <Pressable style={globalStyles.primaryButton} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </Pressable>

      {/* Navigate to Signup */}
      <Pressable
        style={globalStyles.secondaryButton}
        onPress={() => navigation.replace("Signup")}
      >
        <Text style={globalStyles.buttonText}>Go to Signup</Text>
      </Pressable>
    </View>
  );
}
