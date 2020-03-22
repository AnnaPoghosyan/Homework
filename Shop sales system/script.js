let chooseItem = +prompt("Please choose the item 1.Jeans(120,000AMD), 2.Shoes(50,000AMD), 3.T-Shirt(150,000 AMD)");
let paymentMethod = +prompt("Please choose payment method 1.By cash 2.Bank transfer");
if (paymentMethod === 1) {
    let paymentByCash = +prompt("Enter the amount")
    if(chooseItem === 1 && paymentByCash === 120000) {  //yndhanur payman karox ei grel orinat ete giny>100000 30% zexchi, bayc qani vor amen apranqi hamar 6-14 toxerum arandzin arjeqner em sahmanel chkaroxaca hamadrel dranq u yndhanur payman sahmanelu tarberaky
        confirm("You've bought Jeans");
        confirm (`You have a 30% discount, the price is ${paymentByCash*0.7}AMD`);
    } else if (chooseItem === 2 && paymentByCash === 50000) {
        confirm("You've bought Shoes");
        confirm (`You have a 10% discount, the price is ${paymentByCash*0.9}AMD`);
    } else if(chooseItem === 3 && paymentByCash === 150000) {
        confirm("You've bought T-shirt");
        confirm (`You have a 30% discount, the price is ${paymentByCash*0.7}AMD`);
    } else {
        confirm("The amount entered is not valid")
    }
}
if (paymentMethod === 2) {
    let paymentByAccount = +prompt("enter bank account")
    let moneyAmount = +prompt ("Enter the amount")
    if(chooseItem === 1 && moneyAmount === 120000) {
        confirm("You've bought Jeans");
        confirm (`You have a 30% discount, the price is ${moneyAmount*0.7}AMD`);
    } else if (chooseItem === 2 && moneyAmount === 50000) {
        confirm("You've bought Shoes");
        confirm (`You have a 10% discount, the price is ${moneyAmount*0.9}AMD`);
    } else if(chooseItem === 3 && moneyAmount === 150000) {
        confirm("You've bought T-shirt");
        confirm (`You have a 30% discount, the price is ${moneyAmount*0.7}AMD`);
    } else {
        confirm("The amount entered is not valid")
    }
}


// ktroni mej verjnakan giny chem karoxanum stanal, chgitem vonc vercnem anhrajesht arjeqy