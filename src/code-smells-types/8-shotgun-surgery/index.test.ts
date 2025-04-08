import { Order, User, Promotion, Shipping } from './index.before';
import { PricingService, UserDiscountStrategy, PromotionDiscountStrategy, DomesticShipping, InternationalShipping } from './index';

// 测试重构前的代码
describe('Order (重构前)', () => {
    it('普通用户 + 节假日促销 + 国内运费', () => {
        const user = new User();
        user.type = "normal";

        const promotion = new Promotion();
        promotion.currentType = "holiday";

        const shipping = new Shipping();
        shipping.region = "domestic";
        shipping.weight = 2;

        const order = new Order();
        order.user = user;
        order.promotion = promotion;
        order.shipping = shipping;
        order.productPrice = 100;

        const totalPrice = order.calculateTotalPrice();
        expect(totalPrice).toBe(100 * 0.8 + 2 * 5); // 80 + 10 = 90
    });

    it('VIP 用户 + 季节性促销 + 国际运费', () => {
        const user = new User();
        user.type = "vip";

        const promotion = new Promotion();
        promotion.currentType = "seasonal";

        const shipping = new Shipping();
        shipping.region = "international";
        shipping.weight = 3;

        const order = new Order();
        order.user = user;
        order.promotion = promotion;
        order.shipping = shipping;
        order.productPrice = 100;

        const totalPrice = order.calculateTotalPrice();
        expect(totalPrice).toBe(100 * 0.9 * 1 + 3 * 10); // 90 + 30 = 120
    });
});

// 测试重构后的代码
describe('PricingService (重构后)', () => {
    it('普通用户 + 节假日促销 + 国内运费', () => {
        const userDiscount = new UserDiscountStrategy("normal");
        const promotionDiscount = new PromotionDiscountStrategy("holiday");
        const shipping = new DomesticShipping();

        const pricingService = new PricingService(
            [userDiscount, promotionDiscount],
            shipping
        );

        const totalPrice = pricingService.calculateTotalPrice(100, 2);
        expect(totalPrice).toBe(100 * 0.8 + 2 * 5); // 80 + 10 = 90
    });

    it('VIP 用户 + 季节性促销 + 国际运费', () => {
        const userDiscount = new UserDiscountStrategy("vip");
        const promotionDiscount = new PromotionDiscountStrategy("seasonal");
        const shipping = new InternationalShipping();

        const pricingService = new PricingService(
            [userDiscount, promotionDiscount],
            shipping
        );

        const totalPrice = pricingService.calculateTotalPrice(100, 3);
        expect(totalPrice).toBe(100 * 0.9 * 1 + 3 * 10); // 90 + 30 = 120
    });
});