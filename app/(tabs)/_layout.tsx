import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="imagebot"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="image" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videobot"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="videocam" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="userfinder"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="flame-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
