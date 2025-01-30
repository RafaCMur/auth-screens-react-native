import { StyleSheet } from "react-native";

const baseButton = {
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  marginTop: 16,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  primaryButton: {
    ...baseButton,
    backgroundColor: "#007BFF",
  },
  secondaryButton: {
    ...baseButton,
    backgroundColor: "#6c757d",
  },
  dangerButton: {
    ...baseButton,
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  wrongText: {
    color: "red",
  },
  fieldContainer: {
    marginBottom: 16,
  },
});
