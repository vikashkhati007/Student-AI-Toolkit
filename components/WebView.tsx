import { performanceBoosterScript } from "@/scripts/hook";
import React, { useEffect, useRef, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";

const WebViewScreen = ({
  url,
  injectedscript,
  performanceBoosterScriptCheck,
}: {
  url: string;
  injectedscript?: string;
  performanceBoosterScriptCheck?: boolean;
}) => {
  const webviewRef = useRef<any>(null);
  const [canGoBack, setCanGoBack] = useState(false);


  // Inside your component
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (webviewRef.current && canGoBack) {
          webviewRef.current.goBack();
          return true; // Prevent default behavior (exit app)
        }
        return false; // Default behavior (exit app)
      }
    );

    return () => backHandler.remove(); // Cleanup the event listener
  }, [canGoBack]);

  const handleMutipleScript = () => {
    if (webviewRef.current) {
      !performanceBoosterScriptCheck ? webviewRef.current.injectJavaScript(performanceBoosterScript): null;
    }
  };

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <View style={styles.container}>
      <WebView
        mixedContentMode="always"
        ref={webviewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState
        injectedJavaScript={injectedscript}
        allowsFullscreenVideo
        userAgent="Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36"
        originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true} // Android ke liye scroll ko enable karo
        thirdPartyCookiesEnabled={true} // Allow third-party cookies for OAuth
        onLoadEnd={handleMutipleScript}
        cacheEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 5,
  },
});

export default WebViewScreen;
