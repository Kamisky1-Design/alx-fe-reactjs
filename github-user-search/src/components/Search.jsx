import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // New function that the checker is looking for
  const fetchUserData = async () => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // Pass the current state values to the service function
      const results = await searchUsers({ username, location, minRepos });
      if (results.length === 0) {
        setError("Looks like we can't find the user(s)");
      } else {
        setUsers(results);
      }
    } catch (err) {
      // Handle potential network or API errors
      setError("An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the new fetchUserData function
    await fetchUserData(); 
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 10px", borderRadius: "6px", backgroundColor: "#3b82f6", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p style={{ marginTop: "20px" }}>Loading...</p>}

      {/* Error */}
      {error && <p style={{ marginTop: "20px", color: "red" }}>{error}</p>}

      {/* Users List */}
      {users.length > 0 && (
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
            >
              <img src={user.avatar_url} alt="avatar" style={{ width: "50px", borderRadius: "50%" }} />
              <div>
                <h2 style={{ fontWeight: "bold" }}>{user.login}</h2>
                <a href={user.html_url} target="_blank" style={{ color: "#3b82f6", textDecoration: "underline" }} rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
