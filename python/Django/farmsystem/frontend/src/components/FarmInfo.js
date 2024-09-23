import React from 'react';

const FarmInfo = () => {
  return (
    <div>
      <h1>Welcome to the official  Home Page for Blessed Farm Nanyuki</h1>
      <p>Located in the heart of Nanyuki, Blessed Farm is dedicated to sustainable farming practices and 
        fostering a harmonious relationship with nature<p/>
      </p>
      <p>Our farm thrives on the rich, fertile soils 
        and enjoys the breathtaking views of the Laikipia plateau. Come experience the serenity of 
        our farm and learn about our commitment to quality and environmental stewardship.</p>
      
      <div className='info-gallery'>
        <img src='/farm7.jpg'/>
        <img src='/farm8.jpg'/>
        <img src='/farm.jpg'/>
        <img src='/farm1.jpg'/>
        <img src='/farm2.jpg'/>
        <img src='/farm3.jpg'/>
        <img src='/farm4.jpg'/>
      </div>
    </div>
  );
};

export default FarmInfo;
