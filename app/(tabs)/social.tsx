import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
const Tab = createMaterialTopTabNavigator();

export default function SocialPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
      
        <Tab.Screen
          name="LinkedIn"
          children={() => <WebViewScreen url="https://linkedin.com/" />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
