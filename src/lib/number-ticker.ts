/**
 * Pure math for the NumberTicker. Kept in its own module so the easing
 * contract (start -> end, monotonic, integer) is unit-testable.
 */

export function easeOutExpo(progress: number): number {
  return 1 - Math.pow(2, -10 * progress)
}

export function tickValue(
  from: number,
  to: number,
  progress: number,
): number {
  return Math.round(from + (to - from) * easeOutExpo(progress))
}