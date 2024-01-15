const shapes = require('./shapes');

// testing suite for shapes is created
describe ('Shapes', ()=>{
 it(`should take a color input and render html code`, ()=>{
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
 });   
});

