class shape {
    constructor(color, text, textColor){
        this.color= color;
        this.text = text;
        this.textColor= textColor;
       }; 
   render(){
    return " "
   }
};


class Triangle extends shape {
   render(){
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>
            <text x="50" y="50" font-size="30" fill= "${this.textColor}"> ${this.text}</text>
            </svg>`
   }
};

class Circle extends shape {
       render(){
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy= "150" r= "100" fill="${this.color}"></circle>
                <text x="125" y="150" font-size="50" fill= "${this.textColor}"> ${this.text}</text>
                </svg> `
       };
 };

 class Square extends shape {
       render(){
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 90,10 90,90 10,90" fill="${this.color}"></polygon>
                <text x="50" y="50" font-size="30" fill= "${this.textColor}"> ${this.text}</text>
                </svg>`
       }
 };

 module.exports.shape= shape;
 module.exports.Triangle= Triangle;
 module.exports.Circle= Circle;
 module.exports.Square= Square;

