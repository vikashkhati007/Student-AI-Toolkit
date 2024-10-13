import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
const Tab = createMaterialTopTabNavigator();
export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "red" }}>
        <Tab.Screen
          name="ChatGPT"
          children={() => <WebViewScreen url="https://chatgpt.com" />}
        />
        <Tab.Screen
          name="Perplexity"
          children={() => <WebViewScreen url="https://www.perplexity.ai" />}
        />
        <Tab.Screen
          name="Morphic"
          children={() => <WebViewScreen url="https://www.morphic.sh" />}
        />
        <Tab.Screen
          name="Claude"
          children={() => <WebViewScreen url="https://claude.ai" />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}


