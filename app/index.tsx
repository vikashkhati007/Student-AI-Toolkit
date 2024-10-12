import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <Link href={"/chatbot"}>
        <View style={{ flex: 1 }}>
            <ThemedText style={{color: "black"}}>Welcome To AI Chat Bot</ThemedText>
        </View>
    </Link>
);
}
