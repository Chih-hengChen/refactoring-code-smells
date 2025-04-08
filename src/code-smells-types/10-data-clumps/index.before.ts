/**
 * 坏味道名称：数据泥团
 * 
 * 一组总是同时出现的数据项，它们可能在多个地方被一起传递或使用。
 * 比如用户的信息：地址、电话、用户等级等等字段一起被使用，但并不是一个对象形式传递
 * 
 * 识别方式：
 *  1.1：重复的参数组合
 *  1.2：重复的字段集合
 * 
 */

// 场景：用户管理系统，存在多个处理地址的重复参数
class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public street: string,
        public city: string,    // 数据泥团：地址相关字段
        public state: string,
        public postalCode: string
    ) { }
}

// 重复传递地址参数的函数
function formatAddress(city: string, state: string, postalCode: string): string {
    return `${city}, ${state} ${postalCode}`;
}

function validateAddress(city: string, state: string, postalCode: string): boolean {
    return !!city && !!state && postalCode.length === 5;
}

// 重复拼接用户全名
const user = new User("John", "Doe", "123 Main St", "New York", "NY", "10001");
console.log(`User: ${user.firstName} ${user.lastName}`); // 直接拼接全名

export {
    User,
    formatAddress,
    validateAddress
}