import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function searchUsers({ username, location, minRepos }) {
  try {
    // Build search query
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = query ? `${BASE_URL}/search/users?q=${encodeURIComponent(query)}` : `${BASE_URL}/users`;

    const response = await axios.get(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` // optional if using token
      },
    });

    // GitHub Search API returns items array
    return response.data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
