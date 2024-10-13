import React, { useEffect } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"

const webClientId = '267161574016-drof1t03m02a6js2bgo93th39d0vfcrv.apps.googleusercontent.com';
const androidClientId = '267161574016-uhcia21a63iiffomsac7tkpn6tutq7e1.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();
export default function GooglePage() {
    const config ={
        webClientId,
        androidClientId
    }
const [request, response, promptAsync] = Google.useAuthRequest(config);
const handleToken = () =>{
    if(response?.type === 'success'){
        const {authentication} = response;
        const token = authentication?.accessToken;
        console.log("acess token", token);
    }
}
useEffect(() => {
    handleToken();
}, [response]);

  return (
    <View>
        <Pressable onPress={() => promptAsync()}>
        <Text>Login with Google</Text>
        </Pressable>
    </View>
  );
}