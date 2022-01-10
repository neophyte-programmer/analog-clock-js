const deg = 6
const hr = document.getElementById('hr')
const sec = document.getElementById('sec')
const min = document.getElementById('min')

setInterval(() => {
    let day = new Date()
let h = day.getHours() * 30
let m = day.getMinutes() * deg
let s = day.getSeconds() * deg

hr.style.transform = `rotateZ(${h + (m / 12)}deg)`
min.style.transform = `rotateZ(${m}deg)`
sec.style.transform = `rotateZ(${s}deg)`
})


