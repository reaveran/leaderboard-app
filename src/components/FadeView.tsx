import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Animated } from "react-native";

interface FadeViewProps extends PropsWithChildren {
  isVisible: boolean;
}

const FadeView = ({ isVisible, children }: FadeViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, isVisible]);

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};

export default FadeView;
