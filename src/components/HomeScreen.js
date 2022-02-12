
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useAuth";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Card from "./Card";
import "./home.css";


const HomeScreen = () => {
  const {user } = useUserAuth();

  // const navigate = useNavigate();

  // const logout = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await googleSignout();s
  //     navigate("/");
  //     console.log("logout successful");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //tinder cards
  
  

  

  return (
    <div className="home__container">
      <nav>
        <div className="home__avatar">
          <img src={user.photoURL} alt="avatar" />
        </div>
        <div className="home__logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
            alt="logo"
          />
        </div>
        <div className="home__chat">
          <ChatBubbleIcon className="chat__icon" />
        </div>
      </nav>
   


      <Card />
    </div>
  );
};

export default HomeScreen;
