import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import {performanceBoosterScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function CreativePage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "red" }}>
        <Tab.Screen
          name="ImageGen"
          children={() => (
            <WebViewScreen url="https://copilot.microsoft.com/images/create/"  />
          )}
        />
           <Tab.Screen
          name="VideoGen"
          children={() => (
            <WebViewScreen url="https://www.vidnoz.com/text-to-video-ai.html" />
          )}
        />
       
      </Tab.Navigator>
    </SafeAreaView>
  );
}
