import photo from "../images/photo!.jpg";
import photo1 from "../images/photo7.jpg";
import photo2 from "../images/photo9.jpg";
import photo3 from "../images/photo13.webp";
import photo4 from "../images/photo14.webp";
import photo5 from "../images/photo15.jpg";
import photo6 from "../images/photo23.webp";

import Subscribe from "../components/Subscribe";

import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="h-screen text-center text-white bg-center bg-cover pt-32 -mt-30"
        style={{ backgroundImage: `url(${photo})` }}
      />

      {/* FORM */}
      <div className="w-180 h-70 ml-60 mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(t("contact.form.success"));
            e.target.reset();
          }}
        >
          <div className="flex justify-evenly">
            <input
              type="text"
              name="fname"
              placeholder={t("contact.form.firstName")}
              required
              className="w-80 h-10 border-2 border-gray-600 rounded-xl px-4  dark:bg-white
 focus:border-teal-600 focus:outline-none focus:text-teal-600 focus:-translate-y-2 focus:shadow-lg transition duration-300"
            />

            <input
              type="text"
              name="lname"
              placeholder={t("contact.form.lastName")}
              required
              className="w-80 h-10 border-2 border-gray-600 rounded-xl px-4 dark:bg-white 
 focus:border-teal-600 focus:outline-none focus:text-teal-600 focus:-translate-y-2 focus:shadow-lg transition duration-300"
            />
          </div>

          <div className="flex justify-evenly mt-7">
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              required
              className="w-80 h-10 border-2 border-gray-600 rounded-xl px-4 dark:bg-white 
 focus:border-teal-600 focus:outline-none focus:text-teal-600 focus:-translate-y-2 focus:shadow-lg transition duration-300"
            />

            <input
              type="text"
              name="subject"
              placeholder={t("contact.form.subject")}
              required
              className="w-80 h-10 border-2 border-gray-600 rounded-xl px-4 dark:bg-white 
 focus:border-teal-600 focus:outline-none focus:text-teal-600 focus:-translate-y-2 focus:shadow-lg transition duration-300"
            />
          </div>

          <textarea
            name="text"
            placeholder={t("contact.form.message")}
            className="w-167 h-22 border-2 border-gray-600 rounded-xl ml-6 mt-6 px-4 py-2 dark:bg-white 
 focus:border-teal-600 focus:outline-none focus:text-teal-600 focus:-translate-y-2 focus:shadow-lg transition duration-300"
          />

          <button className="w-30 h-13 bg-teal-500 rounded-lg ml-143 mt-5">
            {t("contact.form.send")}
          </button>
        </form>
      </div>

      {/* IMAGES */}
      <div className="container w-full h-40 flex overflow-hidden mt-10">
        <img src={photo6} className="w-56 h-40" />
        <img src={photo1} className="w-56 h-40" />
        <img src={photo2} className="w-56 h-40" />
        <img src={photo3} className="w-56 h-40" />
        <img src={photo4} className="w-56 h-40" />
        <img src={photo5} className="w-56 h-40" />
      </div>

      <div className="-mt-90">
        <Subscribe />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        transition={Slide}
      />
    </div>
  );
}

export default Contact;