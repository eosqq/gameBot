let attempts;
let userNumber;
let winNumber;
let gameComplete;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getGameComplete = function(gameComplete) {
    if (gameComplete) {
        getClouser()
    }
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
                        gameComplete = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                        if (gameComplete) {
                            getClouser();
                        }
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
