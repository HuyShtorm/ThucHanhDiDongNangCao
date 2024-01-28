var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var InvoiceLineItem = /** @class */ (function () {
    function InvoiceLineItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    InvoiceLineItem.prototype.calcLineItemTotal = function () {
        return this.quantity * this.product.getPrice();
    };
    InvoiceLineItem.prototype.toString = function () {
        return "Product: ".concat(this.product.getName(), ", Quantity: ").concat(this.quantity, ", Subtotal: ").concat(this.calcLineItemTotal().toFixed(2));
    };
    return InvoiceLineItem;
}());
var Invoice = /** @class */ (function () {
    function Invoice() {
        this.lineItems = [];
    }
    Invoice.prototype.addLineItem = function (product, quantity) {
        var lineItem = new InvoiceLineItem(product, quantity);
        this.lineItems.push(lineItem);
    };
    Invoice.prototype.calcTotalPrice = function () {
        var totalPrice = 0.0;
        for (var _i = 0, _a = this.lineItems; _i < _a.length; _i++) {
            var lineItem = _a[_i];
            totalPrice += lineItem.calcLineItemTotal();
        }
        return totalPrice;
    };
    Invoice.prototype.calcTotalCharge = function () {
        return this.calcTotalPrice();
    };
    Invoice.prototype.printInvoice = function () {
        console.log("Invoice Details:");
        for (var _i = 0, _a = this.lineItems; _i < _a.length; _i++) {
            var lineItem = _a[_i];
            console.log(lineItem.toString());
        }
        console.log("Total Charge: ".concat(this.calcTotalCharge().toFixed(2)));
    };
    return Invoice;
}());
// Test
var product1 = new Product("Product A", 10.5);
var product2 = new Product("Product B", 8.0);
var invoice = new Invoice();
invoice.addLineItem(product1, 3);
invoice.addLineItem(product2, 2);
invoice.printInvoice();
