// Date & Time

let now = new Date();
let dateTime = document.querySelector("#date-time");
let hour = now.getHours();
let minute = now.getMinutes;

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();
let months = ["Jan",
"Feb",
"March",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sept",
"Oct",
"Nov",
"Dec",];
let month = months[now.getMonth];
let year = now.getFullYear();
dateTime.innerHTML = `Last updated at ${hour}:${minute}, on ${day}, ${month} ${date}, ${year}`;