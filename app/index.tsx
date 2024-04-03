import { Platform } from "react-native";
import { Redirect } from "expo-router";
import { inject } from "@vercel/analytics";
import "@/assets/css/tailwind.css";

const App = () => {
  if (Platform.OS === "web") {
    inject();
  }
  return <Redirect href="/(tabs)/chats" />;
};

export default App;
