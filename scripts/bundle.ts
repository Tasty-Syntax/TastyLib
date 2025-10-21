import { Project, SyntaxKind } from "ts-morph";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";

async function bundle() {
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
  });

  const srcDir = "src";
  const outFile = "dist/bundle.ts";
  const namespaceName = "tasty"; // <-- Change your namespace here

  // Ensure output directory exists
  const outDir = dirname(outFile);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  // Add all .ts files from src (excluding .portal)
  project.addSourceFilesAtPaths(`${srcDir}/**/*.ts`);

  const outputParts: string[] = [];

  for (const sourceFile of project.getSourceFiles()) {
    // Skip any accidental inclusion of .portal files
    if (sourceFile.getFilePath().includes(".portal")) continue;

    // Remove import/export declarations to make code self-contained
    sourceFile.getImportDeclarations().forEach(d => d.remove());
    sourceFile.getExportAssignments().forEach(d => d.remove());
    sourceFile.getExportDeclarations().forEach(d => d.remove());

    outputParts.push(sourceFile.getFullText().trim());
  }

  // Wrap everything in a namespace
  const wrappedCode = `namespace ${namespaceName} {\n${outputParts
    .map(line => line.split("\n").map(l => "  " + l).join("\n"))
    .join("\n\n")}\n}\n`;

  writeFileSync(outFile, wrappedCode);
  console.log(`✅ Bundle created at: ${outFile} inside namespace ${namespaceName}`);
}

bundle().catch(err => {
  console.error("❌ Bundle failed:", err);
  process.exit(1);
});

