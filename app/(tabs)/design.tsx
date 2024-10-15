import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import { leecodepremiumQuestionBlock, unlockScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function CodingPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Canva"
          children={() => <WebViewScreen url="https://www.canva.com/" />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
