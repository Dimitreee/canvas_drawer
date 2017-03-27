export class PickerCreator {
    constructor(){
        this.color = null;
        this.createNodes();
        this.insertNodes();
    }

    createNodes() {
        this.pickerNode = document.createElement('div');
        this.pickedColorNode = document.createElement('div');
        this.body = document.querySelector('body');

        this.addPickedColorNodeCssStyles();
        this.addPickerCssStyles();
    }

    insertNodes() {
        this.pickerNode.appendChild(this.pickedColorNode);
        this.body.appendChild(this.pickerNode);
    }

    addPickerCssStyles() {
        this.pickerNode.style.height = "52px";
        this.pickerNode.style.width = "52px";
        this.pickerNode.style.background = "#d5d5d5";
        this.pickerNode.style.border = "1px solid black";
        this.pickerNode.style.position = "fixed";
        this.pickerNode.style.bottom = "10px";
        this.pickerNode.style.left = "10px";
        this.pickerNode.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
        this.pickerNode.style.transition = "all 0.3s cubic-bezier(.25,.8,.25,1)";
        this.pickerNode.style.padding = "5px";
        this.pickerNode.style.boxSizing = "border-box";
        this.pickerNode.style.cursor = "pointer";
    }

    addPickedColorNodeCssStyles() {
        this.pickedColorNode.style.width = "40px";
        this.pickedColorNode.style.height = "40px";
        this.pickedColorNode.style.background = "#fff"
    }

    addPickedColor(color) {
        this.color = color;
    }
}