let imgElement = document.getElementById("imgElement");
let plusElement = document.getElementById("plusElement");
let minusElement = document.getElementById("minusElement");
let spanElement = document.getElementById("spanElement");

plusElement.addEventListener('click', function(){
    let spanEl = spanElement.textContent;
    let addSpan = parseInt(spanEl) + 1;
    spanElement.textContent = addSpan;
    imgElement.style.height = addSpan + "px";
});


minusElement.addEventListener('click', function(){
    let spanEl = spanElement.textContent;
    let minusSpan = parseInt(spanEl) - 1;
    spanElement.textContent = minusSpan;
    imgElement.style.height = minusSpan + "px";
});