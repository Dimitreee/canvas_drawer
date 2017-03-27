export class Animation {
    constructor(w, h, ctx) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.ctx = ctx;
        this.cords = null;

        window.requestAnimationFrame(this.drawLoop.bind(this));
    }

    drawLoop() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        if (this.cords) {
            this.drawLine()
        }

        window.requestAnimationFrame(this.drawLoop.bind(this))
    }

    setCords(cords) {
        this.cords = cords;
    }

    drawLine() {
        this.cords.map((item) => {
            this.ctx.fillRect(item.x - 5, item.y - 5, 10, 10)
        })
    }
}