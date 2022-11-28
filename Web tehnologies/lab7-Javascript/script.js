

//1-st function(add numbers)
function sumTo(n) {   
    var sum = 0;
    if ( n >= 0 && (Number.isInteger(n)==true))
        {for (let i = 0; i < n; i++)
         {
            sum += i;
         }
            return sum;
        }
    else
    console.log("eroare");
}

//writing in console 
//function

console.log(sumTo(4));
console.log(sumTo(-4));
console.log(sumTo(4.3));
console.log(sumTo(-4.3));

//1-st object
var employee =
{   firstName : "Ion",
    lastName : "Popescu",
    jobTitle : "engineer",
    department : "EA",
    birthYear : 1985,
    getFullDescription: function () {
        return (this.firstName + " " + this.lastName + " is an " + this.jobTitle + " in our " + this.department + " department");
    },
    getFullName: function (){
        return this.firstName + " " + this.lastName;
    }
}

//writing in console
//object
window.alert(employee.getFullDescription());
document.write(employee.getFullName())



