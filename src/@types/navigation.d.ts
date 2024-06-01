declare namespace Navigation {
  // Define the all screen here
  type ScreenParams = {
    HomeScreen: undefined;
  };

  type Screen<Name extends keyof ScreenParams, Props = Record<string, unknown> | Record<string, never> | undefined> = (
    props: (import("@react-navigation/stack").StackScreenProps<ScreenParams, Name> & Props) | Record<string, never>
  ) => JSX.Element;
}
