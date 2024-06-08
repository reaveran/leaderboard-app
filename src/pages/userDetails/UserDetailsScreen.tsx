import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Image, Text, TouchableOpacity, View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome";

import bananaImage from "@assets/icons/banana.png";
import { commonStyles } from "@styles/commonStyles";
import { baseSpacing, colors } from "@styles/stylesConstant";
import { useNavigation, useRoute } from "@hooks/useNavigation";

export const UserDetailsScreen: Navigation.Screen<"UserDetailsScreen"> = () => {
  const { user } = useRoute<"UserDetailsScreen">().params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <View paddingH-16 marginB-16 style={commonStyles.alignSelfStart}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <View paddingH-16>
        <Text center marginB-16 text50BO color={colors.primaryDarker}>
          {user.name}
        </Text>
        <View style={styles.centerContainer}>
          <View row center padding-8 style={styles.bananaContainer}>
            <Image style={styles.icon} source={bananaImage} />
            <Text text90BL color={colors.secondary}>
              {user.bananas.toLocaleString("en")}
            </Text>
          </View>
        </View>
        <Card padding-16 marginT-24>
          <View marginB-8 row>
            <Text flex>Stars</Text>
            <Text flex>: {user.stars.toLocaleString("en")}</Text>
          </View>
          <View marginB-8 row>
            <Text flex>Longest streak</Text>
            <Text flex>: {user.longestStreak}</Text>
          </View>
          <View row>
            <Text flex>Last played</Text>
            <Text flex>: {user.lastDayPlayed}</Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bananaContainer: {
    backgroundColor: colors.primaryDarker,
    borderColor: colors.secondary,
    borderRadius: baseSpacing,
    // borderWidth: 1,
    paddingHorizontal: 16,
  },
  centerContainer: {
    alignItems: "center",
  },
  icon: {
    height: 24,
    marginRight: baseSpacing,
    width: 24,
  },
});
