import React from 'react';
import ActivityChart from './ActivityChart';
import OrdersTable from './OrdersTable';
import FeedbackList from './FeedbackList';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Avatar } from '@mui/material';
import { IoIosArrowDropright } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div style ={{fontSize:"20px", fontWeight:"bold", marginBottom:"15px"}}>Dashboard</div>
      <div className="chart-goals-container">
      <div className="summary" style={{width:"60%"}}>
        <div className="summary-item"  style={{ transition: "transform 0.2s", ":hover": { transform: "scale(1.05)" } }}>
          <div><LocalShippingIcon style={{color:"purple"}}/></div>
          <div>Total Orders</div>
        <div style ={{ width: "100%"}}>
        <div style ={{fontSize:"30px", fontWeight:"bold", marginTop:"20px", float:"left"}}>75</div>
        <div style ={{float:"right", marginTop:"30px", color:"green"}}>3%</div>
        <div style ={{float:"right", marginTop:"30px"}}><ArrowDropUpRoundedIcon style={{color:"green"}}/></div>

        </div>
          </div>

        <div className="summary-item">
        <div><LocalMallIcon style={{color:"palegreen"}}/></div>
          <div>Total Delivered</div>
        <div style ={{ width: "100%"}}>
        <div style ={{fontSize:"30px", fontWeight:"bold", marginTop:"20px", float:"left"}}>70</div>
        <div style ={{float:"right", marginTop:"30px",color:"red"}}>3%</div>
        <div style ={{float:"right", marginTop:"30px"}}><ArrowDropDownRoundedIcon style={{color:"red"}}/></div>
        </div></div>
        <div className="summary-item">
          <div><LocalMallIcon style={{color:"orange"}}/></div>
          <div>Total Cancelled</div>
        <div style ={{ width: "100%"}}>
        <div style ={{fontSize:"30px", fontWeight:"bold", marginTop:"20px", float:"left"}}>75</div>
        <div style ={{float:"right", marginTop:"30px", color:"green"}}>5%</div>
        <div style ={{float:"right", marginTop:"30px"}}><ArrowDropUpRoundedIcon style={{color:"green"}}/></div>
        </div></div>
        <div className="summary-item">
          <div><MonetizationOnIcon style={{color:"pink"}}/></div>
          <div>Total Revenue</div>
        <div style ={{ width: "100%"}}>
        <div style ={{fontSize:"30px", fontWeight:"bold", marginTop:"20px", float:"left"}}>$12k</div>
        <div style ={{float:"right", marginTop:"30px", color:"red"}}>3%</div>
        <div style ={{float:"right", marginTop:"30px"}}><ArrowDropDownRoundedIcon style={{color:"red"}}/></div>
        </div></div>
      </div>
      <div style ={{width:"40%"}}>
      <div className="goals-container">
        <div style={{display:"flex", alignItems:"center"}}>
        <div>
        <div style ={{fontSize:"15px", marginBottom:"10px"}}>Net Profit</div>
        <div style={{fontWeight:"bold", fontSize:"30px", marginBottom:"10px"}}>$6759.25</div>
        <div style={{display:"flex", alignItems:"center"}}>
        <div ><ArrowDropUpRoundedIcon style={{color:"lightgreen", }}/></div>
        <div style={{color:"lightgreen"}}>3%</div>
        </div>
        </div>

        <div style={{marginLeft:"100px"}}>
        <img style={{width:"40%"}}src="/percent icon.png" alt="Goals" />
<div style ={{fontSize:"10px"}}>*The values here has been rounded off.</div>
        </div>
        </div>
        </div>
        </div>
        </div>
      <div className="chart-goals-container">
        <div style={{ width: "60%" }}>
        <div className="chart-container">
          <div  style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}>
          <ActivityChart />

          </div>
        </div>
        </div>
        <div style={{ width: "40%" }}>
        <div className="goals-container" style={{height:"230px"}}>
        <div className="interface-container">
    <div className="icon goals" style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
      <div style={{ background:"orange", borderRadius:"50%", width:"60px", height:"60px" ,marginRight:"10px" }}></div>
      <h3>Goals</h3>
      <div style={{marginLeft:"auto"}}>
      <IoIosArrowDropright size={30} color='grey'/>
      </div>
    </div>
    <div className="icon popular-dishes" style={{display:"flex", alignItems:"center",marginBottom:"20px"}}>
    <div style={{ background:"pink", borderRadius:"50%", width:"60px", height:"60px" ,marginRight:"10px" }}></div>
    <h3>Popular Dishes</h3>
    <div style={{marginLeft:"auto"}}>
      <IoIosArrowDropright size={30} color='grey'/>
      </div>
    </div>
    <div className="icon menus" style={{display:"flex", alignItems:"center"}}>
    <div style={{ background:"lightblue", borderRadius:"50%", width:"60px", height:"60px" ,marginRight:"10px" }}></div>
      <h3>Menus</h3>
      <div style={{marginLeft:"auto"}}>
      <IoIosArrowDropright size={30} color='grey'/>
      </div>
    </div>
    </div>
        </div>
        </div>
      </div>
      <div className="order-feedback-container">
        <div style={{ width: "60%" }}>
        <div className="order-container">
      <OrdersTable />
      </div>
      </div>
      <div style={{ width: "40%" }}>
      <div className="feedback-container">
      <FeedbackList />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
