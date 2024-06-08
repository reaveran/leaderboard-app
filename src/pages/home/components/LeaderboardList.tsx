import { memo } from "react";
import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native-ui-lib";

import bananaImage from "@assets/icons/banana.png";
import { baseSpacing, colors } from "@styles/stylesConstant";

interface LeaderboardListProps {
  user: User;
  isHighlighted?: boolean;
  onPress: () => void;
}

const LeaderboardList = ({ user, isHighlighted = false, onPress }: LeaderboardListProps) => {
  return (
    <TouchableOpacity onPress={onPress} centerV row style={[styles.list, isHighlighted && styles.listHighlited]}>
      <View style={styles.rankContainer}>
        <Text color={isHighlighted ? colors.white : undefined} center>
          {user.rank}
        </Text>
      </View>
      <View flex>
        <Text color={isHighlighted ? colors.white : undefined} style={styles.username} numberOfLines={1}>
          {user.name}
        </Text>
      </View>
      <View centerV right row style={styles.scoreContainer}>
        <Image style={styles.icon} source={bananaImage} />
        <Text style={styles.score} color={isHighlighted ? colors.white : colors.primary}>
          {user.bananas.toLocaleString("en")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: baseSpacing * 2,
    marginRight: baseSpacing,
    width: baseSpacing * 2,
  },
  list: {
    backgroundColor: colors.white,
    borderRadius: baseSpacing * 0.5,
    elevation: 3,
    height: "auto",
    marginHorizontal: baseSpacing,
    marginVertical: baseSpacing * 0.5,
    paddingVertical: baseSpacing * 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  listHighlited: {
    backgroundColor: colors.primary,
  },
  rankContainer: {
    width: 50,
  },
  score: {
    fontWeight: "600",
  },
  scoreContainer: {
    paddingRight: baseSpacing,
    width: 90,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default memo(LeaderboardList);
