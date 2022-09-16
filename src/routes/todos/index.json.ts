
import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = (request) => {
  return api(request);
}

/*
RequestHandler
teaches TS what is the type of the response

<{}, FormData> 
teachs TS what is the type of the body
*/
export const post: RequestHandler<{}, FormData> = (request) => {
  return api(request, {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  });
}
