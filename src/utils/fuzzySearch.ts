export const fuzzySearch = (data: User[], query: string) => {
  const result = data
    .map((user) => {
      const nameWords = user.name.toLowerCase().split(/\s+/);
      const matchIndex = nameWords.findIndex((nameWord) => nameWord.startsWith(query.toLowerCase()));
      const matchScore = matchIndex !== -1 ? nameWords.length - matchIndex : 0;

      return { user, matchScore };
    })
    .filter(({ matchScore }) => matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .map(({ user }) => user);

  return result?.[0];
};
