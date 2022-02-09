import "./App.css";
import { UserAuthContextProvider } from "./hooks/useAuth";
import Privateroutes from "./components/routes/Privateroutes";
import Publicroutes from "./components/routes/Publicroutes";import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<ChatScreen />}></Route>

            <Route path="/home" element={<HomeScreen />}></Route>
            <Route path="/" element={<Login />}></Route>

            <Route path="/card" element={<Card />}></Route>

          </Routes>
        </BrowserRouter>

        {/* <Privateroutes />

        <Publicroutes /> */}
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
