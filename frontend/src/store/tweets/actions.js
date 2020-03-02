import faker from 'faker'
import { getUserName, getAvatar } from '../layout/selectors';

export const fetchTweets = (data) => ({
  type: '@@TWEETS/FETCH',
  payload: data,
});

export const sendData = (message) => {
return async (dispatch, getState, { api }) => {
  try{
    console.log(getUserName(getState()))
    let data = {
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