import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";

const projectRoot = resolve(process.cwd());
const sourceRoot = resolve(projectRoot, "out");
const targetRoot = resolve(projectRoot, "pages-root");
const publishedBasePath = "/Budget-Roofing";

if (!targetRoot.startsWith(`${projectRoot}${sep}`)) {
  throw new Error("Refusing to prepare Pages output outside the project.");
}

await stat(sourceRoot);
await rm(targetRoot, { recursive: true, force: true });

let fileCount = 0;

async function publishDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const sourcePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await publishDirectory(sourcePath);
      continue;
    }

    if (extname(entry.name) === ".txt") continue;

    const sourceRelativePath = relative(sourceRoot, sourcePath);
    const targetPath = join(targetRoot, sourceRelativePath);

    await mkdir(dirname(targetPath), { recursive: true });
    await cp(sourcePath, targetPath);

    fileCount += 1;
  }
}

await publishDirectory(sourceRoot);
await writeFile(join(targetRoot, "_config.yml"), "include:\n  - _next\n");
fileCount += 1;

const homepage = await readFile(join(targetRoot, "index.html"), "utf8");
if (!homepage.includes(`${publishedBasePath}/_next/`)) {
  throw new Error("Homepage does not contain the expected Next.js asset path.");
}

console.log(`Prepared ${fileCount} GitHub Pages files in pages-root/.`);
