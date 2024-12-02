export function getAuthToken() {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
}
