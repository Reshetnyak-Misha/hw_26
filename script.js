//task 1
// const books = [
//     { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
//     { title: '1984', author: 'Джордж Орвелл' },
//     { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
// ];
//
// const author = "Джордж Орвелл";//Можно так называть переменные как ключ в обьекте?Или хорошей практикой будет придумывать другие названия.
// const book = books.find(book => book.author === author);

// console.log(`Нужная нам книга: ${author}: ${book.title}`);

//task 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const pairedNumbers = numbers.filter(number => number % 2 === 0);
//
// console.log(`Массив парных чисел: ${pairedNumbers}`);

//task 3
// const prices = [100, 200, 300, 400, 500];
//
// const increasedArray = prices.map(price => (price * 1.1).toFixed(2));
//
// console.log("Масив увеличеный на 10%:", increasedArray);

//task 4
// const numbers = [45, 80, 32, 100, 105];
//
// const checkNumbers = numbers.some(number => number > 100);
//
// console.log (checkNumbers);

//task 5
// const nums = [1, 2, 3, 4, 5, -6, 7];
//
// const plusNumbers = nums.every(number => number > 0);
//
// console.log(plusNumbers);

// task 6
// const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];
//
// const firstWords = sentences.map(sentence => sentence.split(' ')[0]);
// console.log(firstWords);

// task 7
// const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];
// let quantityWords = 0;//Счётчик для слов
//
// sentences.forEach(sentence => {
//     const inSentence = sentence.split(' ').length;//Делим на слова,пробел служит для отделения слов
//     quantityWords += inSentence;//Когда находит слово, увеличевается на 1
// });
//
// console.log("Количество слов:",quantityWords);

// task 8
function createOrderSystem() {
    let orders = [];

    // Добавляем новый стол
    function addOrder(order) {
        orders.push(order);
    }

    // Считаем общую сумму стола
    function getTotalAmount(tableNumber) {
        let totalAmount = 0;
        orders.forEach(order => {
            if (order.table === tableNumber) {
                order.dishes.forEach(dish => {
                    totalAmount += dish.price;//При каждом проходе добавляем найденую цену
                });
                console.log(`Общая стоимость столика ${tableNumber}:`,totalAmount);
            }
        });
        return totalAmount;
    }

    // Меняем статус
    function changeOrderStatus(tableNumber, status) {
        orders.forEach(order => {
            if (order.table === tableNumber) {
                order.status = status;
            }
        });
    }

    // Отменяем заказ
    function cancelOrder(tableNumber) {
        orders = orders.filter(order => order.table !== tableNumber);
    }
    // Сделал вывод всех столов, чтоб понимать, работает ли вообще код)
    function printOrders() {
        console.log("Список замовлень:");
        orders.forEach(order => console.log(order));
    }

    return {//Вот и попался с твоих слов, что новички забывают писать return. Не мог понять почему не видит))) Пол часа листал гугл
        addOrder,
        getTotalAmount,
        changeOrderStatus,
        cancelOrder,
        printOrders
    };
}

//Делаем запоминания
const orderSystem = createOrderSystem();

// Створюємо замовлення
let order1 = {
    table: 1,
    dishes: [
        { name: "Кава", price: 30 },
        { name: "Чізкейк", price: 50 }
    ],
    status: "в обробці"
};

let order2 = {
    table: 2,
    dishes: [
        { name: "Лате", price: 40 },
        { name: "Тірамісу", price: 60 }
    ],
    status: "готується"
};
let order3 = {
    table: 3,
    dishes: [
        { name: "Раф", price: 200 },
        { name: "Тірамісу", price: 300 }
    ],
    status: "готується"
};

orderSystem.addOrder(order1);//Добавили 2 столика
orderSystem.addOrder(order2);//Добавили 2 столика

orderSystem.printOrders();//Вывели перечень столов

orderSystem.addOrder(order3);//Добавили 3 столик
orderSystem.printOrders();//Вывели перечень столов

orderSystem.changeOrderStatus(3,"Готово");//Изменили статус стола
orderSystem.printOrders();//Вывели перечень столов

orderSystem.getTotalAmount(3);//Вывели общую стоимость заказа столика
orderSystem.cancelOrder(3);//Удалили столик
orderSystem.printOrders();//Вывели перечень столов






