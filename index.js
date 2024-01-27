const inq = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// generate function pulling rendered html from shapes.js and text.js
const getVector = function(shape, color, text, textColor){
  const input = shape.toString();
  let svgHtml=" ";
  if (input === 'Triangle'){
    svgHtml = new Triangle(color, text, textColor).render();
  } else if (input === 'Circle'){
    svgHtml= new Circle(color, text, textColor).render();
  } else if (input === 'Square'){
    svgHtml= new Square(color, text, textColor).render();
  } else {
    console.log("error grabbing shape")
  };
  return svgHtml;
}
// get user input for logo parameters
inq
  .prompt([
    {
      type: 'input',
      message: 'Enter your logo text (must be 3 characters only)',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter text color name or in rgb() format',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose your logo Shape',
      name: 'shape',
      choices:['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Enter logo color name or in rgb() format',
        name: 'color'
    },
  ])
  .then(({shape, color, text, textColor}) => {
    const svgHtml= getVector(shape, color, text, textColor);

    fs.writeFile('test.svg', svgHtml, (err) =>
      err ? console.log(err) : console.log('Successfully created test.svg')); 
  }); 
  