import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./components/login-screen";
import { SignupScreen } from "./components/signup-screen";
import { HomeScreen } from "./components/home-screen";
import { AuthProvider } from "./context/AuthContext";
import { DashboardScreen } from "./components/dashboard";

/**
 * App component - The main component of the application
 */
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="default" />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}

// We use flex: 1 to make the container take up the entire screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
