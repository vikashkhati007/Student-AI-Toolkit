import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import { unlockScript } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function PremiumPage() {
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
        <Tab.Screen
          name="Code Academy"
          children={() => (
            <WebViewScreen
              url="https://www.codecademy.com/"
              injectedscript={unlockScript}
            />
          )}
        />
          <Tab.Screen
          name="EDX"
          children={() => (
            <WebViewScreen
              url="https://www.edx.org/"
              injectedscript={unlockScript}
            />
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
