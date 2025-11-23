export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  return data.items || [];
}
