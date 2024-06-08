import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { MainNavigation } from "@navigation/MainNavigation";
import { commonStyles } from "@styles/commonStyles";
import { initTheme } from "@styles/theme";
import store from "@store/store";

const App = () => {
  initTheme();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <KeyboardAvoidingView style={commonStyles.fullSize} behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <MainNavigation />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
