import { Stack, Tabs } from "expo-router";
export default function index() {
  return (
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
  );
}
