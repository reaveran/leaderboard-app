import { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { Button, TextField } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome";

import { baseSpacing, colors } from "@styles/stylesConstant";
interface SearchBarProps {
  onSearch: (text: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading = false }: SearchBarProps) => {
  const [text, setText] = useState<string>("");

  const handlePress = () => {
    Keyboard.dismiss();
    onSearch(text);
  };

  const resetText = () => {
    setText("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.textFieldContainer}>
          <Icon name="search" size={20} color={colors.primary} />
          <TextField
            value={text}
            containerStyle={styles.textField}
            placeholder="Search name..."
            onChangeText={setText}
            maxLength={100}
          />
          {text !== "" && (
            <Icon onPress={resetText} name="close" size={20} color={colors.disabled} style={styles.closeButton} />
          )}
        </View>
        <Button
          disabled={isLoading}
          label="Search"
          disabledBackgroundColor={colors.disabled}
          onPress={handlePress}
          borderRadius={0}
          size={Button.sizes.medium}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    paddingHorizontal: baseSpacing,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: baseSpacing,
    flexDirection: "row",
    overflow: "hidden",
    paddingLeft: baseSpacing,
    width: "100%",
  },
  textField: {
    flex: 1,
    padding: 0,
    paddingHorizontal: baseSpacing,
  },
  textFieldContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  wrapper: {
    backgroundColor: colors.primaryDarker,
    padding: baseSpacing * 2,
  },
});
