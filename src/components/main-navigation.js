const createMainNavigationMarkup = (filter, active) => {
  const{name, count} = filter;
  return `<a href="#${name.toLowerCase()}" class="main-navigation__item ${ active ? `main-navigation__item--active`: ``}">
  ${name == `All` ? `All movies` : name}  ${ name == `All` ? `` : `<span class="main-navigation__item-count"> ${count} </span>`}</a>`
}
export const createMainNavigationTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createMainNavigationMarkup(it, i === 0)).join(`\n`);
  return (
    `<nav class="main-navigation">
      ${filtersMarkup}
    </nav>`
  );
};
