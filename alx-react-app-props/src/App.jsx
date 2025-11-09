// src/App.jsx
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // Import the context

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    // Wrap the ProfilePage with the Provider and provide the value
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
