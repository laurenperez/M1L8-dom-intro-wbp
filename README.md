# DOM Intro Exercise: Daily Planet Date
![Scenario](./assets/banner-scenario.png)
You work for the Daily Planet, an astrology site that recently gained popularity after being featured in a TikTok influencer's morning routine. This influx of traffic has inspired your team to expedite some UX updates that have been sitting on the kanban board for awhile.

Currently, the subheading of the site displays the company's location.

![NEW YORK, NY - SUNDAY, MAY 4, 3000](./assets/example1.png)

You've been tasked with the job of updating the codebase so the current date automatically displays on page load in the subheading.

![NEW YORK, NY - SUNDAY, MAY 4, 3000](./assets/example2.png)

---
![Requirements](./assets/banner-requirements.png)
## Deliverable: Today's Date

[Starter Code Live]( https://pages.git.generalassemb.ly/taylor-darneille/dom-intro-exercise/) | [Solution Code Demo](https://pages.git.generalassemb.ly/taylor-darneille/dom-intro-solution/)

([This](https://git.generalassemb.ly/SEI-Standard-Curriculum/M1L8-dom-intro-wbp) repo holds the starter code.)


_Use Javascript to add a hyphen and today's date to the subheading (in all caps)._

_**Do not hardcode the date!** Instead, use the [javascript Date object and it's methods](https://www.w3schools.com/jsref/jsref_obj_date.asp) to render the current date. This way it updates automatically on page load. (Otherwise you'd have to manually update it each day.)_

---
![Tickets](./assets/banner-tickets.png)

![Kanban Board]()

---
![Coding Practice](./assets/banner-coding.png)

### Preparation Steps

### Step 1

 If you haven't noticed already - the javascript isn't linked to the html yet! Throw a `script` tag at the bottom of the body or use the `defer` attribute and put it in the `head`. Make sure it goes below the font awesome `script` tag that is already present in the `head`.

### Step 2

Get today's date and store it in a variable

### Step 3

Use the [`getMonth()`](https://www.w3schools.com/jsref/jsref_getmonth.asp) method on the date to get a number for the month.

### Step 4

Create an array of all 12 months in order, starting with January. Use the `monthIndex` to pull the name of the current month from this array and store it in a variable.

### Step 5

Repeat steps 2 & 3 using `getDay()` to acquire the day of the week.

### Step 6

Use`getDate()` to acquire the date number.

### Step 6

Use`getFullYear()` to acquire the year number.

### Step 7

Use string interpolation or concatenation to build the string you want to add to the subheading. Don't forget the hyphen, spaces, and commas!

### Step 8

Select the DOM element that holds the subheading and store it in a variable.

### Step 9

Use string concatenation to add your date string to the current `innerText` of the subheading. Make it uppercase!

---
#### Inspiration
* [Drops of Jupiter](https://youtu.be/7Xf-Lesrkuc)
* [forecmipsum](https://forcemipsum.com/)
* [Astrology Ipsum](https://iyanna-buffaloe.github.io/astrology-ipsum/)
* [Newspaper Style Design](https://codepen.io/silkine/pen/QWBxVX)
