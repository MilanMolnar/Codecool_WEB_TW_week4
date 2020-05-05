// let handle = null;


// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function getGuessWord() {
//     let words = ["cat","dog","chicken","glass","universe","Earth","mouse","Steve Jobs","Apple","Heroku","intel","data","engine"]
//     const randomElement = getRandomNumber(0,words.length-1);
//     document.getElementById('guessword').innerText = "Your word: " + words[Math.floor(Math.random() * words.length)]

//     var xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         console.log('xd')
//     };
//     xhttp.open("GET", "/go", true);
//     xhttp.send();

   
// }

// function doIt(seconds) {
//     document.getElementById("timer").innerText = "Your Time:" + seconds+"s";
//     if (seconds > 0) {
//         button.removeEventListener('click',getGuessWord)
//         button.removeEventListener('click',go)
//         button.style.display = 'none'
//       handle = setTimeout(function() {
//         doIt(seconds - 1);
//       }, 1000);
//     } else {
//         button.style.display = 'block'
//         document.getElementById("timer").innerText = "Time's up! :(";
//         document.getElementById('guessword').innerText =  ''
//         button.addEventListener('click',getGuessWord)
//         button.addEventListener('click',go)
//     }
// }
  
// function go() {
//     doIt(5);
// }
  
// function nogo() {
//     clearTimeout(handle);
// }

// const button = document.getElementById('getWord');

// button.addEventListener('click',getGuessWord)
// button.addEventListener('click',go)