// 1.kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}

// 2.budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var total = watch*50 + mobile*100 +laptop*500;
    return total
}

// 3.hotelCost
function hotelCost(days){
    var cost = 0;
if(days <=10){
    cost = days*100;
}else if(days <=20){
     var firstTenDays = 10*100;
     var remaining = days-10;
     var secondTenDays = remaining*80;
     cost = firstTenDays + secondTenDays;
}
else{
    var firstTenDays = 10*100;
    var secondTenDays = 10*80;
    var remaining = days-20;
    var lastDays = remaining*50;
    cost = firstTenDays + secondTenDays + lastDays;
}
return cost;
}

// 4.megaFriend
function megaFriend(strs) {
    var mega = '';
    for (var i = 0; i < strs.length; i++) {
    if (strs[i].length > mega.length)
    mega = strs[i];
    }
    return mega;
}
    