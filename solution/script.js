const d = new Date()

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const month = months[d.getMonth()]

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day = days[d.getDay()]

const date = d.getDate()

const year = d.getFullYear()

const dString = ` - ${day}, ${month} ${date}, ${year}`
const section = document.querySelector(".subhead")
section.innerText = section.innerText+dString.toUpperCase()