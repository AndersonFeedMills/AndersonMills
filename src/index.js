const SITE_URL = "https://andersonmills.cybercrowd.workers.dev";

const cells = [
  { code: "FEED", name: "Feeds" },
  { code: "COMM", name: "Commodities" },
  { code: "HAY", name: "Hay and Bedding" },
  { code: "LIME", name: "Lime and Soil" },
  { code: "SOAP", name: "Soap and Cleaning" },
  { code: "SHAMP", name: "Shampoo and Animal Care" },
  { code: "LAUN", name: "Laundry" },
  { code: "MISC", name: "Farm Goods" }
];

const recipes = [
  {
    id: "RC-000001",
    name: "Recipe placeholder",
    description: "Add your first recipe here.",
    cell: "FEED"
  }
];

const farmIdeas = [
  {
    id: "FI-000000001",
    title: "Farm idea placeholder",
    description: "Add your first farm idea here.",
    cell: "MISC"
  }
];

function htmlPage(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Andersonmills</title>
  <meta name="description" content="Andersonmills digital farm store and farm idea network.">
  <style>
    body {
      margin: 0;
      background: #f3f0e8;
      color: #24261f;
      font-family: Arial, sans-serif;
    }

    header {
      background: #28452f;
      color: white;
      padding: 24px;
    }

    header h1 {
      margin: 0 0 8px;
    }

    nav a {
      color: white;
      margin-right: 18px;
      text-decoration: none;
      font-weight: bold;
    }

    main {
      max-width: 1100px;
      margin: auto;
      padding: 32px 20px;
    }

    .hero {
      background: white;
      border-radius: 14px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px #0002;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px #0002;
    }

    .card h3 {
      color: #28452f;
    }

    .button {
      display: inline-block;
      background: #c66b2c;
      color: white;
      padding: 12px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin-right: 8px;
    }

    footer {
      padding: 28px;
      text-align: center;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>Andersonmills</h1>
    <p>Digital farm store and farm idea network</p>
    <nav>
      <a href="/">Home</a>
      <a href="/cells">Cells</a>
      <a href="/recipes">Recipes</a>
      <a href="/farm-ideas">Farm Ideas</a>
      <a href="/robots.txt">Robots</a>
      <a href="/sitemap.xml">Sitemap</a>
    </nav>
  </header>

  <main>
    ${body}
  </main>

  <footer>
    Andersonmills | Cybercrowd flat cell build
  </footer>
</body>
</html>`;
}

function homePage() {
  return htmlPage("Home", `
    <section class="hero">
      <h2>Welcome to Andersonmills</h2>
      <p>
        A connected digital farm store for feeds, commodities, hay,
        lime, soap, shampoo, laundry, and more.
      </p>
      <a class="button" href="/cells">View Store Cells</a>
      <a class="button" href="/farm-ideas">Explore Farm Ideas</a>
    </section>

    <section class="hero">
      <h2>Build Status</h2>
      <p>The Cybercrowd connection is live and working.</p>
      <p>Recipes loaded: ${recipes.length}</p>
      <p>Farm ideas loaded: ${farmIdeas.length}</p>
    </section>
  `);
}

function cellsPage() {
  const cards = cells.map(cell => `
    <article class="card">
      <h3>${cell.name}</h3>
      <p>Cell code: ${cell.code}</p>
      <a class="button" href="/cells/${cell.code.toLowerCase()}">Open Cell</a>
    </article>
  `).join("");

  return htmlPage("Cells", `
    <section class="hero">
      <h2>Store Cells</h2>
      <p>Each cell is separate, flat, and connected through the central store.</p>
    </section>
    <section class="grid">${cards}</section>
  `);
}

function recipesPage() {
  const cards = recipes.map(recipe => `
    <article class="card">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <p>Recipe ID: ${recipe.id}</p>
      <p>Cell: ${recipe.cell}</p>
    </article>
  `).join("");

  return htmlPage("Recipes", `
    <section class="hero">
      <h2>Recipe Cartridges</h2>
      <p>This section will hold the 309 recipe cartridges.</p>
    </section>
    <section class="grid">${cards}</section>
  `);
}

function ideasPage() {
  const cards = farmIdeas.map(idea => `
    <article class="card">
      <h3>${idea.title}</h3>
      <p>${idea.description}</p>
      <p>Idea ID: ${idea.id}</p>
      <p>Cell: ${idea.cell}</p>
    </article>
  `).join("");

  return htmlPage("Farm Ideas", `
    <section class="hero">
      <h2>Farm Idea Cartridges</h2>
      <p>This section will hold the farm-idea cartridge system.</p>
    </section>
    <section class="grid">${cards}</section>
  `);
}

function sitemap() {
  const urls = [
    "/",
    "/cells",
    "/recipes",
    "/farm-ideas",
    "/robots.txt",
    "/sitemap.xml"
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}
</urlset>`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (path === "/robots.txt") {
      return new Response(robots(), {
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }

    if (path === "/sitemap.xml") {
      return new Response(sitemap(), {
        headers: { "content-type": "application/xml; charset=UTF-8" }
      });
    }

    if (path === "/") {
      return new Response(homePage(), {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }

    if (path === "/cells") {
      return new Response(cellsPage(), {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }

    if (path === "/recipes") {
      return new Response(recipesPage(), {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }

    if (path === "/farm-ideas") {
      return new Response(ideasPage(), {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }

    return new Response("Page not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
