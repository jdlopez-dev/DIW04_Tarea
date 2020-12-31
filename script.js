var today = new Date();

document.getElementById("fecha").innerHTML = today.toDateString();

today.setDate(today.getDate() + 2);

document.getElementById("fecha_02").innerHTML = today.toDateString();

var year = today.getFullYear().toString();
document.getElementById("year").innerHTML = year;
