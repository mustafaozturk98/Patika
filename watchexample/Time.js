
let userName = prompt("İsminizi girin :")

let myName = document.querySelector("#myName")

 userName = userName.toLocaleUpperCase()

myName.innerHTML = userName

function showTime() {
    let Clock = new Date().toLocaleTimeString('tr-TR');
    let Day = new Date().toLocaleDateString('tr-TR')
   document.getElementById("myClock").innerHTML = Clock + "  " + Day ; 
}
setInterval(showTime,1000);


