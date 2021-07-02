// selectores
const mouseCursor = document.querySelector('.cursor')
const navLinks = document.querySelectorAll('.nav-links li')
const title = document.getElementById('title')
const img = document.querySelector('.front-cover')

console.log(title)
// event listeners
window.addEventListener('mousemove', cursor)

// funciones
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

title.addEventListener('mouseleave', () => {
    //mouseCursor.classList.remove('link-grow')
    title.classList.remove('hovered-title')
})
title.addEventListener('mouseover', () => {
    //mouseCursor.classList.add('link-grow')
    title.classList.add('hovered-title')
})

img.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('img-grow')
})
img.addEventListener('mouseover', () => {
    mouseCursor.classList.add('img-grow')
})

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
})