import { User as UserBefore, formatAddress, validateAddress } from "./index.before";
import { Address, User } from "./index";

describe("重构前代码的测试", () => {
    let user: any;

    beforeAll(() => {
        user = new UserBefore("John", "Doe", "123 Main St", "New York", "NY", "10001");
    });

    test("用户全名拼接", () => {
        expect(`${user.firstName} ${user.lastName}`).toBe("John Doe");
    });

    test("地址格式化", () => {
        expect(formatAddress(user.city, user.state, user.postalCode))
            .toBe("New York, NY 10001");
    });

    test("地址验证", () => {
        expect(validateAddress(user.city, user.state, user.postalCode)).toBe(true);
    });
});

describe("重构后代码的测试", () => {
    let address: Address;
    let user: User;

    beforeAll(() => {
        address = new Address("123 Main St", "New York", "NY", "10001");
        user = new User("John", "Doe", address);
    });

    test("用户全名方法", () => {
        expect(user.getFullName()).toBe("John Doe");
    });

    test("地址格式化方法", () => {
        expect(address.format()).toBe("New York, NY 10001");
    });

    test("地址验证方法", () => {
        expect(address.validate()).toBe(true);
    });

    // 边界测试
    test("无效邮政编码验证", () => {
        const badAddress = new Address("456 Elm St", "Boston", "MA", "1234");
        expect(badAddress.validate()).toBe(false);
    });
});