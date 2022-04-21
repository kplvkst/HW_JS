    // let age_1 = "62" 
    let age_2 = 18
    let age_3 = 60


const checkAge =  function (age) {
    if (age == Number(age)) {

        if (age < age_2) {
        alert("You don't have access cause your age is " + age + ". It's less than " +  age_2)
        }
        else if (age >= age_2 && age < age_3) {
        alert("Welcome!")
        }
        else if (age > age_3) {
        alert("Keep calm and look Culture channel")
        }
        else {
            alert("Technical work")
        }
    } else {
        alert("Error")
    }
    }    

// checkAge('17')
// checkAge('18')
// checkAge('60')
// checkAge('rgr')
// checkAge("2e1")
let userAge = prompt("Сколько тебе лет?")
checkAge(userAge)