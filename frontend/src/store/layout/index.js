import faker from 'faker'
import initialState from './init-state';

export function layoutReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case '@@LAYOUT/SET_USER_ANONYMOUS': {
      console.log('entre')
      return {
        ...state,
        userName: faker.name.findName(),
        avatar: faker.image.avatar()
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
