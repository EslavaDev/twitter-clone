import faker from 'faker'
import { getUserName, getAvatar, getUuid } from '../layout/selectors';

export const fetchTweets = (data) => ({
  type: '@@TWEETS/FETCH',
  payload: data,
});

export const sendData = (message) => {
return async (dispatch, getState, { api }) => {
  try{
    let data = {
      uuid: getUuid(getState()),
      name: getUserName(getState()),
      message,
      image: getAvatar(getState())
    }
    await api.tweetsService.sendTweet({data})
  } catch (error) {
    console.error(error)
  }
}
}