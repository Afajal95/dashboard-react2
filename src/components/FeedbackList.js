import { Avatar, Divider } from '@mui/material';
import React from 'react';

const FeedbackList = () => {
  const feedbacks = [
    { id: 1, name: 'Jenny Wilson', comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and a green salad which was also very good. They were very conscientious about gluten allergies.', rating: 5 },
    { id: 2, name: 'Dianne Russell', comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', rating: 5 },
    { id: 3, name: 'Devon Lane', comment: 'Normally wings are wings, but theirs are lean meaty and tender, and they have a little kick.', rating: 4 }
  ];

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

  return (
    <div style ={{maxHeight:"560px", overflowY:"scroll"}}>
    <div className="feedback-container">
      <h2>Customer's Feedback</h2>
      <div className="feedback-list">
        {feedbacks.map(feedback => (
          <>
          <div key={feedback.id} className="feedback">
            <div style={{display:"flex", alignItems:"center"}}>
            <span><Avatar {...stringAvatar(feedback.name)} /></span><span style ={{marginLeft:"5px", fontSize:"18px"}}>{feedback.name}</span></div>
            <p>{feedback.comment}</p>
            <div className="rating">
              {Array(feedback.rating).fill('⭐').join('')}
            </div>
          </div>
          <Divider style={{background:"grey", marginBottom:"15px"}} variant='middle' />
          </>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeedbackList;
