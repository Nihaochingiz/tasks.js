/*
Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

Can you fix this for us? You know, it's pretty critical code...

Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.
*/

//Было
function launchAll(launchMissile) {
    for(var i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(i);
      }, i * 1000);
      
    }
  }

//Стало
  function launchAll(launchMissile) {
    for(let i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(i);
      }, i * 1000);
      
    }
  }

/*Для var не существует блочной области видимости 
Область видимости переменных var ограничивается 
либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока.
*/

/* 
let response = fetch('https://api.letscover.me/activity/users?key=LEABHOV2FM9ROZSLUAXFA2TEOIFV9C')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);

  let data = "https://api.letscover.me/activity/users?key=LEABHOV2FM9ROZSLUAXFA2TEOIFV9C"
});

fetch("https://api.letscover.me/activity/users?key=LEABHOV2FM9ROZSLUAXFA2TEOIFV9C").then(resp => {console.log(resp)})



let response = await fetch( "https://api.letscover.me/activity/users?key=LEABHOV2FM9ROZSLUAXFA2TEOIFV9C");

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
} else {
  console.log("Ошибка HTTP: " + response.status);
}
*/
let url = 'https://api.letscover.me/activity/users?key=LEABHOV2FM9ROZSLUAXFA2TEOIFV9C';
let response = await fetch(url);

let commits = await response.json(); // читаем ответ в формате JSON

console.log(commits);