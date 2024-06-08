export const sortUserData = (data: User[], sortBy: SortBy, orderBy: OrderBy) => {
  let sortedData = [];
  if (sortBy === "name") {
    sortedData = [...data].sort((a, b) => {
      // push out empty name at bottom of list
      if (!a.name) return 1;
      if (!b.name) return -1;
      let comparison = 0;
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      }
      return orderBy === "desc" ? comparison * -1 : comparison;
    });
  } else {
    sortedData = [...data].sort((a, b) => {
      if (orderBy === "asc") {
        return (a?.rank || 0) - (b?.rank || 0);
      } else {
        return (b?.rank || 0) - (a?.rank || 0);
      }
    });
  }

  return sortedData;
};
