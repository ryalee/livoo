import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";

import { TabIcon } from "@/components/navigation/TabIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          // left: 20,
          // right: 20,
          bottom: 10,
          height: 90,
          borderRadius: 100,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 25,
          marginHorizontal: 20,
          width: "90%",
          backgroundColor: "transparent",
          overflow: "hidden",
        },

        tabBarBackground: () => (
          <BlurView
            intensity={10}
            tint="light"
            experimentalBlurMethod="dimezisBlurView"
            style={{
              flex: 1,
              borderRadius: 100,
              overflow: "hidden",
              borderWidth: 1,
            }}
          />
        ),
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
