var john = {
    fullName:  'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcCost: function () {
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip = this.tips;
            var total = this.totals;

            if (bill < 50) {
                tip.push(bill * .2);
                total.push(bill * .2 + bill);
            } else if (bill >= 50 && bill <= 200) {
                tip.push(bill * .15);
                total.push(bill * .15 + bill);
            } else {
                tip.push(bill * .1);
                total.push(bill * .1 + bill);
            }
        }
    },
    tips: [],
    totals: []
}
john.calcCost();
console.log(john);




