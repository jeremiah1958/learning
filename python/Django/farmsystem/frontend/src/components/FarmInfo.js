import React from 'react';

const FarmInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Welcome to the Garden Of Abundant Delight, Nanyuki
      </h1>
      <p className="mb-2">- Owned by the Onyiego's, located at the foot of Mount Kenya, our farm offers a serene getaway with lush landscapes, diverse crops, and various animals.</p>
      <p className="mb-2">- Located in the town of Nanyuki, Garden of Abundant Delight is dedicated to sustainable organic farming practices and fostering a harmonious relationship with nature.</p>
      <p className="mb-2">- Our farm thrives on the rich, fertile soils and enjoys breathtaking views of Mount Kenya and the Laikipia plateau. Come experience the serenity of our farm and learn about our commitment to quality and environmental stewardship.</p>
      <p className="mb-2">- Visitors can enjoy fresh produce, farm tours, and participate in activities like planting, harvesting, and animal care.</p>
      <p className="mb-2">- Explore nearby attractions such as Mount Kenya National Park and Ol Pejeta Conservancy for exciting adventures.</p>
      <p className="mb-2">- Join us for local events like the Nanyuki Agricultural Show and Craft Fair, celebrating our vibrant community.</p>
      <p className="mb-4">- Whether you seek relaxation, farm-to-table meals, or a chance to connect with the Onyiego family and locals, The Garden of Abundant Delight has something for everyone.</p>
      <p>- Come and discover the beauty and stories that make our farm and its surroundings truly special!</p>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {['/farm11.jpg', '/farm22.jpg', '/farm33.jpg', '/farm44.jpg'].map((src, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={src} alt={`Farm ${index + 11}`} className="rounded-lg mb-2" style={{ width: '250px', height: '150px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmInfo;
