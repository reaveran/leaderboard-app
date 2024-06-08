import { RouteProp, useNavigation as rnUseNavigation, useRoute as rnUseRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useNavigation = () => rnUseNavigation<StackNavigationProp<Navigation.ScreenParams>>();

export const useRoute = <T extends keyof Navigation.ScreenParams>() =>
  rnUseRoute<RouteProp<Navigation.ScreenParams, T>>();
