import { View, Text, Image } from "react-native";
import React from "react";
import ProgressGraph from "./ProgressGraph";
import { ScrollView } from "react-native-gesture-handler";

export default function EstatisticasRapidas() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        gap: 10,
      }}
    >
      {/* a streak */}
      <View className="items-center justify-center px-5 py-4 bg-textLight shadow-sm rounded-2xl">
        <Text className="text-2xl font-titleMedium text-text">Seu ritmo</Text>

        <View className="items-center">
          <Image
            source={require("../../assets/images/freezing.gif")}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <View className="items-center gap-1 py-1">
            <View className="flex-row gap-1 items-end">
              <Text className="text-4xl text-blue-600 font-bodySemi">0</Text>
              <Text className="text-xl text-blue-600 font-bodyMedium">
                Dias
              </Text>
            </View>

            <Text className="text-center text-gray-500">
              Registre sua leitura todos os {"\n"}dias para aumentar seu ritmo
            </Text>
          </View>
        </View>
      </View>

      {/* Numero de livros lidos */}
      <View className="items-center justify-center px-5 py-4 bg-textLight shadow-sm rounded-2xl">
        <Text className="text-2xl font-titleMedium text-text">
          Livros lidos
        </Text>

        <View className="items-center">
          <Image
            source={require("../../assets/images/books-folder.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />

          <View className="gap-1">
            <View className="flex-row">
              <Text className="text-4xl text-green-700 font-bodySemi">0</Text>
              <Text className="text-xl text-green-700 font-bodyMedium self-end">
                {" "}
                Livros
              </Text>

              <View className="flex-row items-end">
                <Text className="text-xs"> \ Um total de </Text>
                <Text className="text-xs text-green-700 font-bodySemi">0</Text>
                <Text className="text-xs text-green-700 font-bodyMedium ">
                  {" "}
                  Páginas
                </Text>

                <View className="flex-row items-center"></View>
              </View>
            </View>

            <Text className="py-1 text-center text-gray-500">
              Você ainda não registrou {"\n"} nenhuma leitura!
            </Text>

            {/* <Text className="py-1 text-center text-gray-500">
              Você está indo muito bem! {"\n"} continue nesse ritmo
            </Text> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
