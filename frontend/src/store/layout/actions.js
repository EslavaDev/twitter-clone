export const changeAppBar = (flag) => ({
  type: '@@LAYOUT/DRAWER_SIDEBAR',
  payload: flag,
});

export const changeActiveBar = (active) => ({
  type: '@@LAYOUT/ACTIVE_BAR',
  payload: active,
})
export const ChangedSearchInput = (search) => ({
  type: '@@LAYOUT/SEARCH',
  payload: search,
});
