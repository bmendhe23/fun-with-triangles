//page 1 Is Triangle javascript

var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnCheckTriangle = document.querySelector("#btn-check-triangle");
var showMessageIsTriangle = document.querySelector("#show-message-is-Triangle");

btnCheckTriangle.addEventListener("click",isTriangleEventHandler);

function isTriangleEventHandler() {
    angle1 = parseInt(angle1.value);
    angle2 = parseInt(angle2.value);
    angle3 = parseInt(angle3.value);

    if((angle1 + angle2 + angle3)===180) {
        showMessageIsTriangle.innerText = "Yayy, the angles form a triangle";
    } else {
        showMessageIsTriangle.innerText = "Oh Oh!, the angles do not form a triangle"
    }
}

//page 2 Quiz Javascript

var q1Option1 = document.querySelector("#q1-option1");
var q1Option2 = document.querySelector("#q1-option2");
var q1Option3 = document.querySelector("#q1-option3");
var q2Option1 = document.querySelector("#q2-option1");
var q2Option2 = document.querySelector("#q2-option2");
var q2Option3 = document.querySelector("#q2-option3");


