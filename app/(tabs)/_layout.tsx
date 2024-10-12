import { Tabs } from "expo-router";
import { Image, Bot, UserRoundSearch } from "lucide-react";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="chatbot"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Bot color={color} />,
        }}
      />
      <Tabs.Screen
        name="imagebot"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Image color={color} />,
        }}
      />
      <Tabs.Screen
        name="userfinder"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <UserRoundSearch color={color} />,
        }}
      />
    </Tabs>
  );
}
