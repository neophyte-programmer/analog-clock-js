const deg = 6 // each minute and seconds is equal this amount of degrees. 360 / 6 = 60 minutes or seconds
const hr = document.getElementById('hr')
const sec = document.getElementById('sec')
const min = document.getElementById('min')

setInterval(() => {
    let day = new Date()
	let h = day.getHours() * 30 // the current hour * 30degrees to show where it should be on the clock. each hour is 30degrees
	let m = day.getMinutes() * deg  // current minute * the 6degrees to show where it should be on the clock
	let s = day.getSeconds() * deg  // current second * the 6degrees to show where it should be on the clock

	hr.style.transform = `rotateZ(${h + m / 12}deg)`    // so that the hour hand moves with the minute hand so it looks more realistic
	min.style.transform = `rotateZ(${m}deg)`
	sec.style.transform = `rotateZ(${s}deg)`
})
