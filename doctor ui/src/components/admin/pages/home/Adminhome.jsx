import React from 'react';
import Adminnavbar from '../../components/navbar/Adminnavbar';
import Adminsidebar from '../../components/sidebar/Adminsidebar';
import Adminwidgets from '../../components/widgets/Adminwidgets';
import Adminchart from '../../components/chart/Adminchart';
import Adminfeatured from "../../components/featured/Adminfeatured";
import Admintable from "../../components/datatable/Admindatatable";


import './Adminhome.scss';

const Adminhome = () => {
  return(  
  <div className="home">
        <Adminsidebar />
  <div className="homeContainer">
    <Adminnavbar />
    <div className="widgets">
      <Adminwidgets type="user" />
      <Adminwidgets type="order" />
      <Adminwidgets type="earning" />
      <Adminwidgets type="balance" />
    </div>
    <div className="charts">
      <Adminfeatured />
      <Adminchart title="Last 6 Months (Revenue)" aspect={2 / 1} />
    </div>
    <div className="listContainer">
      <div className="listTitle">Latest Transactions</div>
      <Admintable />
    </div>
  </div>
</div>
);
    
}

export default Adminhome;