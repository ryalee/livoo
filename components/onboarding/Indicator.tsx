import { View } from "react-native";

interface Props {
  total: number;
  current: number;
}

export function Indicator({ total, current }: Props) {
  return (
    <View className="flex-row justify-center gap-2">

      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${
            current === index
              ? "w-8 bg-yellow-400"
              : "w-2 bg-zinc-300"
          }`}
        />
      ))}

    </View>
  );
}