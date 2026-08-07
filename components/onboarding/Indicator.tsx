import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface Props {
  total: number;
  current: number;
}

interface IndicatorItemProps {
  active: boolean;
}

function IndicatorItem({ active }: IndicatorItemProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(active ? 28 : 8, {
        duration: 300,
      }),

      opacity: withTiming(active ? 1 : 0.5, {
        duration: 300,
      }),
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 8,
          borderRadius: 999,
          backgroundColor: "#FF6161",
        },
        animatedStyle,
      ]}
    />
  );
}

export function Indicator({ total, current }: Props) {
  return (
    <View className="flex-row items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <IndicatorItem key={index} active={index === current} />
      ))}
    </View>
  );
}
