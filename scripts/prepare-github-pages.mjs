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

const textExtensions = new Set([".css", ".html", ".js", ".json", ".svg", ".xml"]);
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
    const publishedRelativePath = sourceRelativePath.startsWith(`_next${sep}`)
      ? join("assets", sourceRelativePath.slice(`_next${sep}`.length))
      : sourceRelativePath;
    const targetPath = join(targetRoot, publishedRelativePath);

    await mkdir(dirname(targetPath), { recursive: true });

    if (textExtensions.has(extname(entry.name))) {
      const source = await readFile(sourcePath, "utf8");
      const rewritten = source.replaceAll(
        `${publishedBasePath}/_next/`,
        `${publishedBasePath}/assets/`,
      );
      await writeFile(targetPath, rewritten);
    } else {
      await cp(sourcePath, targetPath);
    }

    fileCount += 1;
  }
}

await publishDirectory(sourceRoot);

const homepage = await readFile(join(targetRoot, "index.html"), "utf8");
if (homepage.includes(`${publishedBasePath}/_next/`)) {
  throw new Error("Homepage still contains an unpublished _next asset path.");
}
if (!homepage.includes(`${publishedBasePath}/assets/`)) {
  throw new Error("Homepage does not contain the remapped Pages asset path.");
}

console.log(`Prepared ${fileCount} GitHub Pages files in pages-root/.`);
