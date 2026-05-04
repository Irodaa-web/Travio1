import { useState } from 'react'
import { useTranslation } from "react-i18next"

import photo1 from "../images/photo1.webp"
import photo2 from "../images/photo27.webp"
import photo3 from "../images/photo12.webp"
import photo4 from "../images/photo6.webp"
import photo5 from "../images/photo11.jpg"
import photo6 from "../images/photo13.webp"
import photo7 from "../images/photo14.webp"
import photo8 from "../images/photo15.jpg"
import photo9 from "../images/photo16.jpg"
import photo10 from "../images/photo17.jpg"
import photo11 from "../images/photo18.jpg"
import photo12 from "../images/photo19.webp"
import photo13 from "../images/photo20.jpg"
import photo14 from "../images/photo10.jpg"
import photo15 from "../images/photo23.webp"
import photo16 from "../images/photo22.webp"
import photo17 from "../images/photo23.webp"
import photo18 from "../images/photo24.webp"
import photo19 from "../images/photo25.jpg"
import photo20 from "../images/photo26.jpeg"
import photo from "../images/photo1.jpg"

import tokio from "../images/tokio.jpg"
import indonesia from "../images/indonesia.jpg"
import china from "../images/china.jpg"
import albania from "../images/albania.jpg"
import egypt from "../images/egypt.jpg"
import luxembourg from "../images/luxembourg.jpg"

import Subscribe from "../components/Subscribe.jsx"
import { texts } from "./Text.js"

import { FaLock } from "react-icons/fa";
import useThemeToggle from "../theme.js"

function Destinations() {
  const [search, setSearch] = useState("")
  const [selectedItem, setSelectedItem] = useState(null);
  const { theme } = useThemeToggle();
  const { t } = useTranslation();

  const data = [
    { id: 1, name: "Istanbul", img: photo1, price: t("dest.price.medium"), bestSeason: t("dest.season.springFall"), description: t("dest.istanbul") },
    { id: 2, name: "London", img: photo2, price: t("dest.price.expensive"), bestSeason: t("dest.season.summer"), description: t("dest.london") },
    { id: 3, name: "Dubai", img: photo3, price: t("dest.price.expensive"), bestSeason: t("dest.season.winter"), description: t("dest.dubai") },
    { id: 4, name: "Paris", img: photo4, price: t("dest.price.expensive"), bestSeason: t("dest.season.springFall"), description: t("dest.paris") },
    { id: 5, name: "Colosseum", img: photo5, price: t("dest.price.medium"), bestSeason: t("dest.season.springFall"), description: t("dest.colosseum") },
    { id: 6, name: "Bali", img: photo6, price: t("dest.price.medium"), bestSeason: t("dest.season.aprOct"), description: t("dest.bali") },
    { id: 7, name: "Tashkent", img: photo7, price: t("dest.price.cheap"), bestSeason: t("dest.season.springFall"), description: t("dest.tashkent") },
    { id: 8, name: "Singapore", img: photo8, price: t("dest.price.expensive"), bestSeason: t("dest.season.febApr"), description: t("dest.singapore") },
    { id: 9, name: "Sidney", img: photo9, price: t("dest.price.expensive"), bestSeason: t("dest.season.decFeb"), description: t("dest.sidney") },
    { id: 10, name: "Marrakech", img: photo10, price: t("dest.price.medium"), bestSeason: t("dest.season.springFall"), description: t("dest.marrakech") },
    { id: 11, name: "Kyoto", img: photo11, price: t("dest.price.medium"), bestSeason: t("dest.season.springAutumn"), description: t("dest.kyoto") },
    { id: 12, name: "Lisbon", img: photo12, price: t("dest.price.medium"), bestSeason: t("dest.season.springSummer"), description: t("dest.lisbon") },
    { id: 13, name: "Tokyo", img: photo13, price: t("dest.price.expensive"), bestSeason: t("dest.season.springAutumn"), description: t("dest.tokyo") },
    { id: 14, name: "New York City", img: photo14, price: t("dest.price.expensive"), bestSeason: t("dest.season.springFall"), description: t("dest.nyc") },
    { id: 15, name: "Prague", img: photo15, price: t("dest.price.medium"), bestSeason: t("dest.season.springFall"), description: t("dest.prague") },
    { id: 16, name: "Cape Town", img: photo16, price: t("dest.price.medium"), bestSeason: t("dest.season.novMar"), description: t("dest.capetown") },
    { id: 17, name: "Venice", img: photo17, price: t("dest.price.expensive"), bestSeason: t("dest.season.springFall"), description: t("dest.venice") },
    { id: 18, name: "Athens", img: photo18, price: t("dest.price.medium"), bestSeason: t("dest.season.springFall"), description: t("dest.athens") },
    { id: 19, name: "Barcelona", img: photo19, price: t("dest.price.expensive"), bestSeason: t("dest.season.springSummer"), description: t("dest.barcelona") },
    { id: 20, name: "Rome", img: photo20, price: t("dest.price.expensive"), bestSeason: t("dest.season.springFall"), description: t("dest.rome") }
  ];

  const plan = [
    { id: 1, name: "tokio", img: tokio },
    { id: 2, name: "indonesia", img: indonesia },
    { id: 3, name: "luxembourg", img: luxembourg },
    { id: 4, name: "china", img: china },
    { id: 5, name: "egypt", img: egypt },
    { id: 6, name: "albania", img: albania }
  ]

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='min-h-screen -mt-6'>

      <div className='h-screen text-center text-gray-600 bg-cover pt-32 -mt-30'
        style={{ backgroundImage: `url(${photo})` }}>
      </div>

      <p className='text-4xl font-bold text-center pt-20'>
        {t("dest.title")}
      </p>

      {/* INPUT */}
      <div className='flex justify-center mt-6'>
        <input
          type="text"
          placeholder={t("dest.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-80 h-10 border rounded-lg p-3 shadow-md'
        />
      </div>

      <p className='text-3xl font-bold mt-10 ml-10'>
        {t("dest.visited")}
      </p>

      {/* CARDS */}
      <div className='grid grid-cols-3 gap-6 mt-10 px-10'>
        {filtered.map(item => (
          <div key={item.id} className={`${theme}-card w-90 h-75 rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:scale-105`}>

            <img src={item.img} className='w-full h-45' />
            <h3 className="text-xl font-semibold pl-3">{item.name}</h3>

            <p className="text-sm mt-1 pl-3">
              ⭐ 4.8 | 💰 {item.price} | 🕒 {item.bestSeason}
            </p>

            <p className="mt-2 pl-3">{item.description}</p>

            <button
              className="text-teal-500 font-medium flex items-center ml-60"
              onClick={() => setSelectedItem(item)}
            >
              {t("dest.read")}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className='fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm text-black'>
          <div className={`${theme} bg-white w-120 max-h-[80vh] p-6 rounded-xl relative overflow-y-auto`}>

            <button
              className="absolute top-2 right-2"
              onClick={() => setSelectedItem(null)}
            >✕</button>

            <h2 className="text-2xl font-bold mb-3">{selectedItem.name}</h2>
            <img src={selectedItem.img} className="w-full h-48 object-cover rounded-lg mb-3" />
            <p className="text-xl pb-3">{selectedItem.description}</p>
            <p>{texts[selectedItem.id]}</p>
          </div>
        </div>
      )}

      <p className='text-3xl font-bold mt-10 ml-10'>
        {t("dest.coming")}
      </p>

      <div className='grid grid-cols-3 gap-6 mt-10 px-10'>
        {plan.map((e) => (
          <div key={e.id} className='relative w-90 h-55 rounded-xl overflow-hidden'>

            <img src={e.img} className='w-full h-full object-cover grayscale brightness-75' />

            <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
              <FaLock className='text-3xl mb-2' />
               {/* <p className='text-lg font-semibold'>
                {t(`dest.${e.name}`)}
              </p>  */}
            </div>

            <h3 className="absolute bottom-2 left-3 text-white text-xl font-bold">
             {t(`dest.${e.name}`)}
            </h3>
          </div>
        ))}
      </div>

      <div className="-mt-95">
        <Subscribe />
      </div>

    </div>
  )
}

export default Destinations