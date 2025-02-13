import { Card } from "./Card"
import { PointsScreen} from "./PointsScreen"
import { mediaQueryEasy, mediaQueryHard, mediaQueryMedium } from "./media-query"
import { removeFinishBtn, renderFinishBtn, renderGameoverOptions } from "./options-screens"

type Difficulty = 'easy' | 'medium' | 'hard'

/* Classe responsável pelas ações do jogo. */

export class Game {
    private difficulty: Difficulty
    static cards: Card[]
    private flippedCards: Card[]
    private pointsScreen: PointsScreen

    constructor(difficulty: Difficulty) {
        this.difficulty = difficulty
        this.restartGame()
        this.flippedCards = []
    }

    public restartGame() {
        this.pointsScreen = new PointsScreen()
        renderFinishBtn()
        Game.cards = []
        if (this.difficulty === 'easy') {
            this.createCards(9)
            this.appendCards()
            mediaQueryEasy()
            this.pointsScreen.left = 9
        } else if (this.difficulty === 'medium') {
            this.createCards(12)
            this.appendCards()
            mediaQueryMedium()
            this.pointsScreen.left = 12
        } else if (this.difficulty === 'hard') {
            this.createCards(18)
            this.appendCards()
            mediaQueryHard()
            this.pointsScreen.left = 18
        }     
    }

    /* Embaralha o array e adiciona as cartas no main. */

    private appendCards() {
        Game.cards.sort(() => {
            return Math.random() - 0.5
        })

        Game.cards.forEach(card => card.append())
    }

    private getIdNumber() {
        let id: string
        let alreadyExist: Card[]
        do {
            id = String(Math.random().toFixed(2))
            alreadyExist = Game.cards.filter((card: Card) => {
                return card.idNumber === id
            })
        } while (alreadyExist.length > 0)
        
        return id
    }

    /* Cria a quantidade determinada de acordo com a dificuldade de instâncias de Card. */

    private createCards(loopLength: number) {
        for (let i = 1; i <= loopLength; i++) {
            const idNumber = this.getIdNumber()
            const card1 = new Card(`./assets/memory${i}.jpg`, idNumber)
            const card2 = new Card(`./assets/memory${i}.jpg`, idNumber)
            Game.cards.push(card1, card2) 
        }

        Game.cards.forEach(card => card.element.addEventListener('click', () => {
            if (this.flippedCards.length !== 2) {
                this.checkTurn(card)
            }
        }))
    }

    /* Cuida da lógica das jogadas. */

    private checkTurn(card: Card) {
        const cardInner = card.element.querySelector('.card-inner')
        /* Condição para não  virar uma carta que já está virada. */
        if (!cardInner.classList.contains('flip')) {    
            this.flippedCards.push(card)
            card.flipCard()
        }

        if (this.flippedCards.length === 2) {
            
            if (this.flippedCards[0].idNumber === this.flippedCards[1].idNumber) {
                this.clearFlippedCards()
                this.pointsScreen.matches++
                this.pointsScreen.left--
            } else {
                this.flipCardsBack()
            }
        }

        if (this.pointsScreen.left === 0) {
            this.finishGame()
        }
    }

    /* Vira as cartas de volta. */

    public flipCardsBack() {
        setTimeout(() => {
            this.flippedCards.forEach(card => card.flipCard())
            this.flippedCards = []
            this.pointsScreen.turns++
        }, 700)

    }

    /* Limpa as cartas que estão viradas. */

    public clearFlippedCards() {
        setTimeout(() => {
            this.flippedCards.forEach(card => card.element.style.opacity = '0')
            this.flippedCards = []
            this.pointsScreen.turns++
        }, 700)
    }

    /* Finaliza o jogo. */

    public finishGame() {
        this.pointsScreen.removePoints()
        removeFinishBtn()
        renderGameoverOptions()
        document.querySelector('main').innerHTML = ''
    }
}