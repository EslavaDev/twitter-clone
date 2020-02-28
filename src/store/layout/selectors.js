export function getInitial(state) {
  return state.layout;
}
export function getAppBar(state) {
  return getInitial(state).appBar;
}
export function getDrawerSidebar(state) {
  return getInitial(state).drawerSidebar;
}
export function getCartSidebar(state) {
  return getInitial(state).cartSidebar;
}
export function getSearch(state) {
  return getInitial(state).search;
}
