import { useState } from "react";
import { Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import { useRouter } from "expo-router";
import { FadeIn } from "react-native-reanimated";
import {
  Container,
  AnimatedView,
  Title,
  Subtitle,
  SocialContainer,
  SocialButton,
  SocialLogo,
  StyledInput,
  SignInButton,
  ButtonText,
  Footer,
  FooterText,
  RegisterLink,
} from "./Screen.styled";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Google Auth
  const [, , googlePromptAsync] = Google.useAuthRequest({
    clientId: "ВАШ_GOOGLE_CLIENT_ID",
  });

  // Facebook Auth
  const [, , facebookPromptAsync] = Facebook.useAuthRequest({
    clientId: "ВАШ_FACEBOOK_APP_ID",
  });

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
      return;
    }

    // TODO: Connect the form to the real authentication flow.
    // Never log passwords or other credentials, even during development.
  };

  return (
    <Container>
      <AnimatedView entering={FadeIn.duration(2000)}>
        <Title>HealthAI</Title>
        <Subtitle>Ласкаво просимо!</Subtitle>
      </AnimatedView>

      {/* Кнопки соц. мереж */}
      <SocialContainer>
        <SocialButton
          onPress={() => googlePromptAsync()}
          accessibilityRole="button"
          accessibilityLabel="Увійти через Google"
        >
          <SocialLogo source={require("../../assets/icons/google png.png")} />
        </SocialButton>

        <SocialButton
          onPress={() => facebookPromptAsync()}
          accessibilityRole="button"
          accessibilityLabel="Увійти через Facebook"
        >
          <SocialLogo source={require("../../assets/icons/Facebook_png.png")} />
        </SocialButton>
      </SocialContainer>

      {/* Форма входу */}
      <StyledInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        accessibilityLabel="Email"
      />

      <StyledInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Пароль"
      />

      <SignInButton
        onPress={handleSignIn}
        accessibilityRole="button"
        accessibilityLabel="Увійти"
      >
        <ButtonText>Увійти</ButtonText>
      </SignInButton>

      {/* Посилання на реєстрацію */}
      <Footer>
        <FooterText>Немає акаунту? </FooterText>
        <RegisterLink
          onPress={() => router.push("/screens/SignUpScreen")}
          accessibilityRole="link"
          accessibilityLabel="Зареєструватися"
        >
          Зареєструватися
        </RegisterLink>
      </Footer>
    </Container>
  );
};

export default SignUpScreen;
