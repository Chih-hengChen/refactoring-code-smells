/**
 * 坏味道名称：临时字段
 * 
 * 识别方式：
 *  1.1：类的某些字段仅在特定场景下被使用
 *  1.2：字段在大部分时间内为 null 或未初始化状态
 * 
 */

export class OrderProcessor {
    // 仅在 calculateDiscount 方法中被使用
    private customerType: string | null = null;
    private seasonalDiscount: number | null = null;

    processOrder(amount: number) {
        console.log(`Processing order amount: ${amount}`);
    }

    // 集中操作临时字段
    calculateDiscount(customerType: string, seasonalDiscount: number) {
        this.customerType = customerType;
        this.seasonalDiscount = seasonalDiscount;

        let discount = 0;
        if (this.customerType === "VIP") {
            discount += 0.1;
        }
        if (this.seasonalDiscount !== null) {
            discount += this.seasonalDiscount;
        }
        return discount;
    }
}