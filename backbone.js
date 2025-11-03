const CatPicture = document.getElementsByClassName("CatPicture")
const MeowCounter = document.getElementsByClassName("MeowCounter")

var Meows = 0

function RandomDec(min, max) {
    return Math.random() * (max - min) + min;
}

function UpdateDocument(){
    MeowCounter[0].textContent = "Meows: " + Meows;

    // Instant scale-up
    CatPicture[0].style.transition = "none";
    CatPicture[0].style.transform = "scale(1.1)";

    // Shrink after a while
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            CatPicture[0].style.transition = "transform .5s ease-in-out";
            CatPicture[0].style.transform = "scale(1)";
        });
    });
}

// Plays some sound
function PlayRandomSound() {
    const Int = Math.round(RandomDec(1,8));
    let sound = new Audio("Sounds/MeowNormal" + Int + ".mp3");
    sound.playbackRate = RandomDec(0.8,1.4);
    sound.play();
    Meows++;
    UpdateDocument()
}


UpdateDocument()
