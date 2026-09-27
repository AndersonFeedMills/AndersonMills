/**
 * File repo: AndersonFeedMills/AndersonMills
 * File name: src/index.js
 * Movements: Add private R2 storefront delivery; detect mobile devices;
 * serve AndersonMills-mobile-storefront.png to mobile requests and
 * gimg_1789946532267_41keb4md.png to desktop requests; preserve the
 * existing ASSETS fallback.
 *
 * Purpose:
 * Serve Anderson Mills storefront artwork from private R2 storage,
 * selecting the mobile or desktop storefront for the requesting device.
 *
 * Does NOT:
 * Change the Anderson Mills page structure.
 * Change /mill/ or any recipe, animal, forum, marketplace, or service page.
 * Create additional files.
 * Modify the storefront artwork.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/graphics/gimg_1789946532267_41keb4md.png") {
      const userAgent = request.headers.get("user-agent") || "";

      const isMobile =
        /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(userAgent);

      const objectKey = isMobile
        ? "AndersonMills-mobile-storefront.png"
        : "gimg_1789946532267_41keb4md.png";

      const object = await env.FEED_MILL_GRAPHICS.get(objectKey);

      if (object === null) {
        return new Response("Storefront image not found", {
          status: 404
        });
      }

      const headers = new Headers();

      object.writeHttpMetadata(headers);
      headers.set("etag", object.httpEtag);
      headers.set("cache-control", "public, max-age=3600");
      headers.set("vary", "User-Agent");

      return new Response(object.body, {
        status: 200,
        headers
      });
    }

    return env.ASSETS.fetch(request);
  }
};
