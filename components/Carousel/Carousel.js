class Carousel {
    constructor(element){
        this.counter = 0;
        this.element = element;
        this.btn_left = this.element.querySelector('.left-button');
        this.btn_right = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        

        this.images[this.counter].style.display = 'block';

        this.btn_left.addEventListener('click', this.previous.bind(this));
        this.btn_right.addEventListener('click', this.next.bind(this));
    }
    previous(){
        this.counter--;
        if(this.counter <0){
            this.counter = this.images.length-1;
        } 
        // this.images.forEach(image => image.style.display = 'none');
        // this.images[this.counter].style.display = 'block';
        // let image = this.images[this.counter]
        // TweenLite.from(image, 1.5, {opacity:0})
        // TweenLite.from(image, 1.5, {x:200})
        this.select();


    }
    next(){
        this.counter++;
        if(this.counter === this.images.length){
            this.counter = 0;
        } 
        // this.images.forEach(image => image.style.display = 'none');
        // this.images[this.counter].style.display = 'block';
        // let image = this.images[this.counter]
        // TweenLite.from(image, 2, {opacity:0})
        // TweenLite.from(image, 1.5, {x:-200})
        this.select();
    }

    select(){
        this.images.forEach(image => image.style.display = 'none')
        this.images[this.counter].style.display = 'block';
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/