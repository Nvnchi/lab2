import Island from "./Island.js";

export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      document.getElementById("btnAddIsland").addEventListener("click", () => {
        this.addIsland();
      });

      document.getElementById("btnSave").addEventListener("click", () => {
        this.save();
      });

      document.getElementById("btnLoad").addEventListener("click", () => {
        this.load();
      });
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
      document.querySelectorAll(".island").forEach(islandelement => islandelement.remove());
      this.islands = [];
      let storedNames = JSON.parse(localStorage.getItem("islands"));
      for (let i = 0; i < storedNames.length; i++) {
        this.addIsland(storedNames[i].name);
     }
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland(islandName) {
      // add the islands to the DOM
      let islandElement = document.createElement('div');
      islandElement.classList.add("island");

      const islandObject = new Island(islandName, islandElement);

      islandObject.htmlElement.addEventListener("click", () => {
        this.islands = this.islands.filter((island) => island.id !== islandObject.id);
        islandObject.remove();
      });

      this.islands.push(islandObject);
      this.moveIsland(islandObject.htmlElement);
    }

    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
      let coords = this.getCoordinates();

      island.animate([
        { transform: `translate(0px, 0px)` },
        { transform: `translate(${coords.x}px, ${coords.y}px)`}
    ], {
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
    });
    }
    }
    
  