import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
import { chatPDFuselessCodeBlock } from "@/scripts/hook";
const Tab = createMaterialTopTabNavigator();

export default function HomePage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: true,
        }}
      >
        <Tab.Screen
          name="ChatGPT"
          children={() => <WebViewScreen url="https://chatgpt.com" />}
        />
        <Tab.Screen
          name="ChatPDF"
          children={() => <WebViewScreen url="https://www.chatpdf.com/" injectedscript={chatPDFuselessCodeBlock}/>}
        />
        <Tab.Screen
          name="Natural Readers"
          children={() => (
            <WebViewScreen url="https://www.naturalreaders.com/online/" />
          )}
        />
 
      </Tab.Navigator>
    </SafeAreaView>
  );
}
