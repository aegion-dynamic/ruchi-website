import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const css = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/index.css"),
  "utf8",
)

/**
 * The recipe strip renders the card set twice in one grid and pans it by
 * translateX(-50% - offset). With a uniform grid gap g, -50% lands half a
 * gap short of the copy boundary, so the extra offset must be exactly g/2
 * for the loop to be seamless (shift = N*(cardWidth + g) = start of copy 2,
 * for any card width N).
 */
test("recipe carousel pan offset is half the grid gap (seamless loop)", () => {
  const gap = /\.recipe-grid\s*\{[^}]*gap:\s*([\d.]+)px/.exec(css)
  const panOffset =
    /@keyframes recipePan\s*\{[^}]*?\}\s*to\s*\{[^}]*translateX\(calc\(-50%\s*-\s*([\d.]+)px\)\)/.exec(
      css,
    )
  assert.ok(gap, "recipe-grid gap not found in src/index.css")
  assert.ok(panOffset, "recipePan keyframe offset not found in src/index.css")
  assert.equal(
    Number(panOffset![1]) * 2,
    Number(gap![1]),
    "pan offset must be half the grid gap",
  )
})