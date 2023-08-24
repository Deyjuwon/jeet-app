const date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear)

let copy = document.getElementById('copy-right');
copy.innerHTML = `© ${currentYear} Adejuwon Oshindoro`
