/**
 * 坏味道名称：可变数据
 * 
 * 在一处更新数据，却没有意识到另一处期望不同的数据。
 * 
 * 识别方式：
 *  1.1：公共字段的暴露
 *  1.2：向外部传递内部数据引用
 *  1.3：多个方法修改同一字段
 *  1.4：变量在传递中被修改
 * 
 * 
 * 函数式编程思想（数据永远不变）可解决该问题：
 *   如果要更新一个数据结构，返回一份新的数据副本，旧的数据保持不变。
 * 
 */

class User {
    public name: string; // 公共字段的暴露
    public age: number;
    public addressList: string[] = ['Shanghai', 'Beijing'];

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.addressList = [];
    }

    getType(type) {
        return this[type]; // 返回内部数据的引用
    }

    addAge() {
        this.age += 1; // 修改同一字段
    }

    resetAge() {
        this.age = 0; // 修改同一字段
    }
}

function getAnotherUser(user: User) {
    user.name = 'Dada'; // 变量在传递中被修改
    user.age = 26;
}

const userA = new User('Ash', 26);
userA.name = 'hsA'; // 随意被修改

const list = userA.getType('addressList');
list.push('Los Angle'); // 可以修改addressList的数据

const userB = getAnotherUser(userA);

export {
    User,
    getAnotherUser
}
