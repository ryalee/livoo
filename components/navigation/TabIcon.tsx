import { Image, ImageSourcePropType } from "react-native";

interface Props {
  focused: boolean;
  activeIcon: ImageSourcePropType;
  inactiveIcon: ImageSourcePropType;
}

export function TabIcon({
  focused,
  activeIcon,
  inactiveIcon,
}: Props) {
  return (
    <Image
      source={focused ? activeIcon : inactiveIcon}
      style={{
        width: 45,
        height: 45,
      }}
      resizeMode="contain"
    />
  );
}