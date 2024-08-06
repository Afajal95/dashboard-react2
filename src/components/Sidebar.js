import React from 'react';
import { FaHome, FaList, FaChartPie } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FaHome color='skyblue' /> </li>
        <li><FaList /></li>
        <li><FaChartPie /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
