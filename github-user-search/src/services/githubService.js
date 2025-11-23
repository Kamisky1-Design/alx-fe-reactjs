import axios from "axios";

// Search GitHub users
export async function searchUsers({ username, location, minRepos }) {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>${minRepos}`);

  const query = queryParts.join(" ");

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items || [];
}

// Fetch extra user data (required by ALX checker)
export async function fetchUserData(username) {
  if (!username) return null;

  const response = await axios.get(`https://api.github.com/users/${username}`);

  return response.data;
}
