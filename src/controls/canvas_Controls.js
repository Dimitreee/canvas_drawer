import {CanvasContextCreator} from '../canvas/context_creator';
import {DataElements} from './data';
import {Animation} from './animation';
import {PickerController} from '../colorPicker/picker_controller'

export class CanvasControls extends DataElements {

    constructor() {
        super();
        new PickerController();

        this.drawChecker = false;
        this.draw = new CanvasContextCreator();
        this.draw.getCanvasContext();
        this.animation = new Animation(this.draw.canvas.w, this.draw.canvas.h, this.draw.ctx);
        this.addListeners();
    }

    addListeners() {
        document.addEventListener('mouseup', this.mouseUpHandler.bind(this), false);
        document.addEventListener('mousedown', this.mouseDownHandler.bind(this), false);
        document.addEventListener('mousemove', this.getCursorPosition.bind(this), false)
    }

    getCursorPosition(e) {
        if (this.drawChecker) {
            super.setCords(e.clientX, e.clientY);
            this.animation.setCords(super.getCords());
        }
    }

    mouseDownHandler(e) {
        this.drawChecker = true;
        super.setCords(e.clientX, e.clientY);
        this.animation.setCords(super.getCords());
    }

    mouseUpHandler() {
        this.drawChecker = false;
    }

    startDraw() {
        this.draw.setFillStyle("#000");
        this.draw.drawLine();
    }
}