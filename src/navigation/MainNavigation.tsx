import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "@pages/home/HomeScreen";

import { handleNavigationReady, navigationRef, ROOT_STACK_OPTIONS } from "./config";

const Stack = createStackNavigator<Navigation.ScreenParams>();

export const MainNavigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={handleNavigationReady}>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* 
          Grouping screen base on animation transition
          For example: for full modal transition
      
          <Stack.Group screenOptions={FULL_MODAL_OPTIONS}>
            Screen here...
          </Stack.Group> 
        */}

        <Stack.Group screenOptions={ROOT_STACK_OPTIONS}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
