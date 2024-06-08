import { Colors, ThemeManager, Typography } from "react-native-ui-lib";

import { baseSpacing, colors } from "./stylesConstant";

export const initTheme = () => {
  Colors.loadDesignTokens({ primaryColor: colors.primary });
  ThemeManager.setComponentTheme("Button", () => {
    return {
      borderRadius: baseSpacing,
    };
  });
  ThemeManager.setComponentTheme("TextField", () => {
    return {
      paddingTop: baseSpacing * 0.5,
    };
  });
  Typography.loadTypographies({
    h1: { fontSize: 16, fontWeight: "500" },
    h2: { fontSize: 16, fontWeight: "500", color: colors.primaryDarker },
  });
};
