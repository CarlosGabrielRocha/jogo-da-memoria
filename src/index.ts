import { restartMeteorAnimation } from "./meteor"

setInterval(restartMeteorAnimation, 15000)

const typingH1 = document.querySelector('h1.typing') as HTMLTitleElement

type HtmlTextElement = HTMLTitleElement | HTMLParagraphElement | HTMLSpanElement

/* Animação de digitação */

function typingEffect(element: HtmlTextElement, text: string, interval: number, pause: number) {
    element.innerText = ''
    element.style.height = window.getComputedStyle(element).fontSize
    const textArray = text.split('')
    for (let index = 1; index <= textArray.length; index++) {    
        setTimeout(() => {
            element.innerText += textArray[index - 1]
            element.classList.toggle('caret')
        }, index * (interval * 1000));    
    }

    setTimeout(() => {
        typingEffect(element, text, interval, pause)
    }, textArray.length * (interval * 1000) + (pause * 1000))

}

typingEffect(typingH1, 'Welcome!', 0.4, 1)

