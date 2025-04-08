export class DiscountCalculator {
    // 将临时字段提升为构造函数参数
    constructor(
        private readonly customerType: string,
        private readonly seasonalDiscount: number
    ) { }

    calculateDiscount() {
        let discount = 0;
        if (this.customerType === "VIP") {
            discount += 0.1;
        }
        discount += this.seasonalDiscount;
        return discount;
    }
}

export class OrderProcessor {
    processOrder(amount: number) {
        console.log(`Processing order amount: ${amount}`);
    }

    // 通过参数传递数据，不再维护临时状态
    calculateDiscount(customerType: string, seasonalDiscount: number) {
        return new DiscountCalculator(customerType, seasonalDiscount).calculateDiscount();
    }
}