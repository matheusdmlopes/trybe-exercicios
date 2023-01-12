const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];


rectangles.forEach((element) => {
    console.log(rectangleArea(...element)) // Altere o parâmetro recebido por rectangleArea()
});

const sum = (...args) => args.reduce((acc, element) => (acc + element), 0)

console.log(sum(4, 5, 6))