let products = [
    { name:"TV", category:"Electronics", price: 120.78, inventory: 22 },
    { name:"Silverware", category:"Household", price: 20.78, inventory: 29 },
    { name:"Shirt", category:"Apparel", price: 12.78, inventory: 40 },
    { name:"Bacon", category:"Grocery", price: 10.78, inventory: 24 },
    { name:"Shorts", category:"Apparel", price: 520.88, inventory: 10 },
    
 
]
let customers = ("john", "Kam", "adam")


for (let product of products) {
    let discount = 0;
switch (product.category) {
    case "Electronics":
    discount = .2
    break;
    case "Apparel":
    discount = .15
    break;
    case "Grocery":
    case "Household":
    discount = .1
    break;
    case "Default":
    discount = 0
}
    let promoprice = product.price * (1-discount); 
     product.promoprice = promoprice;
}
console.log (products)

customertype = ("Senior", "Student", "Regular"); 
    if (customertype = "Senior")
    discount = 0.07;
else if (customertype = "student")
    discount = 0.05;
else if (customertype = "Regular")
    discount = 0

let custdiscount = customertype.price * (1-discount); 
     customertype.custdiscount = custdiscount;

    
    for (let i = 1; i < 2; i++) {
        console.log ("Customer #1: ", customertype = "Senior, ", productname ="TV, ", category ="Electronics, ", price = 120.78 - custdiscount, inventory = 21)
        console.log ("Customer #2: ", customertype = "Student, ", productname = "Silverware, ", category ="Household, ", price = 20.78, inventory = 28)
        console.log ("Customer #3: ", productname ="Bacon", category ="Grocery", price = 10.78, inventory = 23 )


    }