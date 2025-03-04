import Animated from "react-native-reanimated";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  min-width: 100%;
`;

export const AnimatedView = styled(Animated.View)`
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #0066ff;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #757575;
  margin-bottom: 40px;
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #0066ff;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const SocialLogo = styled.Image`
  width: 30px;
  height: 30px;
`;

export const SocialText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #0066ff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const FooterText = styled.Text`
  color: #000;
`;

export const RegisterLink = styled.Text`
  color: #0066ff;
  font-weight: bold;
`;