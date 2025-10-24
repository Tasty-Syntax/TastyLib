import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

async function stripCommentsAndEmptyLines() {
  const inputPath = "dist/tasty.ts";

  // Read the file
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
  }

  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFile = project.addSourceFileAtPath(inputPath);

  // --- 1️⃣ Remove all JSDoc comments ---
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.JSDoc) {
      node.remove();
    }
  });

  // --- 2️⃣ Remove all regular comments ---
  const printer = project.createWriter();
  sourceFile.transform(traversal => {
    const node = traversal.visitChildren();
    // ts-morph doesn't directly expose a "strip comments" API,
    // but we can reprint the source without comments below.
    return node;
  });

  // --- 3️⃣ Print without comments ---
  let cleaned = sourceFile.getFullText();

  // Remove all block (/* ... */) and line (// ...) comments manually
  cleaned = cleaned
    .replace(/\/\*[\s\S]*?\*\//g, "") // block comments
    .replace(/\/\/[^\n\r]*/g, ""); // line comments

  // Remove empty lines and trim whitespace
  cleaned = cleaned
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.trim() !== "")
    .join("\n");

  // --- 4️⃣ Overwrite the file ---
  fs.writeFileSync(inputPath, cleaned, "utf8");

  console.log(`✅ Stripped comments and empty lines from: ${inputPath}`);
}

stripCommentsAndEmptyLines().catch((err) => {
  console.error(err);
  process.exit(1);
});

