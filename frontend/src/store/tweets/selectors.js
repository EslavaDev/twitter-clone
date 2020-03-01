export function getInitial(state) {
  return state.tweets;
}
export function getTweetsData(state) {
  return getInitial(state).dataList;
}