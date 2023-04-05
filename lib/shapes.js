
class shape {
    constructor() {
        this.colour = '';
    }
    renderColour(colour){
     this.colour = colour;
    }
}

class circle extends shape {
    constructor(colour) {
        super(colour);
    }
    show() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.colour}" />`;
    }

};

class triangle extends shape {
    constructor(colour) {
        super(colour);
    }
    show() {
        return `<polygon points="50 0, 100 100, 0 100" fill="${this.colour}"/>`;
    }
}
class square extends shape {
    constructor(colour) {
        super(colour);
    }
    show() {
        return `<rect width="100" height="100" style="fill:${this.colour}" />`
    }
}
module.exports =  { circle, triangle, square } ;
