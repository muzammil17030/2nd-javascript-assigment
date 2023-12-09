// alet 

alert("HI,Hope you are going well")


//  variables
var a = 5;
var b = 6;
var c = a + b;
console.log(a + b + c)
console.log(typeof a, typeof b, typeof c)



// variables for string 

var a = "pathan";
var b = "khan"

console.log(a, b)


//  variable for number 
  var num = 25
  var newNum = num+20
  console.log(num)
  console.log(newNum)
  newNum=newNum+40
  console.log(newNum)

 
        IllEGAL VARIABLES
        var  Name = 
        var 1stname = 
        var _name = 
        var firstname =   (WRITE IN CAMELCASE)
        
        LEGAL VARIABLES
        var name = 
        var first_name=
        var $name=



// Math expressions Unfamiliar operators

var a=5;
var b=6;      
console.log(++a+b)

// mathematical representation 


var totalCost = 1 + 3 -2 * 4;
console.log(totalCost)

// prompt 

var khn = prompt("Your age?",);
console.log(khn)

// if statemenet 

var cnic = true;
 if (cnic === true) {
 console.log("Correct!");
}

// Testing sets of conditions 

var weight=340;
var height=5

 if (weight > 300 && height < 6) {
     console.log("allow");
     }
     else {
     console.log("alllow");
     }



// Chapter 12
var age1 = prompt("Enter your age.")
var studentCard = prompt("Do you have student card. Yes or No")
age = Number(age1)
if (age1 >= 18) {
    Console.log("You are adult.")
} else if (studentCard = "yes") {
    console.log("You are allowed")
} else {
    console.log("You are not allowed")
}

// Chapter 13
var weight = 260
var time = 5
var age = 17
var gender = "male"
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}
var SAT = 3.5
var avg = 5
var GPA = 3.9
var sport = 'Cricket'
if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}

// Chapter 14

var want = prompt("What do you want? :fruit, vegetables or meat")
if (want == "fruit") {
    var name = prompt("which fruit? : apple, mango, grapes, water melon or peach")
    if (name == "apple" || name == "mango" || name == "grapes" || name == "water melon" || name == "peach") { var price = prompt("Your fixed price for 1 kg is Rs.100.") } else { alert("Sorry we don't have it") }
    if (price == "100") { var kgs = prompt("How many kgs do you want?") } else { alert("Please enter the right price") }
    if (kgs == "num") { var thanks = alert("Thanks for buying.") } else { alert("please enter the number of kgs") }
}

else if (want == "meat") {
    var meat = prompt("which meat: beef, mutton or chicken")
    if (meat == "chicken" || meat == "beef" || meat == "mutton") { var price = prompt("Your fixed price for 1 kg is Rs.500.") } else { ("Sorry we don't have it") }
    if (price == "500") { var kgs = prompt("How many kgs do you want.") } else { ("Please enter the right price") }
    if (kgs == "num") { var thanks = alert("Thanks for buying") }
}

else if (want == "vegetables") {
    var name = prompt("Which vegetables: brinjal, peas, cucumber, bittergourd or potato")
    if (name == "brinjal" || name == "peas" || name == "cucumber" || name == "bittergourd" || name == "potato") { var price = prompt("Your fixed price for 1 kg is Rs.90.") } else { ("Sorry we don't have it") }
    if (price == "90") { var kgs = prompt("How many kgs do you want?") } else { ("Please enter the right price") }
    if (kgs == "num") { var thanks = alert("Thanks for buing") }
} else { alert("sorry we don't have it") }

// Chapter 15
var names=["ibrahim","imran","khalil"]
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2])

// Chapter 16
var names=["mudassir","yaseen","iqbal"]
console.log(names)
names[0]='Mahad'
names[1]="Muzammil"
console.log(names)
names.pop()
console.log(names)
names.push("munawwar")
console.log(names)


// Chapter 17
var persons=["muhammad",'khalil',"ibrahim",'farooq']
console.log(persons)
persons.shift()
console.log(persons)
persons.unshift("Mudassir")
console.log(persons)
var friend=persons.slice(0,3)
console.log(friend)
var friends=persons.splice(2,2,"MAAZ")
console.log(friends)
console.log(persons)














