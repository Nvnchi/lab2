export default class Island {
  constructor(name, htmlElement) {
    // create an id for an island to later remove it
    this.id = Math.floor(Math.random() * 1000000);

    this.name = name !== undefined ? name : this.getRandomName();
    htmlElement.style.backgroundColor = this.getRandomColor();
    htmlElement.innerHTML = this.name;
    htmlElement.id = this.id;

    this.htmlElement = htmlElement;
    
    this.displayIsland();
  }

  displayIsland() {
    document.body.appendChild(this.htmlElement);
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
    this.htmlElement.remove();
  }

  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    // return a random name from the array
    return names[Math.floor(Math.random() * names.length)];

  }
}