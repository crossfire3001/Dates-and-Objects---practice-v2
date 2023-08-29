let clients = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: 89299889009,
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: null,
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: 89299889009,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: 9527469922,
        amounts: [342, 766, 362]
    }
];

/* Часть 1 */


// 1. Создайте пустой объект newClient
let newClient = {
};

// 2.

newClient.firstName = prompt('Имя клиента?', "");
newClient.lastName = prompt('Фамилия клиента?', "");
newClient.date = prompt('Дата рождения в формате месяц-день-год', "");
newClient.phone = parseInt((prompt('Ваш телефонный номер', "")));

// 3. Создать пустой массив
newClient.amounts = [];

// 4.
while (confirm('Добавить покупку для клиента ' + newClient.name + ' ? ')) {
    let sum= parseInt(prompt('Сумма'));
    newClient.amounts.push(sum);
}

// 5. Добавьте получившийся объект newClient в массив clients
clients.push(newClient);


/* Часть 2 */

// 1.

let fullName = (client) => {
    return client.firstName + ' ' + client.lastName;
};

let checkFullName = fullName(clients[0]);
console.log(checkFullName);

// 2.

let getBirthday = (date) => {

    let options = {
        month: "long",
        day: "numeric",
    };

    const today = new Date();
    const birthday = new Date(date);

    let result = birthday.toLocaleString('ru-RU', options);

    if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
        result += ' (сегодня)';
    }
    return result;
};

let b = getBirthday(clients[0].date);
console.log(b);

// 3.

let getAllAmount = (totalSum) => {

    let sum= 0;

    for (let i = 0; i < totalSum.length; i++) {
        sum += totalSum[i];
    }
    return Number(sum);
};

console.log((getAllAmount(clients[0].amounts)));

// 4.
let getAverageAmount = (totalArray) => {

    let sum = 0;

    for(let i = 0; i < totalArray.length; i++) {
        sum += totalArray[i];
    }

    let averageSum = sum / totalArray.length;
    averageSum.toFixed();
    return averageSum;
};

console.log((getAverageAmount(clients[0].amounts)));

// 5. Удалите все временные вызовы функций для проверок их результата.

// 6.

let showClients = (clients) => {
    clients.forEach((client) => {

        let message = 'Клиент ' + fullName(client) + ' имеет среднюю сумму чека ' +
            getAverageAmount(client.amounts).toFixed() + ' рублей. ' + 'День рождение клиента: '
            + getBirthday(client.date);
        console.log(message);
    });
};


// 7.

showClients(clients);

// 8.
try {
    showClients();
} catch (error) {
    console.log('Вызвана функция без параметров');
    console.log('Ошибка: ' + error.message);
}

// 9.
let bestClients = [
    {
        firstName: 'Юлисей',
        lastName: 'Данчук',
        date: '10-13-1950',
        phone: 89299889009,
        amounts: [254, 98, 3764, 5266]
    },
    {
        firstName: 'Нанотолий',
        lastName: 'Грищенко',
        date: '05-20-1981',
        phone: null,
        amounts: [1563, 887, 1889]
    },
];

showClients(bestClients);


// 10.
 setTimeout(() => {
    showClients(bestClients);
}, 3000)



// 11.

let whoSpentMore = (clients) => {


    let max = 0;
    let clientWithMaxSpent = 0;


    clients.forEach((client) => {
        let totalAmount = getAllAmount(client.amounts);

        if (totalAmount > max) {
            max = totalAmount;
            clientWithMaxSpent = client;
        }
    });

    if (clientWithMaxSpent) {
        let name = fullName(clientWithMaxSpent);
        console.log('Больше всех потратил ' + name + ' ' + ' Сумма покупок: ' + max);
    } else {
        console.log("Нет данных о клиентах");
    }
};

whoSpentMore(clients);