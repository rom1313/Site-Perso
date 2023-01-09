

// todo -------------------------- IMPORTS -----------------------------------

import { changerpage, } from "./modules/fonctions.js"
import { recits } from "./modules/variables.js"
const genius = $

// todo -------------------------- MAIN -----------------------------------

export let pageactuelle = "acceuil"
export let contenupagehtml = document.querySelector("#contenupagehtml")

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
})

// todo-------- events logo powered
genius.event("#logoinfo", "mousedown", () => {
    window.open("https://www.npmjs.com/package/@rom13/genius-browser")
})


// todo -------------------------- EVENTS GLOBAL -----------------------------------

