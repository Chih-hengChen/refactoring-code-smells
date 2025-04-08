/**
 * 坏味道名称：循环语句
 * 
 * 识别方式：
 *  1.1：过长的循环语句
 *  1.2：嵌套循环
 *  1.3：循环内承担过多职责
 * 
 */

export interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

export interface Employee {
    id: number;
    name: string;
    tasks: string[];
}

export interface Order {
    id: number;
    amount: number;
    customer: string;
}

// 1. 过长的循环语句
export function generateProductReport(products: Product[]): string {
    let report = "";
    for (let i = 0; i < products.length; i++) {
        report += "Product ID: " + products[i].id + ", Name: " + products[i].name + ", ";
        if (products[i].inStock) {
            report += "Status: In Stock, ";
        } else {
            report += "Status: Out of Stock, ";
        }
        report += "Price: $" + products[i].price.toFixed(2) + "\n";
    }
    return report;
}

// 2. 嵌套循环
export function findBusyEmployees(employees: Employee[], minTasks: number): string[] {
    const busyEmployees: string[] = [];
    for (let i = 0; i < employees.length; i++) {
        let taskCount = 0;
        for (let j = 0; j < employees[i].tasks.length; j++) {
            if (employees[i].tasks[j].length > 0) {
                taskCount++;
            }
        }
        if (taskCount >= minTasks) {
            busyEmployees.push(employees[i].name);
        }
    }
    return busyEmployees;
}

// 3. 循环内承担过多职责
export function processOrders(orders: Order[]): string {
    let summary = "";
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].amount > 0) {
            summary += `Order ${orders[i].id} for ${orders[i].customer}: $${orders[i].amount}\n`;
            total += orders[i].amount;
        }
    }
    summary += `Total: $${total.toFixed(2)}`;
    return summary;
}