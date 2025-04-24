const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*100)+1;
console.log(answer);

input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13){
    play();
    }
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 100){
        Swal.fire({
            icon: "error",
            title: "ERROR🤦",
            text: "Are you single-celled? Enter the numbers from ONE to HUNDRED!",
            footer: '<a href="https://numbergenerator.org/randomnumbergenerator/1-100">Why do I have this issue?</a>'
        });
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "ERROR🤦",
            text: "Wipe your eyes! It says: Enter a number!",
            footer: '<a href="https://www.quora.com/How-are-numbers-different-from-words-and-letters#:~:text=%3E%20How%20are%20numbers%20different%20from,Words%20are%20representations%20of%20things.">Why do I have this issue?</a>'
        });
    }
    else {
        if (userNumber < answer) {
            Swal.fire("I think the human brain is overrated... Your number is too SMALL");
        }
        else if (userNumber > answer) {
            Swal.fire("Even the earthworm has a better intuition... Your number is too HUGE");
        }
        else {
            Swal.fire({
                title: "You guessed the right number",
                text: "I have nothing to congratulate you on, it took too long.",
                imageUrl: "https://images.pexels.com/photos/5546156/pexels-photo-5546156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                imageWidth: 400,
                imageHeight: 200,
            });
        }
    }
    input.value = "";

}

gsap.from("#container", {
        duration: 1,
        x: -600,
        ease: "power3.out",
})
