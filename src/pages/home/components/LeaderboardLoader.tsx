import { ActivityIndicator } from "react-native";
import { Text, View } from "react-native-ui-lib";

import { colors } from "@styles/stylesConstant";

export const LeaderboardLoader = () => {
  return (
    <View paddingV-56 center>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text marginT-16 h2>
        Searching...
      </Text>
    </View>
  );
};
