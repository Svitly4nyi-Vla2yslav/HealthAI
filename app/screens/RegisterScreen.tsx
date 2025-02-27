import { View, Text, StyleSheet } from "react-native";

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>HealthAI</Text>
     <Text style={styles.subtitle}>Ласкаво просимо!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
  },
});