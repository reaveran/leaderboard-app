import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { MainNavigation } from "@navigation/MainNavigation";
import { commonStyles } from "@styles/commonStyles";

const App = () => {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView style={commonStyles.fullSize} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <MainNavigation />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default App;
