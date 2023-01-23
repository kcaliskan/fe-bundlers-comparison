// import { watch } from "node:fs";
const { watch } = require("node:fs");

watch("pages/index.tsx", (e, filename) => {
  console.log(Date.now(), filename);
});

watch("pages/comp0.tsx", (e, filename) => {
  console.log(Date.now(), filename);
});
