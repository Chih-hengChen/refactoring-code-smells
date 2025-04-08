import { processOrder } from "./index.before";
import { processOrderRefactored } from ".";

describe('processOrderRefactored', () => {
    it('should calculate the correct total amount with discount and tax', () => {
        const customer = {
            id: 'C001',
            name: 'Alice',
            address: '123 Wonderland Ave',
        };

        const product = {
            id: 'P101',
            name: 'Magic Hat',
            quantity: 2,
            price: 50, // 每个产品价格50
        };

        const order = {
            discount: 0.1, // 10% 折扣
            taxRate: 0.07, // 7% 税率
        };

        const beforeResult = processOrder(
            customer.id,
            customer.name,
            customer.address,
            product.id,
            product.price,
            product.name,
            product.quantity,
            order.discount,
            order.taxRate
        );
        const result = processOrderRefactored(customer, product, order);

        // subtotal = 2 * 50 = 100
        // discountAmount = 100 * 0.1 = 10
        // taxAmount = (100 - 10) * 0.07 = 6.3
        // totalMoney = 100 - 10 + 6.3 = 96.3
        expect(beforeResult).toEqual({
            customerId: 'C001',
            customerName: 'Alice',
            productId: 'P101',
            totalMoney: 96.3,
        });
        expect(result).toEqual({
            customerId: 'C001',
            customerName: 'Alice',
            productId: 'P101',
            totalMoney: 96.3,
        });
    });
});
