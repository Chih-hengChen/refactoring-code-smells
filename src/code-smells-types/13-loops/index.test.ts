import {
    generateProductReport as generateProductReportBefore,
    findBusyEmployees as findBusyEmployeesBefore,
    processOrders as processOrdersBefore,
    Product,
    Employee,
    Order,
} from './index.before';

import {
    generateProductReport as generateProductReportAfter,
    findBusyEmployees as findBusyEmployeesAfter,
    processOrders as processOrdersAfter,
} from './index';

describe('Loops Refactoring Tests', () => {
    // 1. 过长的循环语句测试
    describe('Long Loop', () => {
        const products: Product[] = [
            { id: 1, name: "Laptop", price: 999.99, inStock: true },
            { id: 2, name: "Mouse", price: 25.50, inStock: false },
        ];

        const expectedReport = [
            "Product ID: 1, Name: Laptop, Status: In Stock, Price: $999.99",
            "Product ID: 2, Name: Mouse, Status: Out of Stock, Price: $25.50"
        ].join("\n");

        test('Before: should generate product report', () => {
            expect(generateProductReportBefore(products)).toBe(expectedReport);
        });

        test('After: should generate product report', () => {
            expect(generateProductReportAfter(products)).toBe(expectedReport);
        });
    });

    // 2. 嵌套循环测试
    describe('Nested Loop', () => {
        const employees: Employee[] = [
            { id: 1, name: "Alice", tasks: ["Task1", "Task2", ""] },
            { id: 2, name: "Bob", tasks: ["Task1"] },
            { id: 3, name: "Charlie", tasks: ["Task1", "Task2", "Task3"] },
        ];

        const expectedBusy = ["Alice", "Charlie"];

        test('Before: should find busy employees', () => {
            expect(findBusyEmployeesBefore(employees, 2)).toEqual(expectedBusy);
        });

        test('After: should find busy employees', () => {
            expect(findBusyEmployeesAfter(employees, 2)).toEqual(expectedBusy);
        });
    });

    // 3. 循环内承担过多职责测试
    describe('Multiple Responsibilities', () => {
        const orders: Order[] = [
            { id: 1, amount: 50.75, customer: "Alice" },
            { id: 2, amount: 0, customer: "Bob" },
            { id: 3, amount: 25.25, customer: "Charlie" },
        ];

        const expectedSummary = [
            "Order 1 for Alice: $50.75",
            "Order 3 for Charlie: $25.25",
            "Total: $76.00"
        ].join("\n");

        test('Before: should process orders', () => {
            expect(processOrdersBefore(orders)).toBe(expectedSummary);
        });

        test('After: should process orders', () => {
            expect(processOrdersAfter(orders)).toBe(expectedSummary);
        });
    });
});