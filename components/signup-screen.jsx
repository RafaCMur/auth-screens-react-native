import React, { useContext, useState } from "react";
import { Pressable, View, Text, TextInput, Alert } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../utils/styles";
import { hasPasswordErrors, isEmailValid } from "../utils/validations";
import { AuthContext } from "../context/AuthContext";

/**
 * SignupScreen component. This screen allows the user to enter their email and
 * password to sign up. It also contains a button that allows the user to navigate
 * to the Login screen.
 * @param {object} navigation - It is used to navigate between different screens.
 * @returns {JSX.Element} SignupScreen component.
 */
export function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Import the signup function from the AuthContext, which is used to sign up the user
  const { signup } = useContext(AuthContext);

  /**
   * Validates the email format
   * @param {*} email Email to validate
   */
  const handleEmail = (email) => {
    setEmail(email);
    setValidEmail(isEmailValid(email));
  };

  /**
   * Validates the password.
   * @param {*} password Password to validate.
   */
  const handlePassword = (password) => {
    setPassword(password);
    const error = hasPasswordErrors(password);
    setPasswordError(error);
  };

  /**
   * Validates the confirm password field checking if it matches the password.
   * @param {*} confirmPassword Confirm password to validate.
   */
  const handleConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  /**
   * This function is called when the user presses the signup button. It checks if the
   * email and password are valid and signs up the user if they are. Otherwise, it shows
   * an error message.
   */
  const handleSignup = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Error", "Email format is invalid");
      return;
    }

    const passwordError = hasPasswordErrors(password); //Save it in a variable to avoid calling the function twice
    if (passwordError) {
      Alert.alert("Error", passwordError);
      return;
    }

    if (confirmPassword !== password) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    signup(email);
    Alert.alert(
      "Successful Signup",
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
      <Text style={globalStyles.title}>Signup Screen</Text>

      {/* Email field */}
      <View style={globalStyles.fieldContainer}>
        <Text>Email</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={handleEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {!validEmail && (
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
        {passwordError && (
          <Text style={globalStyles.wrongText}>{passwordError}</Text>
        )}
      </View>

      {/* Confirm Password field */}
      <View style={globalStyles.fieldContainer}>
        <Text>Confirm Password</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={globalStyles.input}
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={handleConfirmPassword} // Valida que coincidan las contraseñas
            secureTextEntry={seePassword}
            autoCapitalize="none"
          />
        </View>
        {confirmPasswordError && (
          <Text style={globalStyles.wrongText}>{confirmPasswordError}</Text>
        )}
      </View>

      {/* Signup button */}
      <Pressable style={globalStyles.primaryButton} onPress={handleSignup}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </Pressable>

      {/* Navigate to Login */}
      <Pressable
        style={globalStyles.secondaryButton}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={globalStyles.buttonText}>Go to Login</Text>
      </Pressable>
    </View>
  );
}
