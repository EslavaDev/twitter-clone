export const TwittearModel = (data: Record<string, any>) => ({
  name: data.name,
  user: data.uuid,
  image: data.image,
  likes: { count: 0, users: [] },
  comments: 0,
  reply: 0,
  message: data.message
});
