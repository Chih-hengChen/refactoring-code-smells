// 封装地址数据泥团
class Address {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public postalCode: string
    ) { }

    // 将地址相关行为封装到类中
    format(): string {
        return `${this.city}, ${this.state} ${this.postalCode}`;
    }

    validate(): boolean {
        return !!this.city && !!this.state && this.postalCode.length === 5;
    }
}

// 封装用户全名逻辑
class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: Address // 使用 Address 对象替代分散字段
    ) { }

    // 封装全名逻辑
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export {
    User,
    Address
}