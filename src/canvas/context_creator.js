import {CanvasCreator} from "./canvas_creator";

export class CanvasContextCreator {
    constructor() {
        this.canvas = new CanvasCreator();
        this.canvas.addCanvasWidth();
        this.canvas.createCanvas();
        this.canvasElement = this.canvas.element;
        this.ctx = null;
    }

    getCanvasContext() {
        this.ctx = this.canvasElement.getContext('2d');
        this.ctx.canvas.width = this.canvas.w;
        this.ctx.canvas.height = this.canvas.h;
    }

    setFillStyle(color) {

    }

    drawLine() {
    }
}