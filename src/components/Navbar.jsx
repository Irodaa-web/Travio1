import images from "../images/images.png";
import useThemeToggle from "../theme.js"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import photo from "../images/us.webp"
import photo1 from "../images/uz.png"

import Switch from '@mui/material/Switch';

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };


function Navbar() {
  const { theme, themeToggle } = useThemeToggle();

  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);


  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };
  return (

    <div>
      <div

        className="h-24.5 w-full bg-cover    px-8  fixed  z-2  bg-teal-500/50 backdrop-blur-md"

      >

        <div className="flex  gap-2 mt-3 ">
          <img src={images} alt="logo" className="w-16 h-16 rounded-full animate-[flip-left-like_5s_ease-in-out_infinite]" />
          <span className=" logo text-white font-bold text-2xl mt-2 ">Travio</span>
        </div>


        <div className="w-170 h-8 flex justify-between ml-130  -mt-9 text-white font-medium  ">
          <a href="/" className='w-25 h-10 rounded-xl text-center pt-2 hover:bg-white/80 hover:text-black transition-colors duration-300'> {t("nav.home")}</a>
          <a href="/destinations" className='w-25 h-10 rounded-xl text-center pt-2 hover:bg-white/80 hover:text-black transition-colors duration-300'>{t("nav.destinations")}</a>
          <a href="/blog" className='w-15 h-10 rounded-xl text-center pt-2 hover:bg-white/80 hover:text-black transition-colors duration-300'>{t("nav.blog")}</a>
          <a href="/contact" className='w-15 h-10 rounded-xl text-center pt-2 hover:bg-white/80 hover:text-black transition-colors duration-300'>{t("nav.contact")}</a>
          <a href="/weather" className='w-20 h-10 rounded-xl text-center pt-2 hover:bg-white/80 hover:text-black transition-colors duration-300'>{t("nav.weather")}</a>
          <Switch {...label} color="default"
            checked={theme === "dark"}
            onChange={themeToggle}
          />

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-gray-100 px-3 py-1 rounded-lg  hover:bg-gray-200 ml-10 text-black">
              {i18n.language.toUpperCase()}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white  rounded-lg shadow-lg text-black border overflow-hidden">
                <button onClick={() => changeLang("en")}
    
                  className="p-3 flex justify-evenly  w-full">
                    <img src={photo} className="w-8 h-5 mt-1"/>
                  {t("lang.en")}
                </button>

                <button onClick={() => changeLang("uz")}
                  className="p-3 flex justify-evenly  w-full">
                     <img src={photo1} className="w-8 h-5 mt-1"/>
                  {t("lang.uz")}
                </button>

              </div>
            )}
          </div>


        </div></div>
      <br /><br /><br /><br /><br />



    </div>

  );
}

export default Navbar;