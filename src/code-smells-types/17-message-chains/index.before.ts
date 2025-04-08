/**
 * 坏味道名称：过长的消息链
 * 
 * 向一个对象请求另一个对象，然后再向后者再请求另一个对象。。。这就是消息链。
 * 
 * 识别方式：
 *  1.1：连续的对象调用，比如 a.b().c().d()
 * 
 */

// 直接暴露所有内部对象
export class Product {
    constructor(public name: string, public price: number) { }
}

class OrderItem {
    constructor(public product: Product, public quantity: number) { }
}

class Order {
    public items: OrderItem[] = [];

    addItem(product: Product, quantity: number) {
        this.items.push(new OrderItem(product, quantity));
    }
}

class User {
    public order: Order | null = null;

    createOrder() {
        this.order = new Order();
        return this.order;
    }
}

// 消息长链条
const user = new User();
const order = user.createOrder();
const product = new Product("TypeScript Book", 39.99);
order.addItem(product, 2);

// 需要计算第一个商品价格时出现长链条
const itemPrice = user.order!.items[0].product.price; // 39.99
console.log(itemPrice);