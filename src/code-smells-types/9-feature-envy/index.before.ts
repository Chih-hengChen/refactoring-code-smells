/**
 * 坏味道名称：依恋情结
 * 
 * 一个函数跟另一个模块中的函数或者数据交流格外频繁
 * 远胜于在自己所在模块内部的交流，这就是依恋情结的典型特征。
 * 
 * 识别方式：
 *  1.1：频繁访问或修改其他类属性
 *  1.2：行为和职责不匹配
 * 
 *  
 * 会存在这样一种情况：
 * 一个函数往往会用到几个模块的功能，那它应该放在那里呢？
 * 判断哪个模块拥有此函数使用的数据最多，那么这个函数就和那些数据放在一起。
 * 
 */

// Order.ts
class Order {
    constructor(private items: Array<{ price: number }>) { }

    calculateTotal(customer): number {
        const basePrice = this.items.reduce((sum, item) => sum + item.price, 0);
        const discount = customer.getDiscountRate() * basePrice; // 频繁访问 Customer
        const tax = customer.getTaxRate() * (basePrice - discount); // 再次访问 Customer
        return basePrice - discount + tax;
    }
}

// Customer.ts
class Customer {
    constructor(private discountRate: number, private taxRate: number) { }

    getDiscountRate(): number {
        return this.discountRate;
    }

    getTaxRate(): number {
        return this.taxRate;
    }
}

export {
    Customer,
    Order
}
