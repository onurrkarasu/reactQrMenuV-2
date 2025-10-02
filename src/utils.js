export function getTableFromURL() {
  const u = new URL(window.location.href);
  return u.searchParams.get("t") || "T1";
}
