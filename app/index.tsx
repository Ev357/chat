import { View, Text, Platform } from "react-native";
import "@/assets/css/tailwind.css";
import { inject } from "@vercel/analytics";

const App = () => {
  if (Platform.OS === "web") {
    inject();
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-geist">
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
};

export default App;
