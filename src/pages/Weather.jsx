import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = "78bfdd54de1b99b4fd30bd9657d58ad0";

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const result = await res.json();

      if (result.cod !== "200") {
        alert("Shahar topilmadi ❌");
        return;
      }

      // Hozirgi ob-havo
      setData(result.list[0]);

      // 5 kunlik (har kuni 12:00)
      const dailyData = result.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyData);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 relative overflow-hidden -mt-30">

      {/* BLUR SHAPES */}
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40 bottom-10 right-10"></div>

      {/* CARD */}
      <div className="w-[800px] p-6 rounded-3xl backdrop-blur-lg bg-white/70 border border-white/60 shadow-lg text-gray-800 mt-30">

        <h1 className="text-xl font-semibold text-center mb-5 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Weather
        </h1>

        {/* SEARCH */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 rounded-xl px-3 py-2 bg-white/80 outline-none border border-gray-300 placeholder-gray-500"
          />

          <button
            onClick={getWeather}
            className="px-4 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:scale-105 transition"
          >
            Go
          </button>
        </div>

        <div className="flex "> {/* CURRENT WEATHER */}
          {data && data.main && (
            <div className="text-center space-y-4 ">
              <div className="text-5xl">🌤️</div>

              <h2 className="text-lg font-semibold">
                {data.name}
              </h2>

              <p className="text-6xl font-bold">
                {Math.round(data.main.temp)}°
              </p>

              <p className="capitalize text-sm text-gray-600">
                {data.weather[0].description}
              </p>

              <div className="flex justify-between mt-4 text-sm bg-white/50 p-3 rounded-xl w-80">
                <div>
                  <p className="text-gray-500">Humidity</p>
                  <p className="font-semibold">{data.main.humidity}%</p>
                </div>

                <div>
                  <p className="text-gray-500">Wind</p>
                  <p className="font-semibold">{data.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          )}

          {/* FORECAST */}
          {forecast.length > 0 && (
            <div className=" ml-12">
              <h3 className="text-sm mb-3 text-gray-600">
                5-Day Forecast
              </h3>

              <div className="grid grid-cols-3  gap-5 overflow-x-auto">
                {forecast.map((item, index) => (
                  <div key={index} className="   bg-white w-20 h-20  rounded-xl text-center text-sm min-w-[60px]">

                    <p>
                      {new Date(item.dt_txt).toLocaleDateString("en-US", {
                        weekday: "short",
                      })}
                    </p>

                    <div className="text-xl">🌤️</div>

                    <p className="font-semibold">
                      {Math.round(item.main.temp)}°
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;