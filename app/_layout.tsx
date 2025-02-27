import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/RegisterScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/SignUpScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
