import "./App.css";
import { UserAuthContextProvider } from "./hooks/useAuth";
import Privateroutes from "./components/routes/Privateroutes";
import Publicroutes from "./components/routes/Publicroutes";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Privateroutes />

        <Publicroutes />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
