// Change this one line when the job title changes, then rename the CV files to match.
export const CV_BASENAME = "Ivan-Korotkov-Lead-Go-Developer";

const SHORT_LINKS = {
  "/cv": "pdf",
  "/cv/": "pdf",
  "/cv.pdf": "pdf",
  "/cv.docx": "docx",
  "/cv.md": "md",
};

// Old CV file names that may still be linked from sent applications.
const LEGACY_FILES = {
  "/Senior Go Developer - Ivan Korotkov.pdf": "pdf",
};

const cvPath = (extension) => `/${CV_BASENAME}.${extension}`;

function decodePath(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

// Short links use 302 because their target changes with the title; legacy files move for good.
export function resolveRedirect(pathname) {
  const path = decodePath(pathname);
  if (path in SHORT_LINKS) return { location: cvPath(SHORT_LINKS[path]), status: 302 };
  if (path in LEGACY_FILES) return { location: cvPath(LEGACY_FILES[path]), status: 301 };
  return null;
}
