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
import star from '../assets/star.png'
import stars from '../assets/icon.png'
import grids from '../assets/grid.png'
import shapeLeft from '../assets/BG-left-top.png'
import checkmark from '../assets/checkmark.png'


const Home = () => {
  return (
    <div className="bg-{rgba(11, 1, 29, 1)}">
      <div className="hero-bg w-full md:pt-[200px] md:pb-[100px] pt-[80px] pb-[50px]">
        <div className="max-w-[1200px] mx-auto px-[15px]">
      {/* Banner Section */}
      <div className="text-center mb-[50px]">
        <h1 className="md:text-[88px] text-[50px] font-semibold mb-[30px] leading-tight text-white"> A new digital horizon<br />for your business</h1>
        <p className="text-lg text-Paragraph leading-normal mx-auto max-w-[670px]">We are a forward-thinking design studio with a proven track record of translating ingenious brand strategies into immersive and exceptional creative digital experiences that captivate and engage audiences.</p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <button className="bg-[#DBD9DE] transition-all hover:bg-[#1E1333] text-[#2E1C63] hover:text-white font-medium py-2 px-4 rounded-[40px] mb-2 md:mb-0 md:mr-4 border border-solid border-transparent hover:border-slate-400/40">Get Started</button>
        <button className="bg-[#1E1333] transition-all hover:bg-[#DBD9DE] text-white hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white">How It Works</button>
      </div>
      
      {/* Image Row */}
      <div className="flex md:flex-row flex-column flex-wrap justify-between mt-[110px] gap-4 items-center">
        <img src={Tesla} alt="Image 1" className="h-auto max-w-full  " />
        <img src={Tmobile} alt="Image 2" className="h-auto max-w-full " />
        <img src={Yahoo} alt="Image 3" className="h-auto max-w-full  " />
        <img src={Tesla} alt="Image 4" className="h-auto max-w-full " />
        <img src={United} alt="Image 5" className="h-auto max-w-full  " />
      </div>
      </div>
      </div>
      {/* New Section */}
      <section className='w-full md:py-[100px] py-[50px]'>
        <div className='max-w-[1200px] mx-auto px-[15px]'>
            <div className="text-center md:mb-[150px] mb-[50px] relative">
            <div className='txt-stroke left-0 right-0 text-center absolute text-[#130629] xl:text-[120px] lg:text-[100px] text-[40px] font-bold top-[15px]'>
            Creative technology
            </div>
          <p className="text-lg flex items-center justify-center gap-[5px] text-Primary relative"><img src={star} alt="Image 5" className="  " />
            Outstanding Digital Products, and Experiences</p>
            <h2 className=" font-bold mb-2 md:text-[56px] text-[40px] text-white relative">We craft brand experiences</h2>
            
          </div>
          {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={FIrst} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-4 mb-1">Assist You in Detecting Instances of XSS (Cross-Site Scripting)</h3>
        <p className="text-Paragraph">XSS Vulnerabilities present on your external surfaces.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Second} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-4 mb-1">Mobile Application Security</h3>
        <p className="text-Paragraph">Specializing in iOS and APK application security.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Third}alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-4 mb-1">CVE Based testing</h3>
        <p className="text-Paragraph">Conducting CVE-based testing on all externally exposed surfaces.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Fourth} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-4 mb-1">Need to Add something here</h3>
        <p className="text-Paragraph">AAH COME ON ADD SOMETHING</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Fifth} alt="" className="inline-block" />
        <h3 className="text-lg text-white  font-semibold mt-4 mb-1">OSINT Automation</h3>
        <p className="text-Paragraph">Enhance threat intelligence with automated OSINT tools for faster insights</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Six} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-4 mb-1">Continued Automated threat Intelligence</h3>
        <p className="text-Paragraph">Seamlessly Adapt to Emerging Threats with Continuous Automated Intelligence</p>
      </div>
  </div>
        </div>
      </section>
      

      

         {/* New Section */}
         <section className='w-full bg-top-Left-bg bg-no-repeat '>
        <div className='max-w-[1200px] mx-auto px-[15px]'>
         <div className="max-w-full w-full p-8 flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left Side */}
        <div className="md:w-[60%] mb-4 md:mb-0">
        <p className="text-lg flex items-center  gap-[5px] text-Primary relative"><img src={star} alt="Image 5" className="  " />Empowering Businesses to Enhance Their Online Exposure</p>
          <h2 className="md:text-[42px] text-[30px] font-semibold mb-2 text-white">Discover our new ideas that evolves with your business</h2>
          <p className="text-lg text-Paragraph mb-4">Unlock the potential and identity of your brand with our innovative and ever-evolving concept. We pride ourselves on staying at the forefront of industry trends and continuously adapting our strategies to ensure your brand's success. Discover the power of our dynamic approach and watch your brand evolve to new heights, leaving a lasting impression on your audience</p>
          <strong className='text-white'>Select the plan that suits your requirements and budget</strong>
          <p className="text-lg text-Paragraph mb-4">Begin your digital journey by meticulously choosing the strategic plan that aligns perfectly with your business objectives. Our diverse range of plans is designed to cater to your specific needs, whether you're aiming to dominate the market, enhance brand recognition, or drive exceptional sales growth.</p>
          <strong className='text-white'>Share your vision, and we'll work tirelessly to bring it to life</strong>
          <p className="text-lg text-Paragraph mb-4">Our streamlined process makes submitting your request a breeze. Share crucial details about your business goals, and any unique preferences you have in mind. Our seasoned digital marketing professionals will swiftly channel your vision into an actionable strategy that leverages cutting-edge digital tools and trends.</p>
          <strong className='text-white'>We’ll refine the designs until you’re fully satisfied</strong>
          <p className="text-lg text-Paragraph mb-4">We pride ourselves on transparency and teamwork. After implementing your personalized digital strategy, we enter a continuous review and refinement phase. Our dedicated team closely monitors the performance metrics, scrutinizes data, and generates regular reports.</p>
        
          <button class="bg-[#1E1333] transition-all hover:bg-[#DBD9DE] text-white hover:text-[#2E1C63] font-medium py-2 mt-8 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white">Scedule A Call</button>
          
        </div>
        
        {/* Right Side */}
        <div className="md:w-[40%]">
        <div className="tilt-container">
  <div className="tilt-content">
    <img src={Video} alt="Tilted Image" className="rounded-md shadow-lg" />
  </div>
</div>

        </div>
      </div>
</div>
</section>
 {/* New Section */}
 <section className='w-full bg-top-right-bg bg-no-repeat md:py-[100px] py-[50px]'>
        <div className='max-w-[1000px] mx-auto px-[15px] relative'>
      <div className="text-center">
        <h2 className="md:text-[42px] text-[30px] font-semibold mb-2 text-white ">Know more about us?</h2>
      </div>
        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">
          <div className="md:flex md:flex-row flex-column items-center  justify-between gap-8">
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[120px] text-[60px] font-bold ">SEO</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
            
            <div className="content max-w-[470px] w-full">
            <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Founder</h5>
              <h2 className="text-2xl mb-4 text-white font-medium">Arman Surti</h2>
              <p className="text-base text-Paragraph">Exemplifying expertise in web application security through continuous bug bounty and research endeavors since 2018. Recognized as a top 35 researcher on the Bugcrowd platform and honored as the Most Valuable Hacker of 2022, my proficiency is evident in the impactful contributions to cybersecurity. Explore my bounty profiles on platforms such as Bugcrowd and HackerOne to witness a track record of excellence.</p>
              <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Our Work</button>
            </div>
          </div>
        </div>

        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">

        <div className="md:flex md:flex-row justify-between flex-column items-center gap-8">
          <div className="content max-w-[470px] w-full">
          <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Senior Application Security</h5>
            <h2 className="text-2xl mb-4 text-white font-medium ">El Mehdi Mhrassel </h2>
            <p className="text-base text-Paragraph">El Mehdi Mhrassel, a seasoned professional in bug bounty hunting since 2018, brings a wealth of experience to our cybersecurity team. With a remarkable track record, he has successfully identified vulnerabilities in Fortune 500 companies known for their strong security measures. Additionally, he has discovered zero-day exploits in prominent products, showcasing his expertise that significantly contributes to our commitment to ensuring robust security for our clients.</p>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Learn More</button>
          </div>
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[120px] text-[60px] font-bold ">DEV</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
          
        </div>
        </div>
        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">

        <div className="md:flex md:flex-row justify-between flex-column items-center gap-8">
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[120px] text-[60px] font-bold ">WEB</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
          
          <div className="content max-w-[470px] w-full">
            <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Crafting Digital Experiences</h5>
            <h2 className="text-2xl mb-4 text-white font-medium">we refuse to be redundant</h2>
            <p className="text-base text-Paragraph">We integrate collaborate, and challenge. We are digital natives embracing the creative freedom to produce solutions that connect, communicate, and inspire. We strive to stay at the forefront of the ever-evolving digital landscape, enabling us to deliver impactful marketing solutions that not only meet but exceed our clients' expectations.</p>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Get Started</button>
          </div>
        </div>
        </div>
        <img src={shapeLeft} alt="img" className='absolute left-[-100px] bottom-0'/>
      </div>
  </section>
 {/* New Section */}
 <section className='w-full bg-marquee-BG bg-center bg-no-repeat  md:py-[100px] py-[50px] relative'>
      {/* Centered p and h2 */}
      <div className='max-w-[1200px] mx-auto px-[15px] relative'>
      <div className="text-center mb-8">
      <p className="text-lg flex items-center justify-center  gap-[5px] text-Primary relative"> <img src={star} alt="star-img"/>Read What Our Clients Have to Say About The Services We Provide</p>

        <h2 className=" font-bold mb-2 md:text-[56px] text-[40px] text-white ">What our clients are saying</h2>
      </div>
      </div>
      
      {/* First Marquee */}
      <marquee className="flex  mb-8" direction="left" scrollamount="5">
       
          <div className="items-center flex">
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>

          </div>

      </marquee>

      {/* Second Marquee */}
      <marquee className="flex  mb-8" direction="right" scrollamount="5">
      <div className="items-center flex">
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>

          </div>
      </marquee>
      </section>
    {/* New Section */}
    <div className='bg-HR-bg h-px w-full  bg-center bg-no-repeat'></div>
    <section className='w-full  md:pb-[100px] pb-[50px] md:pt-[100px] pt-[50px] overflow-hidden'>
      
        <div className='max-w-[1200px] mx-auto px-[15px] relative'>
          <img src={shapeLeft} alt="image" className='absolute right-[-30px] top-[50px]'/>
    <div className="max-w-[725px] w-full py-8 mb-8 ">
        <p className="text-lg flex items-center  gap-[5px] text-Primary relative"> <img src={star} alt="star-img"/>Free 30-Day Trial — No Credit Card Required.</p>
        <h2 className=" font-bold mb-2 md:text-[42px] text-[30px] text-white ">Whether you’re part of an agency or a larger team we have a plan for you</h2>
</div>
        <div className="flex md:flex-row flex-col gap-[30px] ">
          {/* Pricing Plan 1 */}
          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Standard</p>
            <h3 className=" font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">$29<span className='text-Paragraph text-xl font-medium'>/month</span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Design, prototype and illustrate
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Collaborate in real-time</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            One year of updates</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>

          {/* Pricing Plan 2 */}
          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Bussiness</p>
            <h3 className="font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">$29<span className='text-Paragraph text-xl font-medium'>/month</span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Design, prototype and illustrate
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Collaborate in real-time</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            One year of updates</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>

          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Enterprice</p>
            <h3 className="font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">$29<span className='text-Paragraph text-xl font-medium'>/month</span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Design, prototype and illustrate
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Collaborate in real-time</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            One year of updates</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>
        </div>
      
      </div>
    </section>
    <section className='w-full  md:pt-[50px] pt-[50px] md:pb-[100px] pb-[50px] bg-last-sec-bg bg-no-repeat bg-bottom'>
    <div className='max-w-[1000px] mx-auto px-[15px] relative'>
    <div className="row  bg-full-BG bg-center bg-no-repeat bg-cover md:py-[100px] py-[50px] md:px-[100px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl text-center">
        {/* Heading with border */}
        <div className=" mb-4">
          <h2 className=" font-medium  text-white px-4 md:text-[56px] text-[40px]">Unlimited design to support your growing business</h2>
        </div>

        {/* CTA button */}
        <button className="bg-[#DBD9DE] transition-all hover:bg-[#1E1333] text-[#2E1C63] hover:text-white font-medium py-4 px-4 rounded-[40px] mb-2 md:mb-0 md:mr-4 border border-solid border-transparent hover:border-slate-400/40 text-[14px]">Get Started</button>

       
      </div>
    </div>
    </section>
      
        
      
    </div>
    
  );
};

export default Home;
