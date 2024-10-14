import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = ({
  url,
  injectedscript,
}: {
  url: string;
  injectedscript?: string;
}) => {
  const webviewRef = useRef<any>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
  };

  const handleBackPress = () => {
    if (canGoBack) {
      webviewRef.current.goBack();
    } else {
      // Handle app navigation if there's no page to go back to
      // e.g., navigation.goBack() or other logic
    }
  };

  const handleLoadEnd = () => {
    // Injecting script after page load
    webviewRef.current.injectJavaScript(injectedscript);
  };

  return (
    <View style={styles.container}>
      <WebView
        mixedContentMode="always"
        ref={webviewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState
        onLoadEnd={handleLoadEnd}
        allowsFullscreenVideo
        userAgent="Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36"
        originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true} // Allow third-party cookies for OAuth
        onShouldStartLoadWithRequest={(request) => {
          return true;
        }}
      />
      <Pressable
        onPress={handleBackPress}
        disabled={!canGoBack}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
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
