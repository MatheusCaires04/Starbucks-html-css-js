let time = 5000,
    currentImageIndex = 0,
    currentImageMobileIndex = 0,
    images = document
                .querySelectorAll("#slider img"),
    imagesMobile = document
                .querySelectorAll("#slider-mobile img")
    max = images.length,
    maxMobile = imagesMobile.length,
    tela = document.querySelector('header').clientWidth;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")
    imagesMobile[currentImageMobileIndex]
        .classList.remove("selected-mobile")
    console.log(tela)

    currentImageIndex++
    currentImageMobileIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    if(currentImageMobileIndex >= maxMobile)
    currentImageMobileIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
    images[currentImageMobileIndex]
        .classList.add("selected-mobile")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)