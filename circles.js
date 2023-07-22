class Shapes {
    constructor(color) {
        this.object = document.createElement('div');
        this.randomTop = Math.floor(Math.random() * (600 - 200) + 200);
        this.randomLeft = Math.floor(Math.random() * 400);
        this.randomSize = Math.floor(Math.random() * 200);
        this.object.style.position = 'absolute';
        this.object.style.top = this.randomTop + 'px';
        this.object.style.left = this.randomLeft + 'px';
        this.object.style.width = this.randomSize + 'px';
        this.object.style.height = this.randomSize + 'px';
        this.object.style.backgroundColor = color;
        this.changeColor = function(newColor) {
            this.color = newColor;
        }
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
        this.newRadius = Math.floor(this.randomSize/2);
        this.object.className = 'Circle';
        this.object.style.borderRadius = this.newRadius + 'px';
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color);
        this.object.className = 'Square';
    }
}

class Rectangle extends Shapes {
    constructor(color) {
        super(color);
        this.object.className = 'Rectangle';
        this.object.style.width = this.randomSize * 1.5 + 'px';
    }
}

let shape = 'circle';
let selectedColor = 'green';

function getColor() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('green').addEventListener('click', function(event) {
            selectedColor = 'green';
        });
        document.getElementById('blue').addEventListener('click', function(event) {
            selectedColor = '#0000ff';
        });
        document.getElementById('purple').addEventListener('click', function(event) {
            selectedColor = 'purple';
        });
    });
}

function getShape() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("circle").style.backgroundColor = selectedColor;
        
        document.getElementById('circle').addEventListener('click', function(event) {
            shape = 'circle';
            document.getElementById("circle").style.backgroundColor = selectedColor;
            document.getElementById("square").style.backgroundColor = "";
            document.getElementById("rectangle").style.backgroundColor = "";
            return shape;
        });

        document.getElementById('square').addEventListener('click', function(event) {
            shape = 'square';
            document.getElementById("square").style.backgroundColor = selectedColor;
            document.getElementById("circle").style.backgroundColor = "";
            document.getElementById("rectangle").style.backgroundColor = "";
            return shape;
        });

        document.getElementById('rectangle').addEventListener('click', function(event) {
            shape = 'rectangle';
            document.getElementById("rectangle").style.backgroundColor = selectedColor;
            document.getElementById("circle").style.backgroundColor = "";
            document.getElementById("square").style.backgroundColor = "";
            return shape;
        });
    });
}

function printShape() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('space').addEventListener('click', function(event) {
            if(shape == 'circle') {
                let newShape = new Circle(selectedColor);
                document.body.appendChild(newShape.object);
            }

            if(shape == 'square') {
                console.log(shape);
                let newShape = new Square(selectedColor);
                document.body.appendChild(newShape.object);
            }

            if(shape == 'rectangle') {
                console.log(shape);
                let newShape = new Rectangle(selectedColor);
                document.body.appendChild(newShape.object);
            }
        });
    });
}

getColor();
getShape();
printShape();

