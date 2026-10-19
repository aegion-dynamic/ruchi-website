import { test } from "node:test"
import assert from "node:assert/strict"
import { easeOutExpo, tickValue } from "../src/lib/number-ticker.ts"

test("easeOutExpo starts at 0, ends at ~1, strictly increasing", () => {
  assert.equal(easeOutExpo(0), 0)
  assert.equal(easeOutExpo(1), 1 - 1 / 1024) // 2^-10
  let last = 0
  for (let i = 1; i <= 100; i++) {
    const v = easeOutExpo(i / 100)
    assert.ok(v > last, `not strictly increasing at ${i}/100`)
    last = v
  }
})

test("tickValue animates from -> to monotonically and lands exactly", () => {
  const from = 15
  const to = 12
  assert.equal(tickValue(from, to, 0), from)
  assert.equal(tickValue(from, to, 1), to)
  let last = tickValue(from, to, 0)
  for (let i = 1; i <= 20; i++) {
    const v = tickValue(from, to, i / 20)
    assert.ok(Number.isInteger(v), `non-integer at ${i}/20`)
    assert.ok(v <= last, `non-decreasing at ${i}/20`)
    last = v
  }
})

test("tickValue counts up when the target is higher", () => {
  const from = 12
  const to = 15
  let last = tickValue(from, to, 0)
  for (let i = 1; i <= 20; i++) {
    const v = tickValue(from, to, i / 20)
    assert.ok(v >= last, `non-increasing at ${i}/20`)
    last = v
  }
  assert.equal(last, to)
})