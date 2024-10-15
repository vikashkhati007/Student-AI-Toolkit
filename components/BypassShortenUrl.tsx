import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function BypassShortenUrl() {
  const [injectedJavaScript, setInjectedJavaScript] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJavaScript = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/officialgxd/ProxyFinder/refs/heads/main/bypasser.js');
        const script = await response.text();
        console.log(script);
        setInjectedJavaScript(script);
      } catch (error) {
        console.error('Error fetching the JavaScript:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJavaScript();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://shrinkme.ink/qeOUm3' }} // Replace with your target URL
        injectedJavaScript={injectedJavaScript}
        allowsFullscreenVideo
        userAgent="Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36"
        originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true} // Allow third-party cookies for OAuth
        onShouldStartLoadWithRequest={(request) => {
          return true;
        }}
        onMessage={(event) => {
          console.log(event.nativeEvent.data); // Handle messages from web content
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
