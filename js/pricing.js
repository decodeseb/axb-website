const value = document.querySelector("#output");
const input = document.querySelector("#priceInput");

value.textContent = input.value;

input.addEventListener("input", (event) => {

    if(event.target.value === "0"){
        value.textContent = "$205.00"
    } else if(event.target.value === "25") {
        value.textContent = "$305.00"
    } else if(event.target.value === "50") {
        value.textContent = "$405.00"
    } else if (event.target.value === "75"){
        value.textContent = "$505.00"
    } else if (event.target.value === "100"){
        value.textContent = "$539.00"
    }
    /* value.textContent = event.target.value; */
});