import { createElement, newImg } from "./create-elements";

export class Card {
    private _idNumber: string
    private _element: HTMLElement
    public cardImgSrc: string

    get idNumber() {
        return this._idNumber
    }

    get element() {
        return this._element
    }

    constructor(cardImgSrc: string, idNumber: string) {
        this._idNumber = idNumber
        this.cardImgSrc = cardImgSrc
        this._element = this.renderCardElement()
    }

    private renderCardElement() {
        const cardContainer = createElement('div', '', 'card-container')
        cardContainer.dataset.idNumber = this.idNumber 

        const cardInner = createElement('div', '', 'card-inner')
        
        const cardFront = createElement('div', '', 'card-front')
        const imgFront = newImg('./assets/cardtest.jpg', 'card', 'Frente da Carta')
        cardFront.appendChild(imgFront)
        const cardBack = createElement('div', '', 'card-back')
        const imgBack = newImg(this.cardImgSrc, 'card', 'Trás da Carta')
        cardBack.appendChild(imgBack)
        
        cardInner.append(cardFront, cardBack)
        cardContainer.append(cardInner)
        
        return cardContainer
    }

    public append() {
        document.querySelector('main').appendChild(this._element)
    }

    /* Girar carta. */
    public flipCard() {
        const cardInner = this.element.querySelector('.card-inner')
        cardInner.classList.toggle('flip')
    }
}


