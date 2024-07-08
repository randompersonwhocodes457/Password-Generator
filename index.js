const passOne = document.querySelector('.one')
const passTwo = document.querySelector('.two')

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const genPassword = () => {
    let passwordOne = characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)]
    let passwordTwo = characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)] + characters[Math.floor(Math.random()*characters.length)]
    passOne.textContent = passwordOne
    passTwo.textContent = passwordTwo
    
}