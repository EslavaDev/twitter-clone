export const setUserAnonymous = (name) => {
  return{
  type: '@@LAYOUT/SET_USER_ANONYMOUS',
  payload: name,
}};

export const changeActiveBar = (active) => ({
  type: '@@LAYOUT/ACTIVE_BAR',
  payload: active,
})
export const ChangedSearchInput = (search) => ({
  type: '@@LAYOUT/SEARCH',
  payload: search,
});
