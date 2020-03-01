import initialState from './init-state';

export function tweetsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case '@@TWEETS/FETCH': {
      const dataList = [];
      Object.keys(action.payload).map(dataItem => {
        dataList.push({uid: dataItem, ...action.payload[dataItem]})
      })
      console.log(dataList)
      return {
        ...state,
        dataList,
        dataMap: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
