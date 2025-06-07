import { API_DOMAIN } from "../constants/config";

export async function customFetch(endpoint: string) {
    try {
      const res = await fetch(`${API_DOMAIN}${endpoint}`);
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
  