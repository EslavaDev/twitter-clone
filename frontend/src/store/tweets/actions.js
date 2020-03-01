export const fetchTweets = (data) => ({
  type: '@@TWEETS/FETCH',
  payload: data,
});

export const sendData = (message) => {
return async (dispatch, getState, { api }) => {
  try{
    console.log(message)
    let data = {
      name: 'annonimuys',
      message,
      image: 'no hay'
    }
    await api.tweetsService.sendTweet({data})
  } catch (error) {
    console.error(error)
  }
}
}