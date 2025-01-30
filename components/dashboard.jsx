import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../utils/styles";
import { AuthContext } from "../context/AuthContext";

export function DashboardScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }], // Vuelve a Home al cerrar sesión
    });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>
      <Text>Welcome, {user?.email}</Text>

      <Pressable style={globalStyles.dangerButton} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}
