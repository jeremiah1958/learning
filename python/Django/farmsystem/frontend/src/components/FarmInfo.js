import React from 'react';

const FarmInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-100 rounded-lg shadow-lg border border-green-200">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">
        Welcome to the Garden Of Abundant Delight, Nanyuki
      </h1>
      <div className="space-y-4 text-gray-800 text-lg">
        <p>- Owned by the Onyiego family and located at the foot of Mount Kenya, our farm offers a serene getaway with lush landscapes, diverse crops, and various animals.</p>
        <p>- Dedicated to sustainable organic farming practices, the Garden of Abundant Delight fosters a harmonious relationship with nature.</p>
        <p>- With rich, fertile soils and breathtaking views of Mount Kenya and the Laikipia plateau, come experience the serenity of our farm and our commitment to quality and environmental stewardship.</p>
        <p>- Visitors can enjoy fresh produce, farm tours, and participate in activities like planting, harvesting, and animal care.</p>
        <p>- Explore nearby attractions such as Mount Kenya National Park and Ol Pejeta Conservancy for exciting adventures.</p>
        <p>- Join us for local events like the Nanyuki Agricultural Show and Craft Fair, celebrating our vibrant community.</p>
        <p>- Whether you seek relaxation, farm-to-table meals, or a chance to connect with the Onyiego family and locals, The Garden of Abundant Delight has something for everyone.</p>
        <p>- Come and discover the beauty and stories that make our farm and its surroundings truly special!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {['/farm11.jpg', '/farm22.jpg', '/farm33.jpg', '/farm44.jpg'].map((src, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img 
              src={src} 
              alt={`Farm View`} 
              className="w-64 h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmInfo;
