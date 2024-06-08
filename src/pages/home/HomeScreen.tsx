import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import BackToTopButton from "@components/BackToTopButton";
import { commonStyles } from "@styles/commonStyles";
import { fetchData, searchUser, sortData } from "@store/leaderboard/actions";
import { setError, setSearchResult } from "@store/leaderboard/mutations";
import {
  errorLeaderboardSelector,
  isLeaderboardLoadingSelector,
  leaderboardListSelector,
  searchedUserSelector,
  searchListSelector,
} from "@store/leaderboard/selectors";
import { useNavigation } from "@hooks/useNavigation";

import { ErrorMessage } from "./components/ErrorMessage";
import LeaderboardList from "./components/LeaderboardList";
import { LeaderboardLoader } from "./components/LeaderboardLoader";
import { SearchBar } from "./components/SearchBar";
import { SortBar } from "./components/SortBar";

export const HomeScreen: Navigation.Screen<"HomeScreen"> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [orderBy, setOrderBy] = useState<OrderBy>("asc");
  const [sortBy, setSortBy] = useState<SortBy>("score");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isBackButtonVisible, setIsBackButtonVisible] = useState<boolean>(false);

  const leaderboardData = useSelector(leaderboardListSelector);
  const searchData = useSelector(searchListSelector);
  const isLoading = useSelector(isLeaderboardLoadingSelector);
  const error = useSelector(errorLeaderboardSelector);
  const searchedUser = useSelector(searchedUserSelector);

  const flatListRef = useRef<FlatList<User>>(null);

  const data = isSearching ? searchData : leaderboardData;

  useEffect(() => {
    // @ts-expect-error because of deprecated createStore on redux and redux thunk middleware
    dispatch(fetchData());
  }, [dispatch]);

  const onSearch = (text: string) => {
    dispatch(setError(undefined));
    if (text === "") {
      setIsSearching(false);
      dispatch(setSearchResult([], undefined));
    } else {
      setIsSearching(true);
      // @ts-expect-error because of deprecated createStore on redux and redux thunk middleware
      dispatch(searchUser(text, sortBy, orderBy));
    }
  };

  const onSelectOrder = (value: OrderBy) => {
    // @ts-expect-error because of deprecated createStore on redux and redux thunk middleware
    dispatch(sortData(sortBy, value, isSearching));
    setOrderBy(value);
  };

  const onSelectSort = (value: SortBy) => {
    // @ts-expect-error because of deprecated createStore on redux and redux thunk middleware
    dispatch(sortData(value, orderBy, isSearching));
    setSortBy(value);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsBackButtonVisible(offsetY > 0);
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const navigateToUserDetails = useCallback(
    (user: User) => {
      return navigation.navigate("UserDetailsScreen", { user });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: User }) => {
      return (
        <LeaderboardList
          onPress={() => navigateToUserDetails(item)}
          user={item}
          isHighlighted={item.uid === searchedUser?.uid}
        />
      );
    },
    [navigateToUserDetails, searchedUser?.uid]
  );

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <View>
        <SearchBar onSearch={onSearch} isLoading={isLoading} />
        <SortBar orderBy={orderBy} sortBy={sortBy} onSelectOrder={onSelectOrder} onSelectSort={onSelectSort} />
      </View>
      {isLoading ? (
        <LeaderboardLoader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <React.Fragment>
          <FlatList
            ref={flatListRef}
            contentContainerStyle={commonStyles.flatListContainer}
            initialNumToRender={20}
            keyExtractor={(item) => item.uid}
            data={data}
            onScroll={handleScroll}
            renderItem={renderItem}
          />
          <BackToTopButton isVisible={isBackButtonVisible} onPress={scrollToTop} />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};
