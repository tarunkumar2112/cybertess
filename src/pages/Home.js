import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Banner Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to<br />Your Website</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-4">Button 1</button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Button 2</button>
      </div>
      
      {/* Image Row */}
      <div className="flex justify-center mb-8">
        <img src="image-1.jpg" alt="Image 1" className="h-16 w-16 mr-4" />
        <img src="image-2.jpg" alt="Image 2" className="h-16 w-16 mr-4" />
        <img src="image-3.jpg" alt="Image 3" className="h-16 w-16 mr-4" />
        <img src="image-4.jpg" alt="Image 4" className="h-16 w-16 mr-4" />
        <img src="image-5.jpg" alt="Image 5" className="h-16 w-16 mr-4" />
      </div>

      {/* New Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">New Section Heading</h2>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Dummy Content */}
        {Array.from(Array(6).keys()).map((index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md">
            <img src={`image-${index + 1}.jpg`} alt={`Image ${index + 1}`} className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Heading {index + 1}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>

         {/* New Section */}
         <div className="max-w-4xl w-full p-8 flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">New Section Heading</h2>
          <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">CTA Button</button>
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2">
        <div className="tilt-container">
  <div className="tilt-content">
    <img src="image.jpg" alt="Tilted Image" className="rounded-md shadow-lg" />
  </div>
</div>

        </div>
      </div>
 {/* New Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Dummy</h2>
        <p className="text-lg">Dummy</p>

        <div className="row mt-8">
          <div className="flex">
            <h2 className="text-2xl mr-4">Heading</h2>
            <div className="content">
              <h5 className="text-lg">Subheading</h5>
              <h2 className="text-2xl">Title</h2>
              <p className="text-base">Description</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Text</button>
            </div>
          </div>
        </div>

        <div className="row mt-8">

        <div className="flex mt-8">
          <div className="content">
            <h5 className="text-lg">Subheading</h5>
            <h2 className="text-2xl">Title</h2>
            <p className="text-base">Description</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Text</button>
          </div>
          <h2 className="text-2xl ml-4">Heading</h2>
        </div>
        </div>
        <div className="row mt-8">

        <div className="flex mt-8">
          <h2 className="text-2xl mr-4">Heading</h2>
          <div className="content">
            <h5 className="text-lg">Subheading</h5>
            <h2 className="text-2xl">Title</h2>
            <p className="text-base">Description</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Text</button>
          </div>
        </div>
        </div>
      </div>
 {/* New Section */}
      {/* Centered p and h2 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Centered Heading</h2>
        <p className="text-lg">Centered Paragraph</p>
      </div>

      {/* First Marquee */}
      <marquee className="flex  mb-8" direction="left" scrollamount="5">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center">
            <p className="mx-2">Text {index + 1}</p>
          </div>
        ))}
      </marquee>

      {/* Second Marquee */}
      <marquee className="flex  mb-8" direction="right" scrollamount="5">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-1 border-t border-gray-400"></div>
            <p className="mx-2">Text {index + 11}</p>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
        ))}
      </marquee>
    {/* New Section */}
    <div className="max-w-4xl w-full p-8 mb-8 text-center">
        <p className="text-lg">Description</p>
        <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>

        <div className="flex justify-center">
          {/* Pricing Plan 1 */}
          <div className="bg-gray-200 p-6 rounded-md mr-4">
            <h3 className="text-xl font-semibold mb-2">Plan 1</h3>
            <p className="text-gray-600 mb-4">Description of Plan 1</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Choose Plan</button>
          </div>

          {/* Pricing Plan 2 */}
          <div className="bg-gray-200 p-6 rounded-md mr-4">
            <h3 className="text-xl font-semibold mb-2">Plan 2</h3>
            <p className="text-gray-600 mb-4">Description of Plan 2</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Choose Plan</button>
          </div>

          {/* Pricing Plan 3 */}
          <div className="bg-gray-200 p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Plan 3</h3>
            <p className="text-gray-600 mb-4">Description of Plan 3</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Choose Plan</button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full p-8 mb-8 text-center">
        {/* Heading with border */}
        <div className=" mb-4">
          <h2 className="text-3xl font-bold inline-block bg-white px-4">Section Heading</h2>
        </div>

        {/* CTA button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">Call to Action</button>

       
      </div>
    </div>
    
  );
};

export default Home;
