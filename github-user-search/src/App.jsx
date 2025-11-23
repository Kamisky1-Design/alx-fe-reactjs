import Search from "./components/Search";
import "./index.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        GitHub User Search
      </h1>

      <Search />
    </div>
  );
}

export default App;
