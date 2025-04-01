/**
 * 坏味道名称：过大的类
 * 
 * 单个类承担太多工作，分工不明，重复代码多。
 * 
 * 识别方式：
 *  1.1：承担太多职责
 *  1.2：太多逻辑不相干
 * 
 */
export class OrderService {
    private orders: { id: number; item: string; price: number }[] = [];

    addOrder(id: number, item: string, price: number): void {
        this.orders.push({ id, item, price });
    }

    getTotalPrice(): number {
        return this.orders.reduce((total, order) => total + order.price, 0);
    }

    printOrders(): void {
        console.log("Orders:");
        this.orders.forEach(order => console.log(order));
    }

    saveOrders(): void {
        console.log("Saving orders to database...");
        // 模拟接口调用
    }
}
