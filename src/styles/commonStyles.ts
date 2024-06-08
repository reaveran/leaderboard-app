import { StyleSheet } from "react-native";

import { baseSpacing, colors } from "./stylesConstant";

export const commonStyles = StyleSheet.create({
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  backgroundWhite: {
    backgroundColor: colors.white,
  },
  flatListContainer: {
    paddingBottom: baseSpacing * 5,
  },
  flex1: {
    flex: 1,
  },
  fullSize: {
    height: "100%",
    width: "100%",
  },
});
