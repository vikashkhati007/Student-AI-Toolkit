import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
const Tab = createMaterialTopTabNavigator();

export default function JobPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Google"
          children={() => (
            <WebViewScreen url="https://www.google.com/about/careers/applications/jobs" />
          )}
        />
        <Tab.Screen
          name="Indeed"
          children={() => <WebViewScreen url="https://in.indeed.com/" />}
        />
        <Tab.Screen
          name="NCS"
          children={() => (
            <WebViewScreen url="https://www.ncs.gov.in/Pages/Search.aspx" performanceBoosterScriptCheck={true} />
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
