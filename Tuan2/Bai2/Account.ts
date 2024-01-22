import * as Intl from 'intl';

class Account {
    private accountNumber: number;
    private name: string;
    private balance: number;
    private readonly RATE: number = 0.035;

    constructor();
    constructor(accNumber: number, name: string, balance: number);
    constructor(accNumber: number, name: string);
    constructor(accNumber: number = 999999, name: string = "chưa xác định", balance: number = 50000) {
        if (accNumber <= 0 || name.trim() === "" || balance < 50000) {
           
            this.accountNumber = 999999;
            this.name = "chưa xác định";
            this.balance = 50000;
        } else {
            this.accountNumber = accNumber;
            this.name = name;
            this.balance = balance;
        }
    }

    getAccountNumber(): number {
        return this.accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    }

    addInterest(): void {
        this.balance += this.balance * this.RATE;
    }

    transfer(acc2: Account, amount: number): boolean {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    }

    toString(): string {
        const locale = new Intl.Locale("vi", "VN");
        const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: 'VND' });

        return `Account Number: ${this.accountNumber}\nName: ${this.name}\nBalance: ${formatter.format(this.balance)}`;
    }
}

let acc1 = new Account(72354, "Ted Murphy", 102.56);
let acc2 = new Account(69713, "Jane Smith", 40.00);
let acc3 = new Account(93757, "Edward Demsey", 759.32);

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
