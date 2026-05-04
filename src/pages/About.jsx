import React from 'react'
import photo2 from "../images/photo3.jpg"
import photo5 from "../images/photo5.jpg"
import photo28 from "../images/photo28.webp"
import Subscribe from "../components/Subscribe.jsx"

import photo15 from "../images/photo15.jpg"
import photo29 from "../images/photo29.webp"
import photo30 from "../images/photo30.jpg"



function About() {

  const place = [
    {id: 1,  name: "Singapore", img: photo15},
    {id: 2,  name: "Malaysia", img: photo29},
    {id: 3,  name: "Chili", img: photo30},
    {id: 4,  name: "Tokio", img: photo28},
    {id: 5,  name: "Tailand", img: photo28},
    {id: 6,  name: "Canada", img: photo28},
  ]
  return (
    <div className='bg-gray-100 h-600 -mt-5.5  '><br />
      <div className='w-70 h-70 rounded-full  bg-white ml-40 mt-10 bg-cover'
      style={{ backgroundImage: `url(${photo2})` }}>
      </div>
<div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
     className='w-120 h-70 bg-white float-right mr-60 p-10 rounded-xl shadow-xl -mt-65  '>
      <p className='text-4xl font-bold  t'>Hi, I'm <span className='text-blue-700'>Iroda</span>.</p> 
       <p className='font-medium text-2xl '>I explore the world and share my journey <br/>
I love to travel. 
I explore new places and cultures. 
I share my experiences through this blog.
</p></div>
 
 <div data-aos="fade-right" className='w-110 h-30 bg-white bg-cover rounded-lg mt-15 ml-30 p-5'
 style={{ backgroundImage: `url(${photo5})` }}>
  <p className='font-bold text-6xl'> <span className='text-blue-700'>Why</span> I Travel ?</p>

 </div>

 <div className='w-250 h-70shadow-xl ml-40 mt-10 font-medium leading-8 p-5'>
 <div data-aos="zoom-in-down" className='w-260 h-95 bg-white rounded-lg -ml-15'><img src={photo28} className='w-250 h-90 ml-5 pt-5 rounded-lg' /></div> 

</div>

<div className='mt-10 grid grid-cols-3 gap-8  w-300 ml-20 '>
  {place.map((item) =>(
     <div key={item.id} className='w-80 h-50 rounded-xl border overflow-hidden'>
        <img src={item.img} className='w-full  h-40 ' />
        <p className='text-black font-medium ml-5 mt-2'>{item.name}</p>
     </div>
  ))}

</div>



<div data-aos="fade-right"  className='w-95 h-30 bg-white bg-cover rounded-lg mt-15 ml-30 p-5'
 style={{ backgroundImage: `url(${photo5})` }}>
  <p className='font-bold text-6xl'> <span className='text-blue-700'>Travel</span> Stats</p>

 </div>

 <div>

 </div>


 <div className='flex justify-between w-230  ml-40'>

    <div  data-aos="flip-left" className='w-60 h-20 bg-teal-400 rounded-xl ml-5 mt-5 border-6 border-white shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105'>
      <p className='text-white font-medium text-center text-2xl mt-5'>12 + Countries</p>
  </div>

   <div data-aos="flip-left" className='w-60 h-20 bg-orange-300 rounded-xl ml-5 mt-5 border-6 border-white shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105'>
      <p className='text-white font-medium text-center text-2xl mt-5'>30 + Cities</p>
  </div>

   <div data-aos="flip-left" className='w-60 h-20 bg-teal-400 rounded-xl ml-5 mt-5 border-6 border-white shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105'>
      <p className='text-white font-medium text-center text-2xl mt-5'>50 + Videos</p>
  </div>

 </div>

  <div data-aos="fade-right" className='w-110 h-60 bg-white bg-cover rounded-lg mt-15 ml-30 p-5 '
 style={{ backgroundImage: `url(${photo5})` }}>
  <p className='font-bold text-6xl'> <span className='text-blue-700'>My Best</span> Tarvel Moments </p>

 </div>

 <iframe width="560" height="315" src="https://www.youtube.com/embed/EEeu7-xJX_c?si=i_ESyz9vsToUIpQ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
 className='w-160 h-80  mr-10 float-right -mt-60' 
 ></iframe>
<div className='-mt-70'>
<Subscribe /></div>
   
    </div>
  )
}

export default About