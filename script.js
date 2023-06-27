let d1=document.getElementById("date")
let w1=document.getElementById("weeks")
let m1=document.getElementById("month")
let y1=document.getElementById("year")

let monthsArr=["jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
let weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today=new Date()
 let day=today.getDay()
 w1.innerHTML=weeks[day]
 let month=today.getMonth()
m1.innerHTML=  monthsArr[month]

let yrs=today.getFullYear()
y1.innerHTML=yrs

let dates=today.getDate()
d1.innerHTML=dates


let days=today.getDay()
weekeand[days]
w1.innerHTML=weekeand[days]
