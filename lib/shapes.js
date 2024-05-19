class Shape {
    constructor(color){
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
};

class Square extends Shape {
    constructor(color){
        super(color)
    }

    render(){
        return `<rect x="25" y="25" width="200" height="200" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color){
        super(color)
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color){
        super(color)
    }

    render(){
        return `<circle cx="125" cy="125" r="75" fill="${this.color}" />`
    }
}

module.exports = { Shape, Triangle, Square, Circle };