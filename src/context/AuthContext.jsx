import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(true);

  const login = (name) => {
    setUsername(name);
    setShowModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        login,
        showModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Error");
  return context;
};
