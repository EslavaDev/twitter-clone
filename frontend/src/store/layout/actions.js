export const setUserAnonymous = () => {
  console.log('entre aqui nene')
  return{
  type: '@@LAYOUT/SET_USER_ANONYMOUS',
  payload: false,
}};

export const changeActiveBar = (active) => ({
  type: '@@LAYOUT/ACTIVE_BAR',
  payload: active,
})
export const ChangedSearchInput = (search) => ({
  type: '@@LAYOUT/SEARCH',
  payload: search,
});
