const stext = require('./text');

// testing suite for shapes is created
describe ('text', ()=>{
 it(`should take a color input and render html code`, ()=>{
    const logo = new Text(SVG);
    logo.setColor("blue");
    expect(logo.render()).toEqual('<text x="20" y="35" fill = "blue">SVG</text>');
 });   
});