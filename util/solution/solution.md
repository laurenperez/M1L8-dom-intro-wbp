```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../style.css">
    <title>DOM Intro Exercise</title>
    <script src="https://kit.fontawesome.com/a3dcd74c33.js" crossorigin="anonymous" defer></script>
    <script src="script.js" defer></script>
</head>
```


```javascript
const d = new Date()

const monthIndex = d.getMonth()
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const month = months[monthIndex]

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day = days[d.getDay()]

const date = d.getDate()
const year = d.getFullYear()

const dateString = ` - ${day}, ${month} ${date}, ${year}`
const section = document.querySelector(".subhead")

section.innerText = section.innerText+dateString.toUpperCase()
```