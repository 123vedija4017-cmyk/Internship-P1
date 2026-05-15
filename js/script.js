const roles = [
    "Web Developer",
    "Frontend Developer",
    "MERN Learner",
    "UI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingText =
document.getElementById("typing-text");

function typeEffect(){

    currentText =
    roles[roleIndex];

    if(!isDeleting){

        typingText.textContent =
        currentText.substring(
        0,
        charIndex++
        );

        if(charIndex >
        currentText.length){

            isDeleting = true;
        }

    }

    else{

        typingText.textContent =
        currentText.substring(
        0,
        charIndex--
        );

        if(charIndex === 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex ===
            roles.length){

                roleIndex = 0;
            }
        }
    }

    setTimeout(
    typeEffect,
    isDeleting ? 60 : 120
    );
}

typeEffect();

// CONTACT FORM VALIDATION

const form =
document.getElementById(
"contactForm"
);

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById(
"name"
).value;

const email =
document.getElementById(
"email"
).value;

const subject =
document.getElementById(
"subject"
).value;

const message =
document.getElementById(
"message"
).value;

if(
name === "" ||
email === "" ||
subject === "" ||
message === ""
){
alert(
"Please fill all fields!"
);

return;
}

alert(
"Message Sent Successfully!"
);

form.reset();

});
}