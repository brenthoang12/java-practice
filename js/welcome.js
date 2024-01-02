const time = new Date().getHours();
let fixedWelcome = ", what's on your mind? 💭";
let greeting;
if (time < 12){
    greeting = "Good morning" + fixedWelcome;
} else if (time < 18){
    greeting = "Good afternoon" + fixedWelcome;
} else{
    greeting = "Good evening" + fixedWelcome;
}
document.getElementById("testrun").innerHTML = greeting;