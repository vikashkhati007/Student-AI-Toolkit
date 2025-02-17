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
          name="LeetCode"
          children={() => (
            <WebViewScreen
              url="https://leetcode.com/problemset/"
              injectedscript={leecodepremiumQuestionBlock}
            />
          )}
        />
        <Tab.Screen
          name="CodeWars"
          children={() => <WebViewScreen url="https://www.codewars.com/" />}
        />
        <Tab.Screen
          name="HackerRank"
          children={() => <WebViewScreen url="https://www.hackerrank.com/" />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
