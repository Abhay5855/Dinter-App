import "./App.css";
import { UserAuthContextProvider } from "./hooks/useAuth";
import {UserMatchContextProvider} from "./hooks/useMatch";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import Modal from "./components/modal/Modal"
import Card from './components/Card'
import DefaultCard from "./components/no-cards/DefaultCard";
import Match from "./components/match/Match";
function App() {
  return (
    <div className="App">
      <UserMatchContextProvider>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<ChatScreen />}></Route>

            <Route path="/home" element={<HomeScreen />}></Route>
            <Route path="/" element={<Login />}></Route>

            <Route path="/card" element={<Card />}></Route>

            
            <Route path="/card" element={<Card />}></Route>


            <Route path="/modal" element={<Modal />}></Route>

            <Route path="/default" element={<DefaultCard/>}></Route>

            <Route path="/Match" element={<Match/>}></Route>

             
            


            

          </Routes>
        </BrowserRouter>

        {/* <Privateroutes />

        <Publicroutes /> */}
      </UserAuthContextProvider>

      </UserMatchContextProvider>
      
    </div>
  );
}

export default App;
