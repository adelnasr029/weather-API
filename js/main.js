//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getRandomPic)

function getRandomPic(){
    const url = 'https://api.weatherapi.com/v1/current.json?key=73709cdbefb0492baed155524240202&q=banha&aqi=yes'

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.location.name
        document.querySelector('#currentTemp').innerText = `${data.current.temp_c} C`
        document.querySelector('h3').innerText = data.current.condition.text
        document.querySelector('#date').innerText = data.location.localtime
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}



   