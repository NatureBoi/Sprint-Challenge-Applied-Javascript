class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab;
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    

    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"`);
    }


     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => card = new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', this.selectTab.bind(this));
  }

  selectTab(e){
    e.preventDefault();
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = 'none');
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab')
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex'
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab = new TabLink(tab));

function createTopic(title, tag, author){

  let new_card = document.createElement('div')
  new_card.setAttribute('class','card');
  new_card.setAttribute("data-tab",`${tag}`)

  let headline = document.createElement('div')
  headline.setAttribute('class', 'headline')
  headline.textContent = title;

  let divAuthor = document.createElement('div')
  divAuthor.setAttribute('class', 'author')

  let imgAuthor = document.createElement('div')
  imgAuthor.setAttribute('class',"img-container")
  
  let image = document.createElement('img')
  image.setAttribute('src', './assets/fido.jpg')

  let spanAuthor = document.createElement('span')
  spanAuthor.textContent = author;

  new_card.appendChild(headline)
  new_card.appendChild(divAuthor)
  divAuthor.appendChild(imgAuthor);
  imgAuthor.appendChild(image)
  divAuthor.appendChild(spanAuthor)

  return new_card
}

function addTopic(topic) {
  let parent_topic = document.querySelector(".cards-container");
  parent_topic.prepend(topic);
}

let submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", e => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let ete = document.getElementById('tag-select')
  let tag = ete.options[ete.selectedIndex].value
  let author = document.getElementById("author-input").value;

  let n_art = createTopic(title, tag, author);
  addTopic(n_art);
  n_art = new TabLink(n_art);

  document.getElementById("title").value = "";
  document.getElementById("author-input").value = "";
});