const input=document.querySelector('.input-js');
const displayTemp=document.querySelector('.temperature');
const displayHumid=document.querySelector('.humidity');
const displayCity=document.querySelector('.cityName');
const button=document.querySelector('.js-btn');
const weatherImg = document.querySelector('.weather-img');

button.addEventListener("click", getWeather);
input.addEventListener("keydown", function(event) {
  if(event.key==="Enter") {
    getWeather();
  }
})
async function getWeather(){
  const city=input.value;
  input.value="";
  displayTemp.innerHTML="";
  displayHumid.innerHTML="";
  displayCity.innerHTML="";
  if(city==="") return;
  const url=`https://api.weatherapi.com/v1/current.json?key=5ba2956dc55741f98a575242261805&q=${city}`;
  const response= await fetch(url);
  const data= await response.json();

  if(data.error){
  alert("City not found");
  return;
  }
  displayCity.innerHTML=city;
  const condition = data.current.condition.text.toLowerCase();
  console.log(weatherImg.src);
  console.log(condition);
  if(condition.includes("sunny") || condition.includes("clear")){
   weatherImg.src = "sunny.jpeg";
  }
  else if(condition.includes("rain")){
   weatherImg.src = "rainy.avif";
  }
  else if(condition.includes("cloud")){
   weatherImg.src = "sun behind cloud.png";
  }
  displayTemp.innerHTML=`${data.current.temp_c}°C`;
  displayHumid.innerHTML = `Humidity: ${data.current.humidity}%`;
}