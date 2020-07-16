
class TodayDateComponent extends HTMLElement {
    constructor(){
        super();
        setInterval(() => {
            this.innerText = new Date();
        }, 1000)
        console.log('All works! ^^');       
    }
}

const comp = customElements.define('today-date', TodayDateComponent);
