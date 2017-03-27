export class PalleteController {
    constructor() {

    }

    nodeCreator() {
        this.palleteNode = document.createElement('div');
    }

    addPalleteStyles() {
        this.palleteNode.style.width = "400px";
        this.palleteNode.style.height = "400px";
    }
}