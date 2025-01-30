import React from "react";
import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../utils/styles";

export function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
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
