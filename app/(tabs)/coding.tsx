import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import { leecodepremiumQuestionBlock, unlockScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function UserFinderBot() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="LeetCode"
          children={() => (
            <WebViewScreen
              url="https://leetcode.com/problemset/"
              injectedscript={leecodepremiumQuestionBlock}
            />
          )}
        />
        <Tab.Screen
          name="Replit"
          children={() => <WebViewScreen url="https://replit.com/~" />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
