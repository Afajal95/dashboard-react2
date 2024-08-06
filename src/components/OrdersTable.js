import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Chip } from '@mui/material';


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const OrdersTable = () => {
  
  const orders = [
    { id: 1, customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', color:"success"},
    { id: 2, customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered', color:"success" },
    { id: 3, customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled', color:"error" },
    { id: 4, customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', color:"error" },
    { id: 5, customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered',  color:"success" },
    { id: 6, customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', color:"success" },
  ];

  return (
    <div className="orders-container">
      <h2>Recent Orders</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td><div style={{display:"flex", alignItems:"center"}}>
                <span><Avatar {...stringAvatar(order.customer)} /></span><span style ={{marginLeft:"5px"}}>{order.customer}</span></div></td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td><Chip label={order.status} color={order.color} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
