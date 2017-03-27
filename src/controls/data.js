export class DataElements {
    constructor() {
        this.pointerX = null;
        this.pointerY = null;
        this.cords = [];
    }

    setCords(x, y) {
        this.pointerX = x;
        this.pointerY = y;

        this.cords.push({x: this.pointerX, y: this.pointerY});
    }

    getCords() {
        return this.cords;
    }
}