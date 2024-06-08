import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Text, View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome";

import { baseSpacing, colors } from "@styles/stylesConstant";

const sortOptions: DropdownOption<SortBy>[] = [
  { label: "Rank", value: "score" },
  { label: "Name", value: "name" },
];

const orderOptions: DropdownOption<OrderBy>[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

interface SortBarProps {
  sortBy: SortBy;
  orderBy: OrderBy;
  onSelectSort: (value: SortBy) => void;
  onSelectOrder: (value: OrderBy) => void;
}

export const SortBar = ({ onSelectSort, onSelectOrder }: SortBarProps) => {
  const handleSort = (item: DropdownOption<SortBy>) => {
    onSelectSort(item.value);
  };

  const handleOrder = (item: DropdownOption<OrderBy>) => {
    onSelectOrder(item.value);
  };

  return (
    <View row centerV paddingV-8 paddingH-16 backgroundColor={colors.white} style={styles.container}>
      <View row centerV flex paddingR-8>
        <Text marginR-8>Sort by</Text>
        <SelectDropdown
          data={sortOptions}
          defaultValue={sortOptions[0]}
          onSelect={handleSort}
          renderButton={(item: DropdownOption<SortBy>, isOpened: boolean) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {item ? <Text>{item.label}</Text> : <Text>Sort By</Text>}
                <Icon name={isOpened ? "caret-up" : "caret-down"} />
              </View>
            );
          }}
          renderItem={(item: DropdownOption<SortBy>) => {
            return (
              <View style={styles.dropdownList}>
                <Text>{item.label}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenu}
        />
      </View>
      <View row centerV flex>
        <Text marginR-8>Order</Text>
        <SelectDropdown
          data={orderOptions}
          defaultValue={orderOptions[0]}
          onSelect={handleOrder}
          renderButton={(item: DropdownOption<OrderBy>, isOpened: boolean) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {item ? <Text>{item.label}</Text> : <Text>Sort By</Text>}
                <Icon name={isOpened ? "caret-up" : "caret-down"} />
              </View>
            );
          }}
          renderItem={(item: DropdownOption<OrderBy>) => {
            return (
              <View style={styles.dropdownList}>
                <Text>{item.label}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenu}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.backgroundNeutral,
    borderBottomWidth: 1,
  },
  dropdownButtonStyle: {
    alignItems: "center",
    backgroundColor: colors.backgroundNeutral,
    borderRadius: baseSpacing,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: baseSpacing * 2,
    paddingVertical: baseSpacing * 0.5,
  },
  dropdownList: {
    paddingBottom: baseSpacing * 1.5,
    paddingHorizontal: baseSpacing,
  },
  dropdownMenu: {
    borderRadius: baseSpacing,
    borderWidth: 0,
    paddingTop: baseSpacing * 1.5,
  },
});
