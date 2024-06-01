import RNBootSplash from "react-native-bootsplash";
import { createNavigationContainerRef } from "@react-navigation/native";
import { StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";

export const ROOT_STACK_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  animationEnabled: false,
};

export const FULL_MODAL_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: true,
  gestureEnabled: true,
  ...TransitionPresets.ModalPresentationIOS,
};

export const SLIDE_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: true,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const navigationRef = createNavigationContainerRef();

export const handleNavigationReady = () => {
  if (navigationRef.isReady()) {
    void RNBootSplash.hide();
  }
};
