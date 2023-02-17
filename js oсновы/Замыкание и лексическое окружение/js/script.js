function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1; // (это и есть замыкание, она хранит ссылку на counter)
                                // каждый раз эта функция ссылается на counter. 
        return counter; // перезаписалось значение counter, в след раз когда эта функция вызовется 
                        // значение каунтер будет +1
    };

    return myFunction;
}

const increment = createCounter(); // создаем переменную во внутрь помещаем функцию createCounter,
                                    // но вызываю CreateCounter должна вернуться другая функция myFunction
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

