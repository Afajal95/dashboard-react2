import { Avatar } from '@mui/material';
import React from 'react';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." />
      <div className="profile" style={{display:"flex", justifyContent:"space-between", width:"12%", alignItems:"center",color:"grey"}}>

      <div><MailOutlineOutlinedIcon /></div>
      <div><SettingsIcon /></div>
      <div><NotificationsNoneIcon /></div>
      <div><Avatar sx={{ bgcolor: "purple" }}>OP</Avatar></div>
      </div>
    </div>
  );
};

export default Navbar;
