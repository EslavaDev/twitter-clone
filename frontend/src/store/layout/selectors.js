export function getInitial(state) {
  return state.layout;
}
export function getUuid(state) {
  return getInitial(state).uuid;
}
export function getAvatar(state) {
  return getInitial(state).avatar;
}
export function getUserName(state) {
  return getInitial(state).userName;
}
export function getSearch(state) {
  return getInitial(state).search;
}
export function getActiveBar(state) {
  return getInitial(state).activeBar;
}
