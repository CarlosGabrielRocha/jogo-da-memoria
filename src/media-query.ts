const main = document.querySelector('main')

export function mediaQueryEasy() {
    main.className = ''
    main.classList.add('easy-grid')
}

export function mediaQueryMedium() {
    main.className = ''
    main.classList.add('medium-grid')
}

export function mediaQueryHard() {
    main.className = ''
    changeCardsSize('5em', '8em')
    main.classList.add('hard-grid')
}

function changeCardsSize(width: string, height: string) {
    const cardContainers = document.querySelectorAll('.card-container')
    const imgsCard = document.querySelectorAll('.card')

    cardContainers.forEach((cardContainer: HTMLDivElement) => {
        cardContainer.style.width = width
        cardContainer.style.height = height
    })  
    
    imgsCard.forEach((imgCard: HTMLImageElement) => {
        imgCard.style.width = width
        imgCard.style.height = height       
    })
}

