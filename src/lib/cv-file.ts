import fs from "node:fs";
import path from "node:path";

/**
 * Resolves the downloadable CV at build time.
 *
 * `site.cvFileName` is the single source of truth for the filename; this helper
 * only confirms the file is really on disk so the page never renders a dead
 * download link. No placeholder PDF is ever generated.
 */

const FILE_NAME = "sajid-ur-rehman-cv.pdf";
const FILE_PATH = path.join(process.cwd(), "public", "cv", FILE_NAME);
const HREF = `/cv/${FILE_NAME}`;

export function resolveCvFile(): { href: string; fileName: string } | null {
  return fs.existsSync(/* turbopackIgnore: true */ FILE_PATH)
    ? { href: HREF, fileName: FILE_NAME }
    : null;
}
