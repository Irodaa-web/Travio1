import images from "../images/images.png";
import { Slide } from "react-toastify";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subscribe() {
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-200 h-30 mt-110 ml-50">
        <p className="text-2xl font-medium mt-5">
          {t("foot.join")}{" "}
          <span className="text-blue-700">{t("foot.num")}</span>{" "}<br />
          {t("foot.read")} <br />
          {t("foot.today")}
        </p>

        <input
          type="email"
          className="w-60 h-13 border border-gray-600 rounded-lg float-right -mt-15 mr-40 p-5 dark:bg-white dark:text-black"
          placeholder={t("footer.emailPlaceholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="w-30 h-13 bg-teal-500 rounded-lg float-right -mt-15"
          onClick={() => {
            toast.success(t("toast.success"));
            setInputValue("");
          }}
        >
          {t("foot.subscribe")}
        </button>
      </div>

      {/* footer */}
      <div className="w-full h-100 bg-gray-600 border border-gray-500 flex justify-around pt-25">

        {/* card1 */}
        <div className="w-60 h-40 ml-30 text-white">
          <img
            src={images}
            className="w-16 h-16 rounded-full animate-[flip-left-like_5s_ease-in-out_infinite]"
          />
          <p className="logo text-white font-bold text-2xl -mt-12 float-right mr-12">
            Travio
          </p>
          <p className="mt-5 font-medium">{t("footer.desc")}</p>
        </div>

        {/* card2 */}
        <div className="w-50 h-50 text-white leading-9">
          <p className="font-bold text-xl">{t("footer.reference")}</p>
          <p>T: +234 706 507 8544</p>
          <p>E: info@redexplorers.com</p>
          <p>W: www.redexplorers.com</p>
        </div>

        {/* card3 */}
        <div className="w-30 h-50 text-white leading-9">
          <p className="font-bold text-xl">{t("footer.travel")}</p>
          <p>{t("footer.myList")}</p>
          <p>{t("footer.myRequests")}</p>
          <p>{t("footer.contact")}</p>
        </div>

        {/* card4 */}
        <div className="w-40 h-50 text-white leading-9">
          <p className="font-bold text-xl">{t("footer.account")}</p>
          <p>{t("footer.travel")}</p>
          <p>{t("footer.become")}</p>
          <p>{t("footer.how")}</p>
        </div>
      </div>

      <div className="w-full border border-white -mt-20"></div>
      <br />

      <div className="text-white pl-10">
        <p>
          {t("footer.rights")} | {t("footer.terms")} |{" "}
          {t("footer.privacy")} | {t("footer.map")}
        </p>
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

export default Subscribe;