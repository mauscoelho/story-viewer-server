import { Context } from "../utils";
import { getViewers } from "../handlers/getViewers";

export const Query = {
  viewers(parent, { input }, ctx: Context, info) {
    return getViewers(input.username, input.password);
  }
};
