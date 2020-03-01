import initialState from './init-state';

export function layoutReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case '@@LAYOUT/DRAWER_SIDEBAR': {
      return {
        ...state,
        drawerSidebar: action.payload,
      };
    }
    case '@@LAYOUT/CART_SIDEBAR': {
      return {
        ...state,
        cartSidebar: action.payload,
      };
    }
    case '@@LAYOUT/APP_BAR': {
      return {
        ...state,
        appBar: action.payload,
      };
    }
    case '@@LAYOUT/SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
    case '@@LAYOUT/ACTIVE_BAR': {
      return {
        ...state,
        activeBar: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
