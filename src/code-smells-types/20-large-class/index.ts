export class Order {
    constructor(public id: number, public item: string, public price: number) { }
}

export class OrderManager {
    private orders: Order[] = [];

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    getOrders(): Order[] {
        return this.orders;
    }
}

export class OrderCalculator {
    static getTotalPrice(orders: Order[]): number {
        return orders.reduce((total, order) => total + order.price, 0);
    }
}

export class OrderPrinter {
    static printOrders(orders: Order[]): void {
        console.log("Orders:");
        orders.forEach(order => console.log(order));
    }
}

export class OrderRepository {
    static saveOrders(orders: Order[]): void {
        console.log("Saving orders to database...");
        // 模拟接口调用
    }
}
