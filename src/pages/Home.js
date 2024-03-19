import React from 'react';
import Dell from '../assets/dell.png';
import Tesla from '../assets/tesla.png';
import Tmobile from '../assets/t-mobile.png';
import Yahoo from '../assets/yahoo.png';
import United from '../assets/United States Pentagon.png';

import FIrst from '../assets/Icon (1).png'
import Second from '../assets/Icon (2).png'
import Third from '../assets/Icon (3).png'
import Fourth from '../assets/Icon (4).png'
import Fifth from '../assets/Icon (5).png'
import Six from '../assets/Icon (6).png'
import Video from '../assets/video.png'


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Banner Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">A new digital horizon<br />for your business</h1>
        <p className="text-lg text-gray-600">We are a forward-thinking design studio with a proven track record of translating ingenious brand strategies into immersive and exceptional creative digital experiences that captivate and engage audiences.</p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-4">Get Started</button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">How It Works</button>
      </div>
      
      {/* Image Row */}
      <div className="flex justify-center mb-8">
        <img src={Tesla} alt="Image 1" className="h-16 w-16 mr-4" />
        <img src={Tmobile} alt="Image 2" className="h-16 w-16 mr-4" />
        <img src={Yahoo} alt="Image 3" className="h-16 w-16 mr-4" />
        <img src={Tesla} alt="Image 4" className="h-16 w-16 mr-4" />
        <img src={United} alt="Image 5" className="h-16 w-16 mr-4" />
      </div>

      {/* New Section */}
      <div className="text-center mb-8">
      <p className="text-lg text-gray-600">Outstanding Digital Products, and Experiences</p>
        <h2 className="text-3xl font-bold mb-2">We craft brand experiences</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
       
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={FIrst} alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Assist You in Detecting Instances of XSS (Cross-Site Scripting)</h3>
            <p className="text-gray-600">XSS Vulnerabilities present on your external surfaces.</p>
          </div>
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={Second} alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Mobile Application Security</h3>
            <p className="text-gray-600">Specializing in iOS and APK application security.</p>
          </div>
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={Third}alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">CVE Based testing</h3>
            <p className="text-gray-600">Conducting CVE-based testing on all externally exposed surfaces.</p>
          </div>
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={Fourth} alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Need to Add something here</h3>
            <p className="text-gray-600">AAH COME ON ADD SOMETHING</p>
          </div>
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={Fifth} alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">OSINT Automation</h3>
            <p className="text-gray-600">Enhance threat intelligence with automated OSINT tools for faster insights</p>
          </div>
          <div  className="bg-gray-200 p-4 rounded-md">
            <img src={Six} alt="" className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Continued Automated threat Intelligence</h3>
            <p className="text-gray-600">Seamlessly Adapt to Emerging Threats with Continuous Automated Intelligence</p>
          </div>
      </div>

         {/* New Section */}
         <div className="max-w-4xl w-full p-8 flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-4 md:mb-0">
        <p className="text-lg text-gray-600 mb-4">Empowering Businesses to Enhance Their Online Exposure</p>
          <h2 className="text-3xl font-bold mb-2">Discover our new ideas that evolves with your business</h2>
          <p className="text-lg text-gray-600 mb-4">Unlock the potential and identity of your brand with our innovative and ever-evolving concept. We pride ourselves on staying at the forefront of industry trends and continuously adapting our strategies to ensure your brand's success. Discover the power of our dynamic approach and watch your brand evolve to new heights, leaving a lasting impression on your audience</p>
          <strong>Select the plan that suits your requirements and budget</strong>
          <p className="text-lg text-gray-600 mb-4">Begin your digital journey by meticulously choosing the strategic plan that aligns perfectly with your business objectives. Our diverse range of plans is designed to cater to your specific needs, whether you're aiming to dominate the market, enhance brand recognition, or drive exceptional sales growth.</p>
          <strong>Share your vision, and we'll work tirelessly to bring it to life</strong>
          <p className="text-lg text-gray-600 mb-4">Our streamlined process makes submitting your request a breeze. Share crucial details about your business goals, and any unique preferences you have in mind. Our seasoned digital marketing professionals will swiftly channel your vision into an actionable strategy that leverages cutting-edge digital tools and trends.</p>
          <strong>We’ll refine the designs until you’re fully satisfied</strong>
          <p className="text-lg text-gray-600 mb-4">We pride ourselves on transparency and teamwork. After implementing your personalized digital strategy, we enter a continuous review and refinement phase. Our dedicated team closely monitors the performance metrics, scrutinizes data, and generates regular reports.</p>
        
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Scedule A Call</button>
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2">
        <div className="tilt-container">
  <div className="tilt-content">
    <img src={Video} alt="Tilted Image" className="rounded-md shadow-lg" />
  </div>
</div>

        </div>
      </div>
 {/* New Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Know more about us?</h2>

        <div className="row mt-8">
          <div className="flex">
            <h2 className="text-2xl mr-4">SEO</h2>
            <div className="content">
              <h5 className="text-lg">Founder</h5>
              <h2 className="text-2xl">Arman Surti</h2>
              <p className="text-base">Exemplifying expertise in web application security through continuous bug bounty and research endeavors since 2018. Recognized as a top 35 researcher on the Bugcrowd platform and honored as the Most Valuable Hacker of 2022, my proficiency is evident in the impactful contributions to cybersecurity. Explore my bounty profiles on platforms such as Bugcrowd and HackerOne to witness a track record of excellence.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Our Work</button>
            </div>
          </div>
        </div>

        <div className="row mt-8">

        <div className="flex mt-8">
          <div className="content">
            <h5 className="text-lg">Senior Application Security</h5>
            <h2 className="text-2xl">El Mehdi Mhrassel </h2>
            <p className="text-base">El Mehdi Mhrassel, a seasoned professional in bug bounty hunting since 2018, brings a wealth of experience to our cybersecurity team. With a remarkable track record, he has successfully identified vulnerabilities in Fortune 500 companies known for their strong security measures. Additionally, he has discovered zero-day exploits in prominent products, showcasing his expertise that significantly contributes to our commitment to ensuring robust security for our clients.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
          </div>
          <h2 className="text-2xl ml-4">DEV</h2>
        </div>
        </div>
        <div className="row mt-8">

        <div className="flex mt-8">
          <h2 className="text-2xl mr-4">WEB</h2>
          <div className="content">
            <h5 className="text-lg">Crafting Digital Experiences</h5>
            <h2 className="text-2xl">we refuse to be redundant</h2>
            <p className="text-base">We integrate collaborate, and challenge. We are digital natives embracing the creative freedom to produce solutions that connect, communicate, and inspire. We strive to stay at the forefront of the ever-evolving digital landscape, enabling us to deliver impactful marketing solutions that not only meet but exceed our clients' expectations.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
          </div>
        </div>
        </div>
      </div>
 {/* New Section */}
      {/* Centered p and h2 */}
      <div className="text-center mb-8">
      <p className="text-lg">Read What Our Clients Have to Say About The Services We Provide</p>

        <h2 className="text-3xl font-bold mb-2">What our clients are saying</h2>
      </div>

      {/* First Marquee */}
      <marquee className="flex  mb-8" direction="left" scrollamount="5">
       
          <div className="items-center">
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>

          </div>
       
      </marquee>

      {/* Second Marquee */}
      <marquee className="flex  mb-8" direction="right" scrollamount="5">
      <div className="items-center">
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>
            <p className="mx-2">"The best service for startups,designers, and developers"</p>

          </div>
      </marquee>
    {/* New Section */}
    <div className="max-w-4xl w-full p-8 mb-8 ">
        <p className="text-lg">Free 30-Day Trial — No Credit Card Required.</p>
        <h2 className="text-3xl font-bold mb-4">Whether you’re part of an agency or a larger team we have a plan for you</h2>

        <div className="flex justify-center text-center">
          {/* Pricing Plan 1 */}
          <div className="bg-gray-200 p-6 rounded-md mr-4">
            <p className='subtitle'>Standard</p>
            <h3 className="text-xl font-semibold mb-2">$29/<span>month</span></h3>
          <ul>
            <li>
            Design, prototype and illustrate
            </li>
            <li>
            Collaborate in real-time</li>
            <li>
            One year of updates</li>
          </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Purchase Now</button>
          </div>

          {/* Pricing Plan 2 */}
          <div className="bg-gray-200 p-6 rounded-md mr-4">
            <p className='subtitle'>Bussiness</p>
            <h3 className="text-xl font-semibold mb-2">$29/<span>month</span></h3>
          <ul>
            <li>
            Design, prototype and illustrate
            </li>
            <li>
            Collaborate in real-time</li>
            <li>
            One year of updates</li>
          </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Purchase Now</button>
          </div>

          <div className="bg-gray-200 p-6 rounded-md mr-4">
            <p className='subtitle'>Enterprice</p>
            <h3 className="text-xl font-semibold mb-2">$29/<span>month</span></h3>
          <ul>
            <li>
            Design, prototype and illustrate
            </li>
            <li>
            Collaborate in real-time</li>
            <li>
            One year of updates</li>
          </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Purchase Now</button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full p-8 mb-8 text-center">
        {/* Heading with border */}
        <div className=" mb-4">
          <h2 className="text-3xl font-bold inline-block bg-white px-4">Unlimited design to support your growing business</h2>
        </div>

        {/* CTA button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">Get Started</button>

       
      </div>
    </div>
    
  );
};

export default Home;
