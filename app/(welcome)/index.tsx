import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerify = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace("/(welcome)/onboarding");
    }, 1200);
  };

  return (
    <View className="bg-bg h-full items-center justify-center">
      <View className="items-center justify-center mb-[10px]">
        <Text className="text-2xl font-title">Bem-vindo(a) ao</Text>
        <Text className="font-logo text-[110px] [text-shadow:_0px_4px_8px_#FF6161]">
          Livoo
        </Text>
      </View>

      <Image
        source={require("../../assets/images/welcome-image.png")}
        width={11}
        height={12}
        className="w-[370px] h-[270px]"
        resizeMode="contain"
      />

      <Text className="text-text text-4xl my-[35px] font-title">
        Leia um pouco. {"\n"} Todos os dias.
      </Text>

      <TouchableOpacity
        className="bg-accent w-[300px] h-[70px] rounded-full items-center justify-center"
        activeOpacity={0.9}
        onPress={handleVerify}
      >
        <Text className="text-textLight font-semibold font-bodyMedium text-2xl">
          Ir para a Biblioteca
        </Text>
      </TouchableOpacity>
    </View>
  );
}
