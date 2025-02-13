import { createElement, newTextElement, newButton, newAnchorElement } from "./create-elements"
import { Game } from "./Game"

type Difficulty = 'easy' | 'medium' |'hard'
let gameDifficulty: Difficulty
let game: Game

/* Renderiza a tela para escolher o modo de jogo. */

export function renderGamemodeOptions() {
    const sectionOpt = createElement('section', '', 'game-options')
    const p = newTextElement('p', 'Select the difficulty')
    const btnContainer = createElement('div', '', 'mode-btn-container')
    const easyBtn = newButton('Easy', '', 'easy-btn', 'mode-btn')
    easyBtn.dataset.difficulty = 'easy'
    const mediumBtn = newButton('Medium', '', 'medium-btn', 'mode-btn')
    mediumBtn.dataset.difficulty = 'medium'
    const hardBtn = newButton('Hard', '', 'hard-btn', 'mode-btn')
    hardBtn.dataset.difficulty = 'hard'

    btnContainer.append(easyBtn, mediumBtn, hardBtn)
    sectionOpt.append(p, btnContainer)
    
    /* Remover esse estilo depois */
    sectionOpt.style.position = 'absolute'
    sectionOpt.style.top = '300px'
    document.body.appendChild(sectionOpt)

    document.querySelectorAll('.mode-btn').forEach((btn: HTMLButtonElement) => {
        btn.addEventListener('click', () => {
            gameDifficulty = btn.dataset.difficulty as Difficulty
            sectionOpt.remove()
            game = new Game(gameDifficulty)
        }, {once: true})
    })
}

/* Renderiza a tela de fim de jogo. */

export function renderGameoverOptions() {
    const sectionOpt = createElement('section', '', 'game-options')
    const p = newTextElement('p', 'O que vai fazer agora?')
    const btnContainer = createElement('div', '', 'opt-btn-container')
    const playAgainBtn = newButton('Play again', '', 'play-again-btn', 'opt-btn')
    const changeModeBtn = newButton('Change mode', '', 'change-mode-btn', 'opt-btn')
    const ExitBtn = newButton('Exit', '', 'exit-btn', 'opt-btn')

    btnContainer.append(playAgainBtn, changeModeBtn, ExitBtn)
    sectionOpt.append(p, btnContainer)
    
    /* Remover esse estilo depois */
    sectionOpt.style.position = 'absolute'
    sectionOpt.style.top = '300px'
    document.body.appendChild(sectionOpt)

    playAgainBtn.addEventListener('click', () => {
        sectionOpt.remove()  
        game.restartGame()
    }, {once: true})

    changeModeBtn.addEventListener('click', () => {
        sectionOpt.remove()
        renderGamemodeOptions()
    }, {once: true})

    ExitBtn.addEventListener('click', () => {
        const a = newAnchorElement('index.html')
        a.click()
    }, {once: true})
}

/* Renderiza o botão que finaliza o jogo caso seja clicado. */

export function renderFinishBtn() {
    const finishButton = newButton('Finish Game', '', 'finish-game-btn')
    document.body.appendChild(finishButton)
    finishButton.addEventListener('click', renderConfirmScreen)
}

/* Remderiza a tela de confirmação para finalizar o jogo. */

function renderConfirmScreen() {
    const confirmSection = createElement('section', '', 'confirm-container')
    const p = newTextElement('p', 'Você tem certeza que finalizar o jogo?')
    const btnContainer = createElement('div', '', 'opt-btn-container')
    const yesButton = newButton('Sim', '', 'opt-btn')
    const noButton = newButton('Não', '', 'opt-btn')

    yesButton.addEventListener('click', () => {
        confirmSection.remove()
        game.finishGame()   
    })

    noButton.addEventListener('click', () => {
        confirmSection.remove()
    })

    btnContainer.append(yesButton, noButton)
    confirmSection.append(p, btnContainer)
    document.body.appendChild(confirmSection)
}


export function removeFinishBtn() {
    document.querySelector('.finish-game-btn').remove()
}

