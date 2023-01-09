

// todo -------------------------- IMPORTS -----------------------------------

import { changerpage, } from "./modules/fonctions.js"
import { recits, imagespixelart, son } from "./modules/variables.js"
export const genius = $

// todo -------------------------- MAIN -----------------------------------

export let pageactuelle = "acceuil"
export let contenupagehtml = document.querySelector("#contenupagehtml")
let blockpixelactif = false
let countimgpixel = 1
// todo -------------------------- EVENTS -----------------------------------

// todo--------- events menu
genius.event("#acceuil", "mousedown", () => {
    changerpage("acceuil", contenupagehtml)
})

genius.event("#articles", "mousedown", () => {
    pageactuelle = "articles"
    changerpage("articles", contenupagehtml)
})

genius.event("#creations", "mousedown", () => {
    pageactuelle = "creations"
    changerpage("creations", contenupagehtml)
    // todo-------- events blockpixelart
    genius.event("#blockpixelart", "mousedown", () => {
        let img = genius.element("img", ".imgpixel")
        contenupagehtml.appendChild(img)
        img.src = `./ressources/img/pixelart/${countimgpixel}.png`
        document.querySelector("#blockpixelart").style.pointerEvents = "none"
        document.querySelector("#blockpixelart").style.opacity = 0


    })
})






// todo-------- events logo powered
genius.event("#logoinfo", "mousedown", () => {
    window.open("https://www.npmjs.com/package/@rom13/genius-browser")
})


// todo -------------------------- EVENTS GLOBAL -----------------------------------


onload = () => {
    particlesJS.load('particles', 'json.json')
}

// todo -------------------------- EVENTS SON -----------------------------------

let li = document.querySelectorAll("li")
li.forEach(element => {
    /* console.log(element.nodeName); */
    element.addEventListener("click", function () {
        son.boutton.volume = 0.1
        son.boutton.play()
    });
});



