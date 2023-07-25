function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let allGridItems = [ ...document.getElementsByClassName("image")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openpopup = (e) => {
    let gridItemClicked = e.target.closest(".image");
    let clickedImageName = gridItemClicked.id;
    popupBg.classList.add("active");
    popupImg.src = `./assets/3dgallery/img/${clickedImageName}.jpg`;
}

allGridItems.forEach(el => el.addEventListener("click", openpopup));