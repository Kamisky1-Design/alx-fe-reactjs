import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} width="100" />
        </div>
      )}
    </div>
  );
}

export default Search;
