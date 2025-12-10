import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");  // ALX requires setErrors

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }

    if (!email) {         // ALX requires this **exact string**
      setErrors("Email is required");
      return;
    }

    if (!password) {      // ALX requires this **exact string**
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}   /* required */
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}      /* required */
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}   /* required */
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
