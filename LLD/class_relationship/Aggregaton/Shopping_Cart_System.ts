class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string { return this.name; }
    getPrice(): number { return this.price; }
}

class Catalog {
    private products: Product[] = [];

    addProduct(product: Product): void {
        // TODO: Add product to catalog
    }

    findByName(name: string): Product | undefined {
        // TODO: Find and return product by name, return undefined if not found
        return undefined;
    }

    getProductCount(): number { return this.products.length; }
}

class Cart {
    private items: Product[] = [];

    addItem(product: Product): void {
        // TODO: Add product to cart
    }

    clearCart(): void {
        // TODO: Remove all items (don't destroy the products!)
    }

    getTotal(): number {
        // TODO: Sum prices of all items
        return 0;
    }

    getItems(): Product[] { return this.items; }
    getItemCount(): number { return this.items.length; }
}

class Customer {
    private name: string;
    private cart: Cart;

    constructor(name: string, cart: Cart) {
        this.name = name;
        this.cart = cart;
    }

    checkout(): void {
        // TODO: Print cart items and total, then clear cart
    }

    getName(): string { return this.name; }
    getCart(): Cart { return this.cart; }
}

const laptop = new Product("Laptop", 999.99);
const mouse = new Product("Mouse", 29.99);
const keyboard = new Product("Keyboard", 79.99);

const catalog = new Catalog();
catalog.addProduct(laptop);
catalog.addProduct(mouse);
catalog.addProduct(keyboard);

const cart1 = new Cart();
const cart2 = new Cart();

const alice = new Customer("Alice", cart1);
const bob = new Customer("Bob", cart2);

cart1.addItem(laptop);
cart1.addItem(mouse);
cart2.addItem(laptop);
cart2.addItem(keyboard);

console.log(`Alice's cart: ${cart1.getItemCount()} items, $${cart1.getTotal()}`);
console.log(`Bob's cart: ${cart2.getItemCount()} items, $${cart2.getTotal()}`);

alice.checkout();

console.log(`Catalog still has ${catalog.getProductCount()} products`);
console.log(`Bob's cart still has ${cart2.getItemCount()} items`);
console.log(`Laptop still exists: ${laptop.getName()}`);