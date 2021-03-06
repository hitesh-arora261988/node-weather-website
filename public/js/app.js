const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const icon= document.querySelector('#weather_icon');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;


    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    icon.style.display= "none"


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                icon.src= data.weatherIcon
                icon.style.display="inline-block"
            }
        })
    })
})