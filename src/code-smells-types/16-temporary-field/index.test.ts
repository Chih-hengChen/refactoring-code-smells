import { OrderProcessor as OrderProcessorBefore } from "./index.before";
import { OrderProcessor as OrderProcessorAfter } from "./index";

describe("OrderProcessor Compatibility Test", () => {
    // 测试两个版本的公共接口一致性
    describe.each([
        { impl: OrderProcessorBefore, name: "Original Implementation" },
        { impl: OrderProcessorAfter, name: "Refactored Implementation" }
    ])("$name", ({ impl }) => {
        let processor: InstanceType<typeof impl>;

        beforeEach(() => {
            processor = new impl();
        });

        it("should process order with correct amount", () => {
            const consoleSpy = jest.spyOn(console, "log");
            processor.processOrder(100);
            expect(consoleSpy).toHaveBeenCalledWith("Processing order amount: 100");
        });

        it("should calculate VIP discount with seasonal discount", () => {
            expect(processor.calculateDiscount("VIP", 0.05)).toBeCloseTo(0.15);
        });

        it("should calculate Regular customer discount", () => {
            expect(processor.calculateDiscount("Regular", 0.02)).toBeCloseTo(0.02);
        });

        it("should handle zero seasonal discount", () => {
            expect(processor.calculateDiscount("VIP", 0)).toBeCloseTo(0.1);
        });
    });
});