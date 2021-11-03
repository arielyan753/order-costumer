function Address(city, street, num) {
this.city = city;
this.street = street;
this.num = num;
}

Address.prototype.getFullAdress = () => {
    return this.city + ' ' + this.street + ' ' + this.num 
}

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = () => {
    return this.firstName + ' ' + this.lastName
}

function Costumer(firstName, lastName, city, street , num){
    Person.call(this,firstName, lastName);
    Address.call(this, city, street, num);
}
Costumer.prototype = Object.create(Person.prototype)

Costumer.prototype.costumerDetails = () => {
    return (this.getFullName() + ' ' + this.getFullAdress())
}

function Item (itemName, itemID ,itemPrice){
    this.itemName = itemName;
    this.itemID = itemID;
    this.itemPrice = itemPrice;
}
function Order (orederID, firstName, lastName, city, street, num){
    this.orederID = orederID
    this.items = []
    this.costumerDetails =  new Costumer(firstName,lastName,city,street,num)
    this.addItemToOrder = (itemName, itemID, itemPrice) => {
        const newItem = new Item (itemName, itemID, itemPrice)
        this.items.push(newItem)
        this.getTotalPrice = () => {
            let totalPrice = 0
            for (let item of this.items){
                totalPrice = totalPrice + item.itemPrice
            }
            return totalPrice
        }
    }
}

const myCostumer = new Order( 1 ,'ariel','yankilevich','kfar saba','tel hay',13)
console.log(myCostumer.addItemToOrder('book',6, 12))
console.log(myCostumer.addItemToOrder('TV',7, 30))
console.log(myCostumer.getTotalPrice())
console.log(myCostumer)
