import { Tabs } from "expo-router";
import {
  ChatBubbleLeftIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "react-native-heroicons/micro";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ size, color }) => (
            <ChatBubbleLeftIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ size, color }) => (
            <UserCircleIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Cog6ToothIcon size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
