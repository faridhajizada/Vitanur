import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { HomePage } from "./pages/HomePage";
import { UsernameModal } from "./components/UsernameModal/ UsernameModal";
import { useAuth } from "./context/AuthContext";
import "./styles/global.css";

const AppContent = () => {
  const { showModal } = useAuth();

  return (
    <>
      <HomePage />
      {showModal && <UsernameModal />}
    </>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </AuthProvider>
  );
};
export default App;