import React, { useState, createContext, useContext } from "react";

// Create AuthContext with default values
const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    // Provide the context values to the entire component tree
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      <Navbar />
      <button onClick={() => login({ name: "John Doe" })}>Login</button>
      <button onClick={logout}>Logout</button>
    </AuthContext.Provider>
  );
};

// Navbar component to consume context and display user info
const Navbar = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>{user ? user.name : "Guest"}</li>
        <li>{isAuthenticated ? "Logged In" : "Logged Out"}</li>
      </ul>
    </nav>
  );
};

export default App;
