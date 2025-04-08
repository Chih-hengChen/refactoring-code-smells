import { Order } from './index.before';
import { Customer as CustomerAfter } from './index';

describe('Order Total Calculation', () => {
    // 测试数据
    const items = [{ price: 100 }, { price: 200 }]; // 总价 300
    const customer = new CustomerAfter(0.1, 0.2); // 10% 折扣，20% 税率

    test('重构前：Order 类直接计算', () => {
        const order = new Order(items);
        // 300 - (300*0.1) = 270; 270 * 0.2 = 54; 总价 270 + 54 = 324
        expect(order.calculateTotal(customer)).toBe(324);
    });

    test('重构后：委托给 Customer 类计算', () => {
        const order = new Order(items);
        // 计算结果应保持不变
        expect(order.calculateTotal(customer)).toBe(324);
    });

    test('Customer 类独立计算逻辑', () => {
        // 直接测试 Customer 类的新方法
        expect(customer.calculateOrderTotal(300)).toBe(324);
    });
});