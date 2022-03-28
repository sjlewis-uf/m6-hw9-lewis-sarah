//get #locationi and button elements
var weather = document.getElementByID('weather')
var form = document.querySelector('form')

//attach fetch call to button element on click
form.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log(locationInput.value)

  fetch('https://api.openweathermap.org/data/2.5/weather?appid=7999648ce6c9798f64a2b1ee96745b27&units=imperial&q=' + locationInput.value)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
    var div = document.createElement('div')
    var h2 = document.createElement('h2')
    h2.textContent = data.city_name + ", " + data.state_code

    div.appendChild(h2)
    weather.appendChild(div)


  })
})



main.temp
main.feels_like
