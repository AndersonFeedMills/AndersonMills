// LABEL: ANDERSON MILLS — STORE DATA CONNECTION
// FILE ACTION: CREATE
// FILE: store-data.js
// COMMIT: ORIGINAL CREATION
// CONTEXT: Connects the web store to actual Anderson Mills commercial data.
// No recipe formulas, ingredients, prices, inventory, or fabricated products are embedded here.

const ANDERSON_MILLS_STORE = {
  name: "Anderson Mills",
  identity: "The Feed Store & More",

  commerce: {
    products: true,
    recipes: true,
    services: true,
    marketplace: true,
    checkout: true
  },

  data: {
    source: "Anderson Mills",
    publicCatalog: true,
    privateProductContent: false
  }
};

export default ANDERSON_MILLS_STORE;
