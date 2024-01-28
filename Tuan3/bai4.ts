class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

class InvoiceLineItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    calcLineItemTotal(): number {
        return this.quantity * this.product.getPrice();
    }

    toString(): string {
        return `Product: ${this.product.getName()}, Quantity: ${this.quantity}, Subtotal: ${this.calcLineItemTotal().toFixed(2)}`;
    }
}

class Invoice {
    private lineItems: InvoiceLineItem[] = [];

    addLineItem(product: Product, quantity: number): void {
        const lineItem = new InvoiceLineItem(product, quantity);
        this.lineItems.push(lineItem);
    }

    calcTotalPrice(): number {
        let totalPrice = 0.0;
        for (const lineItem of this.lineItems) {
            totalPrice += lineItem.calcLineItemTotal();
        }
        return totalPrice;
    }

    calcTotalCharge(): number {
        return this.calcTotalPrice();
    }

    printInvoice(): void {
        console.log("Invoice Details:");
        for (const lineItem of this.lineItems) {
            console.log(lineItem.toString());
        }
        console.log(`Total Charge: ${this.calcTotalCharge().toFixed(2)}`);
    }
}

// Test
const product1= new Product("Product A", 10.5);
const product2 = new Product("Product B", 8.0);

const invoice = new Invoice();
invoice.addLineItem(product1, 3);
invoice.addLineItem(product2, 2);

invoice.printInvoice();
