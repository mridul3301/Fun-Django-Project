// detecting button press
for(var i = 0; i < document.querySelectorAll(".kit").length ;i++){

    document.querySelectorAll(".kit")[i].addEventListener("click", function(){
        
        
        var buttonInnerHtml = this.innerText;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);


       
    })

}

//detecting word press

document.addEventListener("keypress",function(event){
    var wordPressed = (event.key).toUpperCase();
    makeSound(wordPressed);
    buttonAnimation(wordPressed);
})

//generating sound

function makeSound(key){
    switch (key) {
        case "W":
            var tom1 = new Audio("/static/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio("/static/sounds/tom-2.mp3");
            tom2.play();
        break;

        case "S":
            var tom3 = new Audio("/static/sounds/tom-3.mp3");
            tom3.play();
        break;

        case "D":
            var tom4 = new Audio("/static/sounds/tom-4.mp3");
            tom4.play();
        break;
    
        case "J":
            var snare = new Audio("/static/sounds/snare.mp3");
            snare.play();
        break;

        case "K":
            var crash = new Audio("/static/sounds/crash.mp3");
            crash.play();
        break;

        case "L":
            var bass = new Audio("/static/sounds/kick-bass.mp3");
            bass.play();
        break;

        default: console.log(buttonInnerHtml)
            break;
    }


}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+(currentKey.toLowerCase()))
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}