export class Product {
    constructor(private name: string, private price: number) { }

    getPrice() {
        return this.price;
    }
}

class OrderItem {
    constructor(private product: Product, private quantity: number) { }

    getProductPrice() {
        return this.product.getPrice();
    }
}

class Order {
    private items: OrderItem[] = [];

    addItem(product: Product, quantity: number) {
        this.items.push(new OrderItem(product, quantity));
    }

    // 封装获取第一个商品价格的逻辑
    getFirstItemPrice(): number | null {
        if (this.items.length === 0) return null;
        return this.items[0].getProductPrice();
    }
}

class User {
    private order: Order | null = null;

    createOrder() {
        this.order = new Order();
        return this.order;
    }

    // 在用户对象中直接提供获取方法
    getFirstOrderItemPrice(): number | null {
        if (!this.order) return null;
        return this.order.getFirstItemPrice();
    }
}

const user = new User();
const order = user.createOrder();
const product = new Product("TypeScript Book", 39.99);
order.addItem(product, 2);

// 重构后调用方式
const itemPrice = user.getFirstOrderItemPrice(); // 39.99
console.log(itemPrice);