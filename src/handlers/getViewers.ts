import * as Instagram from "instagram-private-api";

export const getViewers = async (username: string, password: string) => {
  const device = new Instagram.V1.Device(username);
  const storage = new Instagram.V1.CookieMemoryStorage();
  const session = await Instagram.V1.Session.create(
    device,
    storage,
    username,
    password
  );

  const me = await session.getAccountId();

  const myStories = await new Instagram.V1.Feed.UserStory(session, [me]).get();

  const storyId = myStories[0]._params.items[0].id;

  const storyViewers = await new Instagram.V1.Feed.StoryViewers(
    session,
    storyId
  );

  let viewers = await storyViewers.all();

  viewers = viewers.map(viewer => ({
    id: viewer._params.id,
    username: viewer._params.username
  }));

  return viewers;
};
