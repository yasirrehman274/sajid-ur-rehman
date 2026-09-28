import fs from "node:fs";
import path from "node:path";

/**
 * Locates the optional profile photograph inside /public/images.
 *
 * The photograph is genuinely optional: no image ships with the project, and no
 * stock portrait of a real person is ever substituted. If a file is added at
 * `public/images/profile.jpg` (or one of the other supported extensions) it is
 * picked up automatically at build time; otherwise callers render a neutral
 * placeholder frame.
 */

const IMAGE_DIR = path.join(process.cwd(), "public", "images");

/** Supported filenames, checked in priority order. */
const CANDIDATES = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp"];

export function resolveProfileImage(): string | null {
  for (const name of CANDIDATES) {
    // `turbopackIgnore` opts out of whole-project tracing: only these four
    // specific paths are ever probed, and only during the server build.
    if (fs.existsSync(/* turbopackIgnore: true */ path.join(IMAGE_DIR, name))) {
      return `/images/${name}`;
    }
  }
  return null;
}
