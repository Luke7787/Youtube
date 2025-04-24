import { MdHome, MdSubscriptions, MdMusicNote, MdOutlineVideoLibrary } from "react-icons/md";
import logo from './images/logo.png';
import menu from './images/menu.png';
import './App.css';


function App() {
  return (
    <div className="HomePage">
      <aside className="LeftSideBar">
        <div className="TopBar">
          <img src={menu} alt="Youtube Hamburger Menu" className = "YoutubeMenu"></img>
          <img src={logo} alt="YouTube Logo" className="YouTubeLogo" />
        </div>
          <button className="LeftSideBarButton"><MdHome className="IconStyle" /> Home</button>
          <button className="LeftSideBarButton"><MdOutlineVideoLibrary className="IconStyle" /> Shorts</button>
          <button className="LeftSideBarButton"><MdSubscriptions className="IconStyle" /> Subscriptions</button>
          <button className="LeftSideBarButton"><MdMusicNote className="IconStyle" /> Youtube Music</button>
      </aside>
    </div>
  );
}

export default App;
