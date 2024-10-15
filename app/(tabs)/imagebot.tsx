import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import {performanceBoosterScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function ImagePage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "red" }}>
        <Tab.Screen
          name="Magic"
          children={() => (
            <WebViewScreen url="https://magicstudio.com/ai-art-generator/"  />
          )}
        />
        <Tab.Screen
          name="Craiyon"
          children={() => <WebViewScreen url="https://www.craiyon.com" injectedscript={performanceBoosterScript}  />}
        />
        <Tab.Screen
          name="Problembo"
          children={() => (
            <WebViewScreen url="https://problembo.com/en/services/ai-image-generator" />
          )}
        />

        <Tab.Screen
          name="Nuelink"
          children={() => (
            <WebViewScreen url="https://nuelink.com/tools/ai-image-generator" />
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
