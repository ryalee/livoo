import { TouchableOpacity, Text, Image } from "react-native";

interface Props {
  isLast: boolean;
  onPress: () => void;
}

export function NextButton({ isLast, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-full bg-accent py-6 w-[80%] self-center"
      activeOpacity={0.9}
    >
      <Text className="text-center text-2xl text-textLight font-bodyMedium">
        {isLast ? (
          "Criar minha Biblioteca"
        ) : (
          "Próxima página"
        )}
      </Text>
    </TouchableOpacity>
  );
}
