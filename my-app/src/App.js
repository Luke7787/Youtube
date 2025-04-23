import { MdHome, MdSubscriptions, MdMusicNote, MdOutlineVideoLibrary } from "react-icons/md";
import './App.css';


function App() {
  return (
    <div className="HomePage">
      <aside className="LeftSideBar">
        <button className="LeftSideBarButton"><MdHome className="IconStyle" /> Home</button>
        <button className="LeftSideBarButton"><MdOutlineVideoLibrary className="IconStyle" /> Shorts</button>
        <button className="LeftSideBarButton"><MdSubscriptions className="IconStyle" /> Subscriptions</button>
        <button className="LeftSideBarButton"><MdMusicNote className="IconStyle" /> Youtube Music</button>
      </aside>
    </div>
  );
}

export default App;
