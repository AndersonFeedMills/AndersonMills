/*
LABEL: Anderson Mills Worker Entry Point
FILE ACTION: CREATE
FILE: src/index.js
COMMIT: 03
CONTEXT: Anderson Mills Parallel Cell Build

PURPOSE:
Provide the minimal Cloudflare Worker entry point required by Wrangler.
This file owns no store logic, no cells, no inventory, no products,
no recipes, no suppliers, no customers, no orders, and no payments.

RULE:
One entrance: Cloudflare Worker receives the request.
One exit: Respond with a simple confirmation.
*/

export default {
  async fetch(request) {
    return new Response("Anderson Mills Worker is running.", {
      status: 200,
      headers: { "content-type": "text/plain" }
    });
  }
};
