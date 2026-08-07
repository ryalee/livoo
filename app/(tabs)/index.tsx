import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import MetaDiaria from "@/components/home/EstatisticasRapidas";
import { ScrollView } from "react-native-gesture-handler";
import EmAndamento from "@/components/home/EmAndamento";
import UltimaSessao from "@/components/home/LastSession";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Bom dia";
  }
  if (hour >= 12 && hour < 18) {
    return "Boa tarde";
  }

  return "Boa noite";
}

export default function HomeScreen() {
  const greeting = getGreeting();

  return (
    <ScrollView className="flex-1 bg-bg">
      <View className="flex-row items-center justify-between px-8 py-2 mt-[55px]">
        <View className="my-5">
          <Text className="font-titleMedium text-2xl">{greeting}, userName! </Text>
          <Text className="font-body text-lg">Que tal ler um pouco hoje?</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/notifications/notifications")}
          activeOpacity={0.9}
        >
          <Image
            source={require("../../assets/images/icons/notification.png")}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
      </View>

      <MetaDiaria />
      <EmAndamento />
      <UltimaSessao />
    </ScrollView>
  );
}
