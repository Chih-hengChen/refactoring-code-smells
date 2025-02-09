// Order.ts
class Order {
    constructor(private items: Array<{ price: number }>) { }

    // 委托给 Customer 类的方法
    calculateTotal(customer: Customer): number {
        const basePrice = this.items.reduce((sum, item) => sum + item.price, 0);
        return customer.calculateOrderTotal(basePrice); // 减少对 Customer 内部数据的直接访问
    }
}

// Customer.ts
class Customer {
    constructor(private discountRate: number, private taxRate: number) { }

    // 将折扣计算逻辑移动到Customer
    calculateOrderTotal(basePrice: number): number {
        const discount = this.discountRate * basePrice;
        const tax = this.taxRate * (basePrice - discount);
        return basePrice - discount + tax;
    }
}

export {
    Customer,
    Order
}