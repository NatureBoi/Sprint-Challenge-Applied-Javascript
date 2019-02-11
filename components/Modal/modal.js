class Modal{
    constructor(element){
        this.element = element;
        this.btn = document.querySelector('.modal-btn');
        this.span = document.querySelector('.close')

        this.btn.addEventListener('click', this.display.bind(this))
        this.span.addEventListener('click', this.close.bind(this))

        window.addEventListener('click', (e)=>{
            if(e.target == this.element){
                this.element.style.display = 'none'
            }
        })
    }
    display(){
        this.element.style.display = "block"
    }
    close(){
        this.element.style.display = "none"
    }
}

let modal = document.querySelector('.modal');
modal = new Modal(modal)
