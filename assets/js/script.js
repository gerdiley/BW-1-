// REVEAL

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



// REVEAL TO RIGHT

function revealToRight() {
    var reveals = document.querySelectorAll(".revealToRight");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeToRight");
        } else {
            reveals[i].classList.remove("activeToRight");
        }
    }
}

window.addEventListener("scroll", revealToRight);



// REVEAL BTN

function revealBtn() {
    var reveals = document.querySelectorAll(".revealBtn");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeBtn");
        } else {
            reveals[i].classList.remove("activeBtn");
        }
    }
}

window.addEventListener("scroll", revealBtn);




// REVEAL GRADUALE

function revealGrad() {
    var reveals = document.querySelectorAll(".revealGrad");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeGrad");
        } else {
            reveals[i].classList.remove("activeGrad");
        }
    }
}

window.addEventListener("scroll", revealGrad);



// REVEAL FORM

function revealForm() {
    var reveals = document.querySelectorAll(".revealForm");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeForm");
        } else {
            reveals[i].classList.remove("activeForm");
        }
    }
}

window.addEventListener("scroll", revealForm);



// REVEAL INFO

function revealInfo() {
    var reveals = document.querySelectorAll(".revealInfo");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeInfo");
        } else {
            reveals[i].classList.remove("activeInfo");
        }
    }
}

window.addEventListener("scroll", revealInfo);