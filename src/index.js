export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          ok: true,
          app: "Andersonmills",
          message: "Cloudflare Worker is connected.",
          timestamp: new Date().toISOString()
        }),
        {
          headers: {
            "content-type": "application/json;charset=UTF-8"
          }
        }
      );
    }

    return new Response("Not found", { status: 404 });
  }
};
