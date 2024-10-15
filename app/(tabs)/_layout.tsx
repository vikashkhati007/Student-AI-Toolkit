import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import Draggable from "react-native-draggable";
export default function TabLayout() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(true);
    setTimeout(() => {
      setMenu(false);
    }, 4000);
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
          tabBarStyle: {
            display: !menu ? "none" : "flex",
          },
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
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
          name="coding"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="code-slash-outline" size={24} color={color} />
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
      {!menu ? (
          <Draggable x={0} y={600} >
            <View
              style={{
                position: "absolute", // Position it absolutely
                width: 50, // Width of the circular button
                height: 50, // Height of the circular button
                backgroundColor: "white", // Grey background
                borderRadius: 25, // Fully rounded corners
                justifyContent: "center", // Center the icon vertically
                alignItems: "center", // Center the icon horizontally
                borderColor: "grey", // Black border
                borderWidth: 1, // 1px border width
              }}
            >
              <Ionicons
              onPress={handleClick}
                size={25}
                color={"black"}
                name="grid-outline"
              />
            </View>
          </Draggable>
      ) : null}
    </>
  );
}
