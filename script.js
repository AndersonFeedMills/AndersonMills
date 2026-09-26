// LABEL: ANDERSON MILLS — DOOR ENTRY
// FILE ACTION: CREATE
// FILE: script.js
// COMMIT: ORIGINAL CREATION
// CONTEXT: Physical storefront door is the single entrance.

document.querySelector(".storefront-door")?.addEventListener("click", () => {
  window.location.href = "/mill/";
});
