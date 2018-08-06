import { Context } from "../utils";
import getAllViewers from "../handlers/getAllViewers";

export const Query = {
  viewers(parent, { input }, ctx: Context, info) {
    return getAllViewers(input.username, input.password, input.storyIndex);
  }
};
