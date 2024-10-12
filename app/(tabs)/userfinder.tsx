import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import WebViewScreen from "@/components/WebView";
const Tab = createMaterialTopTabNavigator();

const unlockScript = `
    async function unlock() {
      document.querySelectorAll("[free=\\"\\"").forEach(el => el.setAttribute("free", true));

      if (document.querySelector("if-access [slot=\\"granted\\"]")) {
          document.querySelector("if-access [slot=\\"denied\\"]").remove();
          document.querySelector("if-access [slot=\\"granted\\"]").setAttribute("slot", "denied");
      }

      if (document.querySelector("video-player")?.shadowRoot?.querySelector(".vid")?.innerHTML) return;

      const vimeoId = Number(atob(document.querySelector("global-data").vimeo));
      const youtubeId = atob(document.querySelector("global-data").youtube);

      if (youtubeId) {
          document.querySelector("video-player").setAttribute("free", true);
          document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = 
              \`<iframe src="https://youtube.com/embed/\${youtubeId}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="\${location.pathname.split('/')[3]}" width="426" height="240" frameborder="0"></iframe>\`;
          return;
      }

      if (vimeoId) {
          document.querySelector("video-player").setAttribute("free", true);
          const html = (await fetch(\`https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F\${vimeoId}&id=\${vimeoId}\`).then(r => r.json())).html;
          document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = html;
          return;
      }
    }

    window.onload = unlock();
    window.addEventListener("flamethrower:router:end", unlock);
  `;

export default function UserFinderBot() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
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
