import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { globalStyles } from "../utils/styles";
import logo from "../assets/flower-logo-free-royalty.jpg";

/**
 * HomeScreen component. This is the first screen that the user should see when
 * they open the app for the first time. It contains two buttons that allow the
 * user to navigate to the Login and Signup screens.
 * @param {object} navigation - It is used to navigate between different screens.
 * @returns {JSX.Element} HomeScreen component.
 */
export function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      {/* Logo */}
      <View style={globalStyles.centeredContainer}>
        <Image
          source={logo}
          style={{ width: 70, height: 70, marginBottom: 16 }}
          resizeMode="contain"
        />
      </View>

      <Text style={globalStyles.title}>Welcome</Text>

      {/* Navigate to Login */}
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={globalStyles.buttonText}>Go to Login</Text>
      </Pressable>

      {/* Navigate to Signup */}
      <Pressable
        style={[
          globalStyles.secondaryButton,
          { marginTop: 16, backgroundColor: "#6c757d" },
        ]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={globalStyles.buttonText}>Go to Signup</Text>
      </Pressable>
    </View>
  );
}
