// 定义折扣策略接口
interface DiscountStrategy {
    getDiscount(): number;
}

// 将会员折扣封装为独立策略
class UserDiscountStrategy implements DiscountStrategy {
    constructor(private userType: "vip" | "normal" | "superVip") { }

    getDiscount(): number {
        if (this.userType === "superVip") return 0.8;
        else if (this.userType === "vip") return 0.9;
        return 1;
    }
}

// 将促销折扣封装为独立策略
class PromotionDiscountStrategy implements DiscountStrategy {
    constructor(private promotionType: "holiday" | "seasonal") { }

    getDiscount(): number {
        if (this.promotionType === "holiday") return 0.8;
        return 1;
    }
}

// 将运费计算策略化
interface ShippingStrategy {
    calculate(weight: number): number;
}

class DomesticShipping implements ShippingStrategy {
    calculate(weight: number): number {
        return weight * 5;
    }
}

class InternationalShipping implements ShippingStrategy {
    calculate(weight: number): number {
        return weight * 10;
    }
}

class PricingService {
    constructor(
        private discountStrategies: DiscountStrategy[],
        private shippingStrategy: ShippingStrategy
    ) { }

    calculateTotalPrice(productPrice: number, weight: number): number {
        // 集中处理所有折扣
        const totalDiscount = this.discountStrategies.reduce(
            (acc, strategy) => acc * strategy.getDiscount(),
            1
        );
        // 计算基础价格
        const basePrice = productPrice * totalDiscount;
        // 计算运费
        const shippingCost = this.shippingStrategy.calculate(weight);
        return basePrice + shippingCost;
    }
}

export {
    PricingService,
    UserDiscountStrategy,
    PromotionDiscountStrategy,
    DomesticShipping,
    InternationalShipping
}