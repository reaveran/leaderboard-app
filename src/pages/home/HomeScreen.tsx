import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { commonStyles } from "@styles/commonStyles";

export const HomeScreen: Navigation.Screen<"HomeScreen"> = () => {
  return (
    <SafeAreaView style={[commonStyles.fullSize, commonStyles.backgroundWhite]}>
      <Text>Test app</Text>
    </SafeAreaView>
  );
};
