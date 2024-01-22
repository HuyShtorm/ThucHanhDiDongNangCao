"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Intl = require("intl");
var Account = /** @class */ (function () {
    function Account(accNumber, name, balance) {
        if (accNumber === void 0) { accNumber = 999999; }
        if (name === void 0) { name = "chưa xác định"; }
        if (balance === void 0) { balance = 50000; }
        this.RATE = 0.035;
        if (accNumber <= 0 || name.trim() === "" || balance < 50000) {
            this.accountNumber = 999999;
            this.name = "chưa xác định";
            this.balance = 50000;
        }
        else {
            this.accountNumber = accNumber;
            this.name = name;
            this.balance = balance;
        }
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    };
    Account.prototype.addInterest = function () {
        this.balance += this.balance * this.RATE;
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    };
    Account.prototype.toString = function () {
        var locale = new Intl.Locale("vi", "VN");
        var formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: 'VND' });
        return "Account Number: ".concat(this.accountNumber, "\nName: ").concat(this.name, "\nBalance: ").concat(formatter.format(this.balance));
    };
    return Account;
}());
var acc1 = new Account(72354, "Ted Murphy", 102.56);
var acc2 = new Account(69713, "Jane Smith", 40.00);
var acc3 = new Account(93757, "Edward Demsey", 759.32);
acc1.deposit(25.85);
acc2.deposit(500.00);
acc2.withdraw(430.75, 1.50);
acc3.addInterest();
console.log("Account 1:");
console.log(acc1.toString());
console.log("\nAccount 2:");
console.log(acc2.toString());
console.log("\nAccount 3:");
console.log(acc3.toString());
acc2.transfer(acc1, 100.00);
console.log("\nAfter transferring $100 from Account 2 to Account 1:");
console.log("Account 1:");
console.log(acc1.toString());
console.log("\nAccount 2:");
console.log(acc2.toString());
