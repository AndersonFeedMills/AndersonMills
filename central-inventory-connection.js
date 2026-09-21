/*
LABEL: Anderson Mills Central Inventory Connection
FILE ACTION: CREATE 
FILE: central-inventory-connection.js
CONTEXT: Central connection for the Anderson Mills Tomato/Parallel Cell build

PURPOSE:
One shared connection for Receiving, Inventory, POS/Checkout,
Reports, and Reorder.

Product cells connect to this backbone.
The backbone does not absorb or duplicate the cells.
*/

const AndersonMillsInventoryConnection = {

  name: "Anderson Mills Central Inventory Connection",

  status: "ready",

  departments: [
    "feeds",
    "commodities",
    "hay-bedding",
    "lime-soil",
    "soap-shampoo-laundry",
    "hardware-misc"
  ],

  productMaster: {
    productId: "",
    sku: "",
    productName: "",
    department: "",
    supplier: "",

    cost: 0,
    salePrice: 0,

    unitOfMeasure: "",

    currentQuantity: 0,
    reorderLevel: 0,

    storageLocation: "",

    taxStatus: "",
    active: true
  },

  receiving: {
    enabled: true
  },

  inventory: {
    enabled: true
  },

  pos: {
    enabled: true
  },

  reports: {
    enabled: true
  },

  reorder: {
    enabled: true
  },

  connection: {
    receiving: "inventory",
    inventory: "pos",
    pos: "reports",
    reports: "reorder"
  }

};

export default AndersonMillsInventoryConnection;
