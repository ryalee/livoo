import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function EmAndamento() {
  return (
    <View className="mt-10">
      <View className="justify-around bg-textLight py-5 h-[240px] w-[90%] mx-auto rounded-2xl items-center shadow-sm">
        <Text className="text-text font-titleMedium text-2xl">
          Leitura atual
        </Text>

        <View className="items-center w-[50%]">
          <Image
            source={require("../../assets/images/ghost.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />

          <Text className="text-md text-center font-titleMedium mt-5 text-gray-500">
            Você ainda não está lendo nenhum livro.
          </Text>
        </View>

          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-xl mt-4 w-full font-bodySemi text-accent">
              Iniciar Sessão de Leitura
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
