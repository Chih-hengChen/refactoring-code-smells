/**
 * 坏味道名称：中间人
 * 
 * 某个类的接口有一半的函数都委托给其他类，就是过度委托。
 * 
 * 识别方式：
 *  1.1：类自身未承担相应的责任
 *  1.2：过度委托其他类的方法
 * 
 */

// Department 类
export class Department {
    constructor(private name: string, private manager: string) { }

    getName(): string {
        return this.name;
    }

    getManager(): string {
        return this.manager;
    }
}

// Person 类（中间人）
export class Person {
    private department: Department;

    constructor(department: Department) {
        this.department = department;
    }

    getDepartmentName(): string {
        return this.department.getName();
    }

    getDepartmentManager(): string {
        return this.department.getManager();
    }
}
