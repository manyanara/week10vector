class Text {
    constructor(text){
        this.text = `${text}`
    };
    setColor(color){
        this.color = color;
    }

    render(){
        return `<text x="20" y="35" fill = ${this.color}>${this.text}</text>`
    }
};