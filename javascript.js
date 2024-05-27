const numero = document.querySelector(".numero")

function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max- min + 1)) + min;

    numero.innerHTML = result
}