import { Department as DepartmentBefore, Person as PersonBefore } from "./index.before";
import { Department as DepartmentAfter, Person as PersonAfter } from "./index";

describe('Refactoring Middle Man Test Suite', () => {
    describe('Person (Before Refactor)', () => {
        it('should delegate department info through middle man', () => {
            const dept = new DepartmentBefore('Engineering', 'Bob');
            const person = new PersonBefore(dept);

            // 测试中间人代理方法
            expect(person.getDepartmentName()).toBe('Engineering');
            expect(person.getDepartmentManager()).toBe('Bob');
        });
    });

    describe('Person (After Refactor)', () => {
        it('should directly expose department object', () => {
            const dept = new DepartmentAfter('Engineering', 'Bob');
            const person = new PersonAfter(dept);

            // 测试直接访问department对象
            expect(person.getDepartment().getName()).toBe('Engineering');
            expect(person.getDepartment().getManager()).toBe('Bob');
        });

        it('should maintain same data through different access pattern', () => {
            // 同时测试新旧版本确保数据一致性
            const oldDept = new DepartmentBefore('HR', 'Alice');
            const oldPerson = new PersonBefore(oldDept);

            const newDept = new DepartmentAfter('HR', 'Alice');
            const newPerson = new PersonAfter(newDept);

            expect(oldPerson.getDepartmentName()).toBe(newPerson.getDepartment().getName());
            expect(oldPerson.getDepartmentManager()).toBe(newPerson.getDepartment().getManager());
        });
    });
});