/**
 * 坏味道名称：霰弹式修改
 * 
 * 修改一个功能点或逻辑，需要对多个类进行修改。
 * 
 * 识别方式：
 *  1.1：不同类中有相同的逻辑（类似重复代码
 *  1.2：在多个文件中修改同一个功能（多个文件硬编码
 * 
 */

// 上面两种例子很常见不再演示，下面写一个更隐藏的demo
// 如果新增一种用户类型（如 superVip），需要修改 User 类、Promotion 类（假设促销规则变化）、甚至 Order 的调用逻辑，导致分散的修改点。

// 用户类（处理会员折扣）
class User {
    type: "vip" | "normal";

    getDiscount(): number {
        if (this.type === "vip") return 0.9;  // 10% 折扣
        return 1;
    }
}

// 促销类（处理活动折扣）
class Promotion {
    currentType: "holiday" | "seasonal";

    getPromotionDiscount(): number {
        if (this.currentType === "holiday") return 0.8;  // 20% 折扣
        return 1;
    }
}

// 运费类（处理运费计算）
class Shipping {
    region: "domestic" | "international";
    weight: number;

    getShippingCost(): number {
        if (this.region === "domestic") return this.weight * 5;
        return this.weight * 10;
    }
}

// 订单类（需要分散调用多个类的方法）
class Order {
    user: User;
    promotion: Promotion;
    shipping: Shipping;
    productPrice: number;

    calculateTotalPrice(): number {
        const basePrice = this.productPrice *
            this.user.getDiscount() *
            this.promotion.getPromotionDiscount();
        return basePrice + this.shipping.getShippingCost();
    }
}

export {
    User,
    Order,
    Shipping,
    Promotion
}