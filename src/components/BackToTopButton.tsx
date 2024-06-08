import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome";

import { baseSpacing, colors } from "@styles/stylesConstant";

import FadeView from "./FadeView";

const WIDTH = 40;

interface BackToTopButtonProps {
  isVisible: boolean;
  onPress: () => void;
}

const BackToTopButton = ({ isVisible, onPress }: BackToTopButtonProps) => {
  return (
    <FadeView isVisible={isVisible}>
      <TouchableOpacity backgroundColor={colors.primary} onPress={onPress} style={styles.button}>
        <Icon name="chevron-up" color={colors.white} />
      </TouchableOpacity>
    </FadeView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: WIDTH / 2,
    bottom: baseSpacing,
    height: WIDTH,
    justifyContent: "center",
    position: "absolute",
    right: baseSpacing * 2,
    width: WIDTH,
  },
});

export default BackToTopButton;
