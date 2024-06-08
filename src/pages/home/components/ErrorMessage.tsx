import { Text, View } from "react-native-ui-lib";
interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <View centerH paddingV-24 paddingH-16>
      <Text center h1>
        {message}
      </Text>
    </View>
  );
};
