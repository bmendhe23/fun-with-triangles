const valueOfBase = document.querySelector("#value-of-base");
const valueOfHeight = document.querySelector("#value-of-height");
const btnSubmit = document.querySelector("#btn-submit");
const outputBox = document.querySelector("#show-message");

btnSubmit.addEventListener("click", calculateArea);

function calculateArea() {
    const base = parseInt(valueOfBase.value);
    const height = parseInt(valueOfHeight.value);
    const areaOfTriangle = 0.5*(base*height);
    
    outputBox.innerText = "The area of the triangle is " + areaOfTriangle + " cm²";
}