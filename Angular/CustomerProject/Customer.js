// pure js, no ng code
function Customer(utility) { // model should not have UI access (view)
    // var dt = new Date();

    this.CustomerName = "Olivia";
    this.CustomerCode = "1001";
    this.CustomerAmount = 100;
    this.SalesDateTime = utility.getDate(); // dt.toDateString();//toLocaleDateString();
    this.CalculateDiscount = function() {
        // return 10;
        alert("10");
    }
}

// prototypical inheritance
function CustomerGold(utility) { // model should not have UI access (view)
    var dt = new Date();

    this.CustomerName = "Olivia";
    this.CustomerCode = "1001";
    this.CustomerAmount = 100;
    this.SalesDateTime = utility.getDate(); // dt.toDateString();//toLocaleDateString();
    this.CalculateDiscount = function() {
        // return 20;
        alert("20");
    }
}

function Factory() {
    return {
        CreateCustomer: function (type, utility) {
            if (type == 1) {
                return new Customer(utility);
            } else {
                return new CustomerGold(utility);
            }
        }
    }
}