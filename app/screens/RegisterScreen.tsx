import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

WebBrowser.maybeCompleteAuthSession();

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Google Auth
  const [_, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    clientId: "ВАШ_GOOGLE_CLIENT_ID", // Змінити expoClientId → clientId
    // Для додаткової конфігурації (Android/iOS):
    // androidClientId: "...",
    // iosClientId: "...",
  });

  // Facebook Auth
  const [___, facebookResponse, facebookPromptAsync] = Facebook.useAuthRequest({
    clientId: "ВАШ_FACEBOOK_APP_ID",
  });

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
      return;
    }
    // Тут додати логіку входу через email/password
    console.log("Email:", email, "Password:", password);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(2000)}
        style={styles.titleContainer}
      >
        <Text style={styles.title}>HealthAI</Text>
        <Text style={styles.subtitle}>Ласкаво просимо!</Text>
      </Animated.View>

      {/* Кнопки соціальних мереж */}
      <View style={styles.containerSocial}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => googlePromptAsync()}
        >
          <Image
            source={require("../../assets/icons/Facebook_png.png")}
            style={styles.logo}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => facebookPromptAsync()}
        >
          <Image
            source={require("../../assets/icons/google png.png")}
            style={styles.logo}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      {/* Форма входу */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Увійти</Text>
      </TouchableOpacity>

      {/* Посилання на реєстрацію */}
      <View style={styles.footer}>
        <Text>Немає акаунту? </Text>
        <TouchableOpacity
          onPress={() => router.push("/screens/RegisterScreen")}
        >
          <Text style={styles.link}>Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    minWidth: "100%",
    margin: "auto",
  },
  titleContainer: {},
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0066FF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#757575",
    marginBottom: 40,
  },
  containerSocial: {
    flex: 1,
    
  },
  socialButton: {
    width: "100%",
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginBottom: 20,
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#0066FF",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    marginTop: 30,
  },
  link: {
    color: "#0066FF",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
