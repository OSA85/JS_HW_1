// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
// const checkAge1 = function(age) {
//     let age_1 = 18
//     let age_2 = 60
// if (age < age_1) {
//     console.log("You don’t have access cause your age is " + age + " It’s less then ")
// }
// else if(age >= age_1 && age < age_2){
//     console.log("Welcome  !")
// }
// else if (age > age_2){
//     console.log("Keep calm and look Culture channel")
// }
// else {
//     console.log("Technical work")
// }
// }

// checkAge1(17)
// checkAge1(18)
// checkAge1(61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge2 = function(age) {
//     if (typeof(age) != 'number' || age <= 0 ){
//         console.log("Введено некорректное значение! Проверьте.")
//     }
//     else {
//         let age_1 = 18
//         let age_2 = 60
//         if (age < age_1) {
//             console.log("You don’t have access cause your age is " + age + " It’s less then ")
//         }
//         else if(age >= age_1 && age < age_2){
//         console.log("Welcome  !")
//         }
//         else if (age > age_2){
//             console.log("Keep calm and look Culture channel")
//         }
//         else {
//             console.log("Technical work")
//         }
//     }
// }

// checkAge2(" ")
// checkAge2("2")
// checkAge2("asd")
// checkAge2("#%^&*")
// checkAge2(-1)
// checkAge2(0)
// checkAge2(60)
// checkAge2(17)
// checkAge2(18)
// checkAge2(61)

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = function(str) {
    let age = Number(str)
       
    if (typeof(age) != 'number' || age <= 0 || isNaN(age)){
        console.log("Введено некорректное значение! Проверьте.")
    }
    else {
        let age_1 = 18
        let age_2 = 60
        if (age < age_1) {
            console.log("You don’t have access cause your age is " + age + " It’s less then ")
        }
        else if(age >= age_1 && age < age_2){
        console.log("Welcome  !")
        }
        else if (age > age_2){
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    }
}

checkAge3(" ")
checkAge3("2")
checkAge3("asd")
checkAge3("#%^&*")
checkAge3(-1)
checkAge3(0)
checkAge3(60)
checkAge3(17)
checkAge3(18)
checkAge3(61)
