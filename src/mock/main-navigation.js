const filterNames = [
  `All`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`,
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export const filmsFiltersMok = () => {
  return generateFilters();
};
