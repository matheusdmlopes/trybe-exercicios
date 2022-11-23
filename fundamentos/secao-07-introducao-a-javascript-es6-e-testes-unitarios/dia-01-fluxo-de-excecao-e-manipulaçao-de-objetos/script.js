const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias. Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

    const getDeliveryPerson = order.order.delivery.deliveryPerson
    const getName = order.name
    const getPhoneNumber = order.phoneNumber
    const getStreet = order.address.street
    const getNumber = order.address.number
    const getApartment = order.address.apartment

    console.log(`Olá ${getDeliveryPerson}, entrega para: ${getName}, Telefone: ${getPhoneNumber}, ${getStreet}, N: ${getNumber}, AP: ${getApartment}.`)

};

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias. Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    // Modifique o nome da pessoa compradora para Luiz Silva;
    // Modifique o valor total da compra para R$ 50,00.

    order.name = 'Luiz Silva'
    order.payment.total = 50

    const getNewName = order.name
    const getPizzas = Object.keys(order.order.pizza)
    const getNewPayment = order.payment.total
    const getCokeType = order.order.drinks.coke.type

    console.log(`Olá ${getNewName}, o total do seu pedido de ${getPizzas[0]}, ${getPizzas[1]} e ${getCokeType} é R$ ${getNewPayment},00.`)
};

orderModifier(order);