import { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

const WelcomeScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/screens/RegisterScreen"); // Перехід на реєстрацію
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(2000)} style={styles.logoContainer}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.title}>HealthAI</Text>
        <Text style={styles.subtitle}>Ваш персональний помічник здоров'я</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0066FF",
  },
  subtitle: {
    fontSize: 16,
    color: "#0066FF",
    marginTop: 5,
  },
});

export default WelcomeScreen;
