export const TwittearModel = (data: Record<string, any>) => ({
  name: data.name,
  image: data.image,
  likes: { count: 0, users: [] },
  comments: 0,
  reply: 0,
  message: data.message
});
