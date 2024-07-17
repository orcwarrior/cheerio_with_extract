const pkg = require("../package.json");
const {writeFileSync} = require("node:fs");
const path = require("node:path");

writeFileSync(path.resolve("./lib/cjs/package.json"), JSON.stringify({ ...pkg, type: "commonjs" }, null, 2));
writeFileSync(path.resolve("./lib/esm/package.json"), JSON.stringify({ ...pkg, type: "module" }, null, 2));