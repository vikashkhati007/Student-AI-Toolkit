import { RightIcon } from "@/components/RightIcon";
import React, { useRef, useState } from "react";
import { View, Button, ActivityIndicator, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ url }: any) => {
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <WebView
        ref={webviewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState
      />
      <Pressable onPress={handleBackPress} disabled={!canGoBack}>
        <Text>Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WebViewScreen;
