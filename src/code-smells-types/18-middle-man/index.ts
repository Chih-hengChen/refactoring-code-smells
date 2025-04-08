// Department 类（保持封装）
export class Department {
    constructor(private name: string, private manager: string) { }

    getName(): string {
        return this.name;
    }

    getManager(): string {
        return this.manager;
    }
}

// Person 类（直接提供 Department 访问）
export class Person {
    constructor(private department: Department) { }

    getDepartment(): Department {
        return this.department;
    }
}