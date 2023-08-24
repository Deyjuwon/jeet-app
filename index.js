const date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear)

let copy = document.getElementById('copy-right');
copy.innerHTML = `© ${currentYear} Adejuwon Oshindoro`
function changeToHello(event) {
    event.preventDefault();
    var input = document.getElementById("username");
    var password = document.getElementById("h-password");
    password.style.display = "block";

}