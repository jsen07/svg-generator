const { circle, triangle, square }= require ('./shapes.js');

describe('circle', () => {
    test('creates circle coloured blue', () => {
        const c = new circle();{
            let colour =("blue");
            c.setColour(colour);
            expect(c.render()).toEqual(`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${colour}" />`);
        }
    });
});

describe('triangle', () => {
    test('creates triangle coloured blue', () => {
        const c = new triangle();{
            let colour =("blue");
            c.setColour(colour);
            expect(c.render()).toEqual(`<polygon points="50 0, 100 100, 0 100" fill="${colour}"/>`);
        }
    });
});

describe('square', () => {
    test('creates sqaure coloured blue', () => {
        const c = new square();{
            let colour =("blue");
            c.setColour(colour);
            expect(c.render()).toEqual(`<rect width="100" height="100" style="fill:${colour}" />`);
        }
    });
});