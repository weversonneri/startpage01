//User name
var username = "Weverson";

const determineGreet = hours => document.getElementById("greetings").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`;

// The same as "onload"
window.addEventListener('load', (event) => {
  let today = new Date();
  let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  determineGreet(new Date().getHours());
  getContent()

});

setInterval(function () {
  var today = new Date();
  // var day = (new Date()).toString().split(' ').splice(0, 4).join(' ');
  var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById("hour").innerHTML = `${time}`;
}, 1000);

function displayTime(time) {
  document.getElementById("hour").innerHTML = time;
}

async function getContent() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=${apikey}`);
    const result = await response.json();

    show(result);
    console.log(result)

  } catch (error) {
    console.error(error);
  }
}


const show = (result) => {

  const temp = Math.floor(result.main["temp"] - 273);
  const description = result.weather[0].description
  const icon = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
  //console.log(temp)
  //console.log(description)

  // document.querySelector('.city-description h3').innerHTML = `${result.name}, ${result.sys.country}`
  document.querySelector('#celsius').innerHTML = `${temp} ºC`
  document.querySelector('#description').innerHTML = `${description}`
  document.querySelector('#icon').innerHTML = `<img class="city-icon" src="${icon}">`

}

