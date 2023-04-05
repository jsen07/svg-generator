
const { circle, triangle, square }= require ('./shapes.js');

class Svg {
    constructor(text, textcolour) {
        this.textColour = textcolour;
        this.text = `<text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${text}</text>`;
        this.shapeEl = '';
    }
    setShape(shape,colour){
        this.c = colour;
        if(shape === 'circle') {
            let c = new circle();
            c.setColour(this.c);
            this.shapeEl = c.show().toString();
        }
        if(shape === 'triangle') {
            let t = new triangle();
            t.setColour(this.c);
            this.shapeEl = t.show().toString();
        }
        if(shape === 'square') {
            let r = new square();
            r.setColour(this.c);
            this.shapeEl = r.show().toString();
        }

    }
    
    create (){
        return `<svg width="100" height="100" viewBox="0 0 100 100">${this.shapeEl} ${this.text}</svg>`
    }
}

function generateLogo(data) {
    let newShape = new Svg(data.text, data.textColour, data.shapeColour);
    newShape.setShape(data.shape, data.shapeColour);
    let svg = newShape.create();
    return svg;
}

module.exports = generateLogo;                                                                                                                                                              