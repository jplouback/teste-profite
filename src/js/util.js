export class Util {
    
    constructor() {
    
    }

    select(seletor) {
        return document.querySelector(seletor);
    }

    selectAll(seletor) {
        return document.querySelectorAll(seletor);
    }

    toggleClass(element, className) {
        let el = document.querySelector(element);
        el.classList.toggle(className);
    }
        
}