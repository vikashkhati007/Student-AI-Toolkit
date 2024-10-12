import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
const Tab = createMaterialTopTabNavigator();

export default function UserFinderBot() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Vidnoz"
          children={() => (
            <WebViewScreen url="https://www.vidnoz.com/text-to-video-ai.html" />
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
