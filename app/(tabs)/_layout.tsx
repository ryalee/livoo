import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TabIcon } from "@/components/navigation/TabIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          position: "absolute",

          left: 24,
          right: 24,
          bottom: 32,

          backgroundColor: "transparent",
          // width: "90%",

          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,

          height: 55,
        },

        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hoje",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require("../../assets/images/icons/book-active.png")}
              inactiveIcon={require("../../assets/images/icons/book-inactive.png")}
            />
          ),
          labelStyle: ({ focused }) => ({
            color: focused ? "#FF6161" : "#1E1E1E",
          }),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Biblioteca",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require("../../assets/images/icons/library-active.png")}
              inactiveIcon={require("../../assets/images/icons/library-inactive.png")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sessions"
        options={{
          title: "Sessões",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require("../../assets/images/icons/timer-active.png")}
              inactiveIcon={require("../../assets/images/icons/timer-inactive.png")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require("../../assets/images/icons/profile-active.png")}
              inactiveIcon={require("../../assets/images/icons/profile-inactive.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
