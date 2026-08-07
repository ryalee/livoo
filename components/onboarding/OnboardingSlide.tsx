import { Image } from "expo-image";
import { View, Text } from "react-native";

import { OnboardingSlide as Slide } from "../../constants/onboarding";

interface Props {
  slide: Slide;
}

export function OnboardingSlide({ slide }: Props) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      {/* <Text className="text-md font-titleMedium text-zinc-500">{slide.id} / 5</Text> */}

      <Image
        source={slide.image}
        style={{
          width: 320,
          height: 320,
        }}
        contentFit="contain"
      />

      <Text
        className="mt-10 text-center text-3xl"
        style={{
          fontFamily: "MontserratAlternates_600SemiBold",
        }}
      >
        {slide.title}
      </Text>

      <Text
        className="mt-5 text-center text-base text-zinc-500"
        style={{
          fontFamily: "Poppins_400Regular",
        }}
      >
        {slide.subtitle}
      </Text>

    </View>
  );
}