const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';

export async function fetchPackages(category) {
  const url = category
    ? `${API_BASE}/tour-packages/category/${category}`
    : `${API_BASE}/tour-packages`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch packages');
  const json = await res.json();
  return json.data;
}

export async function fetchResorts(page = 1, limit = 12, search = '') {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (search) params.set('search', search);

  const res = await fetch(`${API_BASE}/resorts?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch resorts');
  const json = await res.json();
  return json; // { success, data, pagination }
}
