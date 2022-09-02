import "./Adminnavbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';


function Adminnavbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...."/>
            <SearchOutlinedIcon/> 
        </div>       
        <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon  className="icon"/>
          </div>
          <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kratos_%2815458769560%29.jpg/1200px-Kratos_%2815458769560%29.jpg"
            alt=""
            className="avatar"/>
          </div>
        </div> 
      </div>
    </div>
 
  )
}

export default Adminnavbar;