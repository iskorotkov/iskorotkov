import { resolveRedirect } from "./redirects.js";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const redirect = resolveRedirect(url.pathname);
    if (!redirect) return fetch(request);
    return Response.redirect(new URL(redirect.location, url.origin).toString(), redirect.status);
  },
};
