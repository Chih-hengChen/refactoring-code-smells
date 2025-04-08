import { Product, Employee, Order } from "./index.before";
// 1. 过长的循环语句
export const formatProduct = (product: Product): string =>
    `Product ID: ${product.id}, Name: ${product.name}, Status: ${product.inStock ? "In Stock" : "Out of Stock"}, Price: $${product.price.toFixed(2)}`;

export function generateProductReport(products: Product[]): string {
    return products.map(formatProduct).join("\n");
}

// 2. 嵌套循环
export const countValidTasks = (tasks: string[]): number =>
    tasks.filter(task => task.length > 0).length;

export function findBusyEmployees(employees: Employee[], minTasks: number): string[] {
    return employees
        .filter(employee => countValidTasks(employee.tasks) >= minTasks)
        .map(employee => employee.name);
}

// 3. 循环内承担过多职责
export const isValidOrder = (order: Order): boolean => order.amount > 0;
export const formatOrder = (order: Order): string => `Order ${order.id} for ${order.customer}: $${order.amount}`;
export const calculateTotal = (orders: Order[]): number => orders.reduce((sum, order) => sum + order.amount, 0);

export function processOrders(orders: Order[]): string {
    const validOrders = orders.filter(isValidOrder);
    const orderLines = validOrders.map(formatOrder).join("\n");
    const total = calculateTotal(validOrders);
    return `${orderLines}\nTotal: $${total.toFixed(2)}`;
}