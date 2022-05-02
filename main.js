let id;
let quo;
const quote = document.querySelector("#quote")
const title = document.querySelector(".advice--title")
function advice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data => {
         id = data.slip.id;
         quo = data.slip.advice;
         title.innerHTML = `ADVICE  #${id}`
         quote.innerHTML = quo
    })
}
const roll = document.querySelector(".advice--cube");
roll.addEventListener('click', ()=>{
    advice()
})
advice()