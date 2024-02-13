export function ensureBoolean(value: boolean | string): boolean {
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return value;
}
