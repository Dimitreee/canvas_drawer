export class CanvasCreator {
    constructor() {
        this.canvasNode = document.createElement('canvas');
        this.canvasContainer = document.createElement('div');
        this.body = document.querySelector('body');
        this.element = null;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    createCanvas() {
        this.canvasContainer.classList.add(['canvas_container']);
        this.canvasContainer.appendChild(this.canvasNode);
        this.body.appendChild(this.canvasContainer);
        this.element = document.querySelector('canvas');
    }

    addCanvasWidth() {
        this.canvasNode.style.width = this.w;
        this.canvasNode.style.height = this.h;
    }
}