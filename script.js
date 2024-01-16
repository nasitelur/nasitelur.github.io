const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector(".input-keyword");
document.body.style.backgroundImage = "url(img/sky.jpg)";

searchButton.addEventListener("click", function () {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputKeyword.value + "&appid=8895d8a97d04ea086097b7013b17ddd6&units=metric")
    .then((response) => response.json())
    .then((response) => {
      let result = document.querySelector(".result");

      // Menetapkan Kategori Humidity
      let humidityCategory;
      if (response.main.humidity >= 40 && response.main.humidity <= 60) {
        humidityCategory = "Sangat Cocok (Optimal)  ";
      } else if (response.main.humidity > 35 && response.main.humidity <= 39) {
        humidityCategory = "Cukup Cocok (Sedikit Kering)";
      } else if (response.main.humidity > 61 && response.main.humidity <= 65) {
        humidityCategory = "Cukup Cocok (Sedikit Lembap)";
      } else if (response.main.humidity > 0 && response.main.humidity <= 34) {
        humidityCategory = "Tidak Cocok (Terlalu Kering)";
      } else if (response.main.humidity > 66 && response.main.humidity <= 100) {
        humidityCategory = "Tidak Cocok (Terlalu Lembap)";
      } else {
        humidityCategory = "Tidak Diketahui";
      }

      // Hasil
      result.innerHTML = `<h2 class="header">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="card">Kelembapan: ${response.main.humidity}%</span> <span class="card">Suhu: ${response.main.temp}°C</span></h5>
                                <h5> <span class="card">Cuaca: ${response.weather[0].main}</span></h5>
                                <h5><span class="card">Lokasi Koordinat: [${response.coord.lat}, ${response.coord.lon}]</span></h5>
                                <h5><span class="card">Kecocokan untuk Kulit:</span> <span class="card">${humidityCategory}</span></h5>`;
    });

  inputKeyword.value = null;
});
