const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=108fd45a2cde40bcaea174646241407&q=London&aqi=no'
const input = document.getElementById("input")
function submitHandler(e) {
    e.preventDefault();
    console.log("input : " + input.value)



    fetch(`http://api.weatherapi.com/v1/current.json?key=108fd45a2cde40bcaea174646241407&q=${input.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            //  location
            const location = document.getElementById('location')
            location.innerText ="Locatin : " + data.location.name


            // temperature
            const temperature = document.getElementById("temperature")
            temperature.innerText = "Temp :" + data.current.temp_c + "'c"

            // humidity
            const humidity = document.getElementById("humidity")
            humidity.innerText ="Humdity : " + data.current.humidity

            // wind
            const wind = document.getElementById("wind")
            wind.innerText ="Wind : "+ data.current.wind_kph
            // icon
            // console.log(data.current.condition.icon)
            const weatherimage = document.getElementById('weatherimage');
            weatherimage.src = data.current.condition.icon
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

