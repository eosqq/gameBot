let attempts;
let userNumber;
let winNumber;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getClouser = function () {

    winNumber = Math.floor(Math.random() * 100);
    attempts = 10;
    alert(winNumber);

    const getUserNumber = function () {
        
        userNumber = prompt('Введите число');
        if (attempts > 1) {
            if (userNumber === null) {
                alert('Игра окончена');
            } else {
                if (!isNumber(userNumber)) {
                    alert('Введите число!');
                    return getUserNumber();
                } else {
                    if (userNumber > winNumber) {
                        attempts --;
                        alert('Загаданное число меньше, осталось попыток: ' + attempts);
                        getUserNumber();
                    } else if (userNumber < winNumber) {
                        attempts --;
                        alert('Загаданное число больше, осталось попыток: ' + attempts);
                        getUserNumber();
                    } else {
                        alert('Поздравляю, Вы угадали!!!');
                    }
                }
            }
        } else {
            gameComplete = confirm('Количество попыток закончились. Игра окончена! Начать заново?')
            if (gameComplete) {
                getClouser();
            }
        }
    }
    getUserNumber();
}
getClouser();
