


window.addEventListener('load', function () {
    const paragraph = document.getElementById('flightStatus');
    const colorInBack = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')
    const button = document.getElementById('takeoff')
    button.addEventListener("click", function () {
        let response = window.confirm(' Confirm that the shuttle is ready')
        if (response) {
            paragraph.innerHTML = 'Shuttle in flight'
            colorInBack.style.backgroundColor = 'blue'
            height.innerHTML = 10000
        }

    })
    const landingButton = document.getElementById('landing')
    landingButton.addEventListener("click", function () {
        window.alert('The shuttle is landing. Landing gear engaged.')
        paragraph.innerHTML = "The shuttle has landed."
        colorInBack.style.backgroundColor = 'green'
        height.innerHTML = 0

    })
    const abortButton = document.getElementById('missionAbort')
    abortButton.addEventListener("click", function () {
        let response = window.confirm('Confirm that you want to abort the mission.')
        if (response) {
            paragraph.innerHTML = 'Mission Aborted.'
            colorInBack.style.backgroundColor = 'red'
            height.innerHTML = 0
        }
    })
   
})


const up = document.getElementById('up')
const down = document.getElementById('down')
const left = document.getElementById('left')
const right = document.getElementById('right')
const rocket = document.getElementById('rocket')
rocket.style.position = "absolute";
rocket.style.bottom = "0px"

left.addEventListener("click", function(){
    rocket.style.left = `${-10}px`
})

// rocket.style.left = '5px'
// rocket.style.rght = '35px'
// rocket.style.bottom = '35px'
// rocket.style.top = '50px'





// Write your JavaScript code here.
// Remember to pay attention to page loading!
