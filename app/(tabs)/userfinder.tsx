import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import WebBrowserComponent from "@/components/WebBrowser";
import { unlockScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function UserFinderBot() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Tab.Navigator 
      >
        <Tab.Screen
          name="FireShip"
          children={() => (
            <WebViewScreen
              url="https://fireship.io/courses"
              injectedscript={unlockScript}
            />
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
