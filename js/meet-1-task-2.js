//Напишіть функцію яка отримує значення від користувача  від 1 до 60 і визначає в яку чверть його віднести
const userData = prompt("Ввести ваше число");
function checkUserData(item){
    const userDataNumb = Number(item);
    if(isNaN(userDataNumb)){
        alert("Ваші дані не є числом");
    }
    else{
        if(userDataNumb >= 1 && userDataNumb <= 15){
            alert(`Ваше число в першій чверті ${userDataNumb}`);
        }

        else if(userDataNumb >= 16 && userDataNumb <= 30){
            alert(`Ваше число в другій чверті ${userDataNumb}`);
        }
        
        else if(userDataNumb >= 31 && userDataNumb <= 45){
            alert(`Ваше число в третій чверті ${userDataNumb}`)
        }
        else if(userDataNumb >= 46 && userDataNumb <= 60){
            alert(`Ваше число в четвертій чверті ${userDataNumb}`)
        }
       
        else {
            alert("Ваше число не входить в діапазон")
        }
    }
}
checkUserData(userData);
