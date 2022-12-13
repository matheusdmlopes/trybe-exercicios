// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//     console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
    console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => console.log(element * 2)


// numbers.forEach((element) => console.log(element * 2))

numbers.forEach(multiply)