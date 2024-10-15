import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import Draggable from "react-native-draggable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from ".";
import CodingPage from "./coding";
import ImagePage from "./imagebot";
import VideoPage from "./videobot";
import PremiumPage from "./premium";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const [menu, setMenu] = useState(true);

  const handleClick = () => {
    setMenu(false);
    setTimeout(() => {
      setMenu(true);
    }, 4000);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
          tabBarStyle: {
            display: menu ? "none" : "flex",
          },
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbox" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Coding"
          component={CodingPage}
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="code" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Image"
          component={ImagePage}
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="image" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoPage}
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="videocam" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Premium"
          component={PremiumPage}
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      {menu ? (
        <Draggable x={0} y={600}>
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
