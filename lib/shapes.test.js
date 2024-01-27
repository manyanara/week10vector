const shapes = require('./shapes');

// testing suite for shapes is created
describe ('Shapes', ()=>{
 it(`should take a color and text input and render html code`, ()=>{
    const testshape = new Triangle("triangle", "blue", "SVG", "white");
    expect(testshape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>
    <text x="5" y="5" font-size="30" fill= "white"> SVG </text>`);
 });   
});

