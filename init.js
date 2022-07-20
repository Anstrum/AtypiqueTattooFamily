const overLogo = document.querySelector("#over-logo")
const logo = document.querySelector(".background-logo")

const ninjeaQR = document.querySelector("#ninjea-qrcode")
const liloQR = document.querySelector("#lilo-qrcode")

editBaseStyle();


ninjeaQR.addEventListener("click", () => location.href = "https://www.instagram.com/ninejea_tattoo/")
liloQR.addEventListener("click", () => location.href = "https://www.instagram.com/lilo.tatts/")

function editBaseStyle()
{
    overLogo.style.height = logo.offsetHeight + "px"
    overLogo.style.width = logo.offsetWidth + "px"
    setTimeout(() => editBaseStyle(), (10));
}

