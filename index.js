const menu = [
    { name: 'magarite', price: 6 },
    { name: 'pepperoni', price: 10 },
    { name: 'hawaiian', price: 10 },
    { name: 'veggie', price: 9 },
]

const cashRegister = 100;
const orderQueue = [];

const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj);
}