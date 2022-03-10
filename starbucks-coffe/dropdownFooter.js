function showDiv(id) {
    let display = document.getElementById(id).style.display

    let divs = document.querySelectorAll('.links-mobile-tags')
    divs.forEach((div) => {
        div.style.display = 'none'
    })

    if(display == 'flex')
        document.getElementById(id).style.display = 'none'
    else 
        document.getElementById(id).style.display = 'flex'
}

