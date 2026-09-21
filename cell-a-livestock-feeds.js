/*
LABEL: Anderson Mills Cell A — Livestock Feeds Boundary
FILE ACTION: CREATE
FILE: cell-a-livestock-feeds.js
COMMIT: 02
CONTEXT: Anderson Mills Feedstore Inventory & Retail Cell Architecture

PURPOSE:
Establish Cell A as an independent livestock-feeds cell.

CELL:
Livestock Feeds & Nutrition

BOUNDARY:
This file identifies Cell A and the inventory classes belonging
to its boundary.

RULE:
Cell A remains independent.
It does not contain Cell B, C, D, E, or F.
It does not implement POS, receiving, inventory storage,
checkout, reports, reorder, suppliers, customers, or payments.

The central connection remains the connection point between cells.

One rock.
One object.
One movement.
One function.
One entrance.
One exit.
One actual end.
*/

const AndersonMillsCellALivestockFeeds = {

  cellId: "AM-CELL-A",

  name: "Livestock Feeds & Nutrition",

  status: "ready",

  categories: [
    "bagged-feed",
    "mineral-troughs",
    "supplements",
    "milk-replacers"
  ],

  inventoryClass: "perishable-high-turnover",

  rotation: "FIFO"

};

export default AndersonMillsCellALivestockFeeds;
