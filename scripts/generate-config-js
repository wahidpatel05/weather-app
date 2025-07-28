// scripts/generate-config.js
const fs = require("fs");
const path = require("path");

const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("❌ API_KEY not found in environment variables.");
}

const content = `const API_KEY = "${apiKey}";`;

fs.writeFileSync(path.join(__dirname, "../config.js"), content);
console.log("✅ config.js generated with API_KEY.");
