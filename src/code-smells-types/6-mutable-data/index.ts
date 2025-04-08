class User {
    private name: string;
    private age: number;
    private addressList: string[] = ['Shanghai', 'Beijing'];

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.addressList = [];
    }

    getAddressList() {
        return [...this.addressList]; // 引用数据传递副本
    }

    addAge() {
        this.age += 1;
    }

    getName() {
        return this.name; // 基本数据没有引用
    }
}

function getAnotherUser(user: User) {
    return { ...user, name: 'Dada', age: 26 };
}


export {
    User,
    getAnotherUser
}
