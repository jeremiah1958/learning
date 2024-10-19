import React from 'react';

const FarmInfo = () => {
  return (
    <div>
      <h1>Welcome to the official Home Page for  Garden Of Abundant Delight  Nanyuki</h1>
     
      <p>Owned by the Onyiego's, located at the foot of Mount Kenya, our farm offers a serene getaway with lush landscapes, diverse crops, and various animals.</p>
        <p>Located in the town of Nanyuki, Garden of Abundant Delight  is dedicated to sustainable organic farming practices and 
        fostering a harmonious relationship with nature</p>
        <p>Our farm thrives on the rich, fertile soils 
        and enjoys the breathtaking views of Mount Kenya and the Laikipia plateau. Come experience the serenity of 
        our farm and learn about our commitment to quality and environmental stewardship.</p>
        <p>Visitors can enjoy fresh produce, farm tours, and participate in activities like planting, harvesting and animal care.</p>
        <p>Explore nearby attractions such as Mount Kenya National Park and Ol Pejeta Conservancy for exciting adventures.</p>
        <p>Join us for local events like the Nanyuki Agricultural Show and Craft Fair, celebrating our vibrant community.</p>
        <p>Whether you seek relaxation, farm-to-table meals, or a chance to connect with the Onyiego family and locals, The Garden of Abundant Delight  has something for everyone.</p> 
        <p>Come and discover the beauty and stories that make our farm and its surroundings truly special!</p>

      
      <div className='info-gallery' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '80px', padding: '20px' }}>
        <img src='/farm11.jpg' alt="Farm 11" style={{ width: '250px', height: 'auto', borderRadius: '60px' }} />
        <img src='/farm22.jpg' alt="Farm 22" style={{ width: '250px', height: 'auto', borderRadius: '60px' }} />
        <img src='/farm33.jpg' alt="Farm 33" style={{ width: '250px', height: 'auto', borderRadius: '60px' }} />
        <img src='/farm44.jpg' alt="Farm 44" style={{ width: '250px', height: 'auto', borderRadius: '60px' }} />
      </div>
    </div>
  );
};

export default FarmInfo;
