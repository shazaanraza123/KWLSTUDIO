import { readFile } from "fs/promises";
import path from "path";

// Serve the 2000s KWL homepage (public/kwl.html) at "/".
// force-static: the file is read once at build time and served as a static page.
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(path.join(process.cwd(), "public", "kwl.html"), "utf8");
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
