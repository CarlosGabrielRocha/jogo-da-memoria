import { createElement } from "./create-elements"

const containerForMeteor = createElement('section', '', 'meteor-container')

const meteor = createElement('div', 'meteor')

document.body.appendChild(containerForMeteor)
containerForMeteor.appendChild(meteor)


export function restartMeteorAnimation() {
    meteor.classList.toggle('meteor')
}