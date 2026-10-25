import assert from "node:assert/strict";
import { test } from "node:test";

import { CV_BASENAME, resolveRedirect } from "../src/redirects.js";

test("short links point to the current CV", () => {
  assert.deepEqual(resolveRedirect("/cv"), { location: `/${CV_BASENAME}.pdf`, status: 302 });
  assert.deepEqual(resolveRedirect("/cv/"), { location: `/${CV_BASENAME}.pdf`, status: 302 });
  assert.deepEqual(resolveRedirect("/cv.pdf"), { location: `/${CV_BASENAME}.pdf`, status: 302 });
  assert.deepEqual(resolveRedirect("/cv.docx"), { location: `/${CV_BASENAME}.docx`, status: 302 });
  assert.deepEqual(resolveRedirect("/cv.md"), { location: `/${CV_BASENAME}.md`, status: 302 });
});

test("legacy file names redirect permanently", () => {
  const legacy = "/Senior%20Go%20Developer%20-%20Ivan%20Korotkov.pdf";
  assert.deepEqual(resolveRedirect(legacy), { location: `/${CV_BASENAME}.pdf`, status: 301 });
});

test("other paths pass through", () => {
  assert.equal(resolveRedirect("/"), null);
  assert.equal(resolveRedirect(`/${CV_BASENAME}.pdf`), null);
  assert.equal(resolveRedirect("/cv.exe"), null);
  assert.equal(resolveRedirect("/%E0%A4%A"), null);
});
