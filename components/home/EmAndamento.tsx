import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function EmAndamento() {
  return (
    <View className="mt-10">
      <Text className="px-5 mb-4 font-titleMedium text-2xl">Leitura Atual</Text>

      <View className="flex-row justify-around bg-textLight h-[300px] w-[90%] mx-auto  rounded-2xl items-center shadow-sm">
        <View className="items-center justify-center w-[50%]">
          <Image
            source={require("../../assets/images/ghost.png")}
          />

          <Text className="text-md text-center font-titleMedium mt-5 text-gray-500">Você ainda não está lendo nenhum livro.</Text>

          <TouchableOpacity 
            activeOpacity={0.8}
          >
            <Text className="text-2xl mt-4 font-bodyBold text-accent">Adicionar Livro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
