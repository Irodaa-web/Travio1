import Subscribe from "../components/Subscribe.jsx"
import photo from "../images/photo.jpg"
import useThemeToggle from "../theme.js"
import { useTranslation } from "react-i18next"

function Blog() {
  const { theme } = useThemeToggle();
  const { t } = useTranslation();

  const blog = [
    { id: 1, name: t("blog.cards.bali"), videoId: "BFS9n4B_2xA" },
    { id: 2, name: t("blog.cards.paris"), videoId: "AQ6GmpMu5L8" },
    { id: 3, name: t("blog.cards.lisbon"), videoId: "hWRmyqrq2MM" },
    { id: 4, name: t("blog.cards.turkey"), videoId: "u5UIU55Ctoo" },
    { id: 5, name: t("blog.cards.maldives"), videoId: "8H6EKcnL6e0" },
    { id: 6, name: t("blog.cards.italy"), videoId: "f-5AIV6rkfI" }
  ];

  const shorts = [
    { id: 1, src: "/videos/video1.mp4" },
    { id: 2, src: "/videos/video1.mp4" },
    { id: 3, src: "/videos/video1.mp4" },
    { id: 4, src: "/videos/video1.mp4" },
  ];

  return (
    <div>
      <div className='h-screen text-center text-white bg-center bg-cover pt-32 -mt-30'
        style={{ backgroundImage: `url(${photo})` }}>
      </div>

      <div className="-mt-20 px-10">
        <div className="flex justify-between items-center mt-40">

          <p className="text-6xl font-bold">
            {t("blog.hero.line1")} <br />
            {t("blog.hero.line2")} <br />
            {t("blog.hero.line3")}
          </p>

          <iframe
            src="https://www.youtube.com/embed/7g3a_GqPo5E"
            title="YouTube video player"
            allowFullScreen
            className="w-[700px] h-[400px] rounded-xl"
          ></iframe>
        </div>

        {/* Video-grid */}
        <div className="mt-20 grid grid-cols-3 gap-8 ">
          {blog.map((item) => (
            <div key={item.id}
              className="w-full bg-gray-100 rounded-2xl shadow-lg p-4 transform transition duration-300 hover:-translate-y-2 hover:scale-105">

              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title="video"
                allowFullScreen
                className="w-full h-40 rounded-lg"
              ></iframe>

              <p className="mt-3 font-semibold text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* travel-shorts */}
        <div className="mt-15 ml-13">
          <h2 className="text-2xl font-bold mb-5">
            {t("blog.shorts")}
          </h2>

          <div className="flex gap-6 overflow-x-auto">
            {shorts.map((item) => (
              <video
                key={item.id}
                src={item.src}
                className="w-65 h-72 rounded-xl object-cover"
                autoPlay
                muted
                loop
              />
            ))}
          </div>

          {/* trending */}
          <div className='mt-15  '>
           <div className="flex"> 
            <iframe src="https://www.youtube.com/embed/yILg2RCBCpI"
              className="rounded-xl m-3  w-120 h-70" allowFullScreen></iframe>
            <p className={`${theme} font-bold text-7xl w-130  pt-15  pl-10`}>
              {t("blog.trending.turkey")}
            </p></div> 

          <div className="flex"> 
             <p className={`${theme} font-bold text-7xl w-130  pt-15`}>
              {t("blog.trending.asia")}
            </p>

              <iframe src="https://www.youtube.com/embed/2IUzS59fTZA?si=-WT2jdQJ7ZW5e4oz"
              className="rounded-xl m-3 w-120 h-70" allowFullScreen></iframe>
           </div> 

          <div className="flex"> <iframe src="https://www.youtube.com/embed/Sfe2mQ6hc0c"
              className="rounded-xl m-3 w-120 h-70" allowFullScreen></iframe>
            <p className={`${theme} font-bold text-7xl w-130  pt-15 pl-10 `}>
              {t("blog.trending.europe")}
            </p></div> 
          </div>
        </div>

        <div className="w-316 -mt-90 -ml-10">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default Blog;