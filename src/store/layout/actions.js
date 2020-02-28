import { logSearchInputData } from '~/@shared/analytics/navbar';

export const changeAppBar = (flag) => ({
  type: '@@LAYOUT/DRAWER_SIDEBAR',
  payload: flag,
});

export const changeDrawerSidebar = (flag) => ({
  type: '@@LAYOUT/DRAWER_SIDEBAR',
  payload: flag,
});

export const changeCartSidebar = (flag) => ({
  type: '@@LAYOUT/CART_SIDEBAR',
  payload: flag,
});

export const ChangedSearchInput = (search) => ({
  ...logSearchInputData(search),
  type: '@@LAYOUT/SEARCH',
  payload: search,
});
