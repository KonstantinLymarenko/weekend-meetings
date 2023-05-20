// За допомогою цикла for додайте всі чьотні значення від мін до макс

const min = Number(prompt("Enter min number:"));
const max = Number(prompt("Enter max number:"));
console.log('Your numbers:', min, max);
if (isNaN(min) || isNaN(max)) {
    alert( 'Your numbers are invalid')
    
} else {
    if (min >= max) {
        alert( 'Your min bigger then max')  
    }
    let total = 0;
    for (let i = min; i <= max; i += 1)

    {
        if (i % 2 !== 0 || i===0)  {

            continue;   
        }
        total += i;
        console.log(i); 
 
        
        }
    // console.log(total, "Total"); 
}


