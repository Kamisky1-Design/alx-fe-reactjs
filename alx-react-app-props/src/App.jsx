import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext"; // default export

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />  {/* This must render UserProfile */}
    </UserContext.Provider>
  );
}

export default App;
