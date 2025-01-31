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
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
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
  centeredContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Para Android
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
});
