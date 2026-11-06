import { copyFile, mkdir } from "node:fs/promises";

await mkdir("www", { recursive: true });
await copyFile("index.html", "www/index.html");