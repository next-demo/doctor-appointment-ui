import "./Adminlist.scss"
import Adminsidebar from "../../components/sidebar/Adminsidebar";
import Adminnavbar from "../../components/navbar/Adminnavbar";
import Admindatatable from "../../components/datatable/Admindatatable";

const List = () => {
  return (
    <div className="list">
      <Adminsidebar/>
      <div className="listContainer">
        <Adminnavbar/>
        <Admindatatable/>
      </div>
    </div>
  )
}

export default List