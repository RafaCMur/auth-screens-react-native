import React, { useContext } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { globalStyles } from "../utils/styles";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/flower-logo-free-royalty.jpg";

/**
 * Dashboard screen component
 * @param {object} navigation - Navigation object to navigate between screens
 */
export function DashboardScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  /**
   * Closes the session and returns to the Home screen (reset the navigation stack)
   */
  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

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

      {/* Welcome Message */}
      <Text style={globalStyles.title}>Dashboard</Text>
      <Text style={globalStyles.subtitle}>Welcome, {user?.email}</Text>

      {/* User Stats (Fake Data) */}
      <View style={globalStyles.card}>
        <Text style={globalStyles.cardTitle}>Your Stats</Text>
        <Text style={globalStyles.cardText}>🔹 Last Login: Today at 14:30</Text>
        <Text style={globalStyles.cardText}>🔹 Completed Actions: 12</Text>
        <Text style={globalStyles.cardText}>🔹 Account Type: Premium</Text>
      </View>

      {/* Logout Button */}
      <Pressable style={globalStyles.dangerButton} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}
