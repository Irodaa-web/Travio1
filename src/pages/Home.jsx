import photo2 from "../images/photo2.jpg";
import photo6 from "../images/photo6.webp"
import photo7 from "../images/photo7.jpg"
import photo8 from "../images/photo8.jpg"
import photo9 from "../images/photo9.jpg"
import photo10 from "../images/photo10.jpg"
import photo11 from "../images/photo11.jpg"
import Subscribe from '../components/Subscribe.jsx';
import { useTranslation } from "react-i18next"

import photo3 from "../images/photo3.jpg";
import photo5 from "../images/photo5.jpg"
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

import photo from "../images/photo26.jpeg"

import useThemeToggle from "../theme.js"

function Home() {
  const { theme } = useThemeToggle();
  const { t } = useTranslation();

  return (
    <div className=' h-full'>

      <div className='h-screen text-center text-white bg-cover pt-32 -mt-30'
        style={{ backgroundImage: `url(${photo2})` }}>
        <p className='text-5xl font-bold mt-20'>
          {t("home.hero.title")}
        </p><br />
        <p className='text-xl'>
          {t("home.hero.desc")}
        </p>
      </div>

      {/* About */}

      <div>
        <div className={` ${theme}-card w-180 h-70 mt-15 ml-10 flex justify-evenly items-center rounded-xl shadow-lg`}>

          <div className='w-60 h-60 rounded-4xl shadow-lg bg-cover'
            style={{ backgroundImage: `url(${photo3})` }} />

          <div className='w-77 h-60 border border-black rounded-l-lg p-5'>
            <p className='text-3xl font-bold'>{t("home.about.title")}</p>
            <p className={` ${theme}-card text-xl font-medium text-gray-800 mt-3`}>
              {t("home.about.name")}
            </p>
            <p className='text-lg font-medium mt-2'>
              {t("home.about.desc")}
            </p>
          </div>
        </div>

        <div className='w-60 h-50 ml-200 -mt-60 text-teal-500 bg-cover rounded-lg'
          style={{ backgroundImage: `url(${photo5})` }}>

          <p className='text-5xl font-bold tracking-[30px] '>
            {t("home.about.read")}
          </p>

          <p className='text-black font-bold text-3xl mt-3'>
            {t("home.about.more")}
          </p>

          <p className='float-right mr-12 font-bold text-5xl tracking-[8px] '>
            {t("home.about.about")}
          </p>

          <p className='float-right  font-bold text-5xl mr-20'>
            {t("home.about.me")}
          </p>

          <Link to="/about">
            <FaAngleRight className='text-5xl float-right  ml-20 -mt-11 text-black' />
          </Link>

        </div>
      </div>

      {/* Destinations */}

      <div className='mt-10 flex justify-between'>

        <div className='mt-30 ml-20'>
          <p className='text-6xl font-bold text-center ml-23'>
            {t("home.destinations.title")}
          </p>

          <p className={`${theme} text-2xl font-medium text-center text-gray-700`}>
            {t("home.destinations.desc")}
          </p>

          <Link to="/destinations"
            className="w-30 h-10 bg-teal-500 rounded-lg flex items-center justify-evenly text-white mt-10 ml-80">
            {t("home.destinations.btn")}
          </Link>
        </div>

        <div className={` ${theme}-card mt-25 mr-40 w-110 h-80 rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:scale-105`}>
          <img src={photo} className='w-full h-55 object-cover' />
          <p className='text-xl font-semibold pl-3'>
            {t("home.card.city")}
          </p>
          <p className="text-sm mt-1 pl-3">
            {t("home.card.info")}
          </p>
          <p className="mt-2 pl-3">
            {t("home.card.desc")}
          </p>
          <button className="text-teal-500 font-medium flex items-center ml-80 -mt-6">
            {t("home.card.btn")}
          </button>
        </div>
      </div>

      {/* Travel Tips */}

      <div className='w-250 h-40 ml-35 '>
        <p className='text-3xl font-medium'>
          {t("home.tips.title")}
        </p>

        <div className='flex justify-between'>

          <div className={` ${theme}-card w-50 h-15 rounded-xl ` }>
            <p className='font-medium text-center p-3'>
              {t("home.tips.tip1")}
            </p>
          </div>

          <div className={` ${theme}-card w-60 h-15 rounded-xl`}>
            <p className='font-medium text-center p-3'>
              {t("home.tips.tip2")}
            </p>
          </div>

          <div className={` ${theme}-card w-55 h-15 rounded-xl`}>
            <p className='font-medium text-center p-3'>
              {t("home.tips.tip3")}
            </p>
          </div>

          <div className={` ${theme}-card w-65 h-15 rounded-xl`}>
            <p className='font-medium text-center p-3'>
              {t("home.tips.tip4")}
            </p>
          </div>

        </div>
      </div>

      {/* Blog */}

      <div>
        <div className='w-80 h-60 ml-30 rounded-xl shadow-lg mt-10 p-5 bg-cover text-black'
          style={{ backgroundImage: `url(${photo5})` }}>
          <p className='text-4xl font-medium'>
            {t("home.blogText")}
          </p>

          <Link to="/blog">
            <FaAngleRight className='text-4xl float-right -mt-8 mr-10 text-black' />
          </Link>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GljTvdEDqJM?si=1QvApj8mHcz_QEMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='float-right -mt-70 mr-30 rounded-lg' ></iframe>
      </div>

      {/* Gallery */}

      <div className='w-full h-70 grid mt-20 grid-cols-3 gap-5'>
        <img src={photo10} className='w-100 h-60' />
        <img src={photo7} className='w-100 h-60' />
        <img src={photo8} className='w-100 h-60' />
        <img src={photo6} className='w-207 h-100 col-span-2 row-span-2' />
        <img src={photo9} className='w-100 h-47.5' />
        <img src={photo11} className='w-100 h-47.5' />
      </div>

      <Subscribe />
    </div>
  )
}

export default Home