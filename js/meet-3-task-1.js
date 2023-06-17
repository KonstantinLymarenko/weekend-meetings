// генераторВалідатора
// /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u імʼя
// /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ телефон
// /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ пошта
const generateValidation = (regExp) => {
    return (value) => {
        return regExp.test(value);
    }
}

const nameValid = generateValidation(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
const phoneValid = generateValidation(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
const mailValid = generateValidation(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

console.log(nameValid('Poly123'));
console.log(nameValid('5467'));

console.log(phoneValid('Mango'));
console.log(phoneValid('0502000000'));

console.log(mailValid('krosh@org.ua'));
console.log(mailValid('aJax'));