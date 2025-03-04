import { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, Image } from "react-native";
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
  SocialText,
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
  const [_, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    clientId: "ВАШ_GOOGLE_CLIENT_ID",
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
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container>
      <AnimatedView entering={FadeIn.duration(2000)}>
        <Title>HealthAI</Title>
        <Subtitle>Ласкаво просимо!</Subtitle>
      </AnimatedView>

      {/* Кнопки соц. мереж */}
      <SocialContainer>
        <SocialButton onPress={() => googlePromptAsync()}>
          <SocialLogo source={require("../../assets/icons/Facebook_png.png")} />
        </SocialButton>

        <SocialButton onPress={() => facebookPromptAsync()}>
          <SocialLogo source={require("../../assets/icons/google png.png")} />
        </SocialButton>
      </SocialContainer>

      {/* Форма входу */}
      <StyledInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <StyledInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <SignInButton onPress={handleSignIn}>
        <ButtonText>Увійти</ButtonText>
      </SignInButton>

      {/* Посилання на реєстрацію */}
      <Footer>
        <FooterText>Немає акаунту? </FooterText>
        <RegisterLink onPress={() => router.push("/screens/SignUpScreen")}>
          Зареєструватися
        </RegisterLink>
      </Footer>
    </Container>
  );
};

export default SignUpScreen;
