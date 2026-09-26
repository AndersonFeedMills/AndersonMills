/*
LABEL: Anderson Mills Worker Entry
FILE ACTION: CREATE
FILE: src/index.js
CONTEXT: Anderson Mills R2 Graphics + Static Assets

PURPOSE:
Serve the Anderson Mills R2 graphic at its public route.
All other requests pass to the existing static assets.
*/

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/graphics/gimg_1789946532267_41keb4md.png") {
      const object = await env.FEED_MILL_GRAPHICS.get(
        "gimg_1789946532267_41keb4md.png"
      );

      if (object === null) {
        return new Response("Object Not Found", { status: 404 });
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set("etag", object.httpEtag);
      headers.set("cache-control", "public, max-age=3600");

      return new Response(object.body, { headers });
    }

    return env.ASSETS.fetch(request);
  }
};
