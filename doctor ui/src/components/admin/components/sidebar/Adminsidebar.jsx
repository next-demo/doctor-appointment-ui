import "./Adminsidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Adminsidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Praveen Admin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>Doctors</span>
                </li>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>Hospitals</span>
                </li>
                <li>
                    <BookOnlineIcon className="icon"/>
                    <span>Appointment</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon  className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon  className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p> 
                <li>
                    <SettingsSystemDaydreamOutlinedIcon  className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon  className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Adminsidebar;