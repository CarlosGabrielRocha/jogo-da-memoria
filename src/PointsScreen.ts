import { createElement, newTextElement } from "./create-elements";

/* Pontuação do jogo. */

export class PointsScreen {
    private element: HTMLElement
    private _turns: number
    private _matches: number
    private _left: number

    get turns() {
        return this._turns
    }

    set turns(n: number) {
        this._turns = n
        const turnsSpan = this.element.querySelector('#turns') as HTMLElement
        turnsSpan.innerText = `turns: ${this.turns}`
    }

    get matches() {
        return this._matches
    }

    set matches(n: number) {
        this._matches = n
        const matchesSpan = this.element.querySelector('#matches') as HTMLElement
        matchesSpan.innerText = `matches: ${this.matches}`
    }

    get left() {
        return this._left
    }

    set left(n: number) {
        this._left = n
        const leftSpan = this.element.querySelector('#left') as HTMLElement
        leftSpan.innerText = `left: ${this.left}`
    }
    
    constructor() {
        this.element = this.renderPoints() 
        this.turns = 0
        this.matches = 0
        this.left = 0
    }

    private renderPoints() {
        const pointsSection = createElement('section', '', 'points-section')
        const turnsSpan = newTextElement('span', 'turns: 0', 'turns')
        const matchesSpan = newTextElement('span', 'matches: 0', 'matches')
        const leftSpan = newTextElement('span', 'left: 0', 'left')
    
        pointsSection.append(turnsSpan, matchesSpan, leftSpan)
        document.body.appendChild(pointsSection)
        return pointsSection 
    }
    
    public removePoints() {
        document.querySelector('.points-section').remove()
    }
}
