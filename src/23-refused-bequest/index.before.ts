/**
 * 坏味道名称：被拒绝的遗赠
 * 
 * 
 * 识别方式：
 *  1.1：子类继承了父类，但是只使用了部分功能，其他部分完全没有用
 *  1.2：子类重写了大多数方法，几乎没有复用父类逻辑
 *  1.3：父类变化对子类产生影响，但子类不需要这些变化。
 * 
 */

export class Animal {
    move(): string {
        return "Animal is moving";
    }

    makeSound(): string {
        return "Some generic sound";
    }
}

export class Dog extends Animal {
    bark(): string {
        return "Woof!";
    }

    // 子类完全不需要父类的 makeSound 方法，并且重写了
    makeSound(): string {
        return this.bark();
    }
}
