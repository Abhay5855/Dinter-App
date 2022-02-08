import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import Privateroutes from "./components/routes/Privateroutes";
import Publicroutes from "./components/routes/Publicroutes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Privateroutes />

        <Publicroutes />
      </AuthProvider>
    </div>
  );
}

export default App;
