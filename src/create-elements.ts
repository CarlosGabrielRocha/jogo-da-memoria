export function createElement(tag: string, id?: string, ...className: string[]) {
    const element = document.createElement(tag)
    if (id) element.id = id
    if (className) {
        element.classList.add(...className)
    }
    return element
}

type AttributesPair = [string, string]
type MidiaElement = 'img' | 'video'
export function createMidiaElement(tag: MidiaElement, src: string, ...attributes: AttributesPair[]) {  
    const element = createElement(tag)
    attributes.forEach((pair: AttributesPair) => element.setAttribute(pair[0], pair[1]))
    if (tag === 'img') {
        return element as HTMLImageElement  
    } else {
        return element as HTMLVideoElement
    }       
}

export function newImg(src: string, className: string, alt: string, ...attributes: AttributesPair[]) {
    const img = document.createElement('img')
    img.src = src
    img.className = className
    img.alt = alt
    attributes.forEach((pair: AttributesPair) => img.setAttribute(pair[0], pair[1]))
    return img
}

export function newTextElement(tag: string, text?: string, id?: string, ...className: string[]) {
    const element = createElement(tag, id, ...className)
    element.innerText = text
    return element
}

export function newButton(text?:string, id?: string, ...className: string[]) {
    const btn = createElement('button', id, ...className) as HTMLButtonElement
    btn.innerText = text
    return btn
}

export function newAnchorElement(href: string) {
    const a = createElement('a') as HTMLAnchorElement
    a.href = href
    return a
}



