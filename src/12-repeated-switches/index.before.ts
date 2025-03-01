/**
 * 坏味道名称：重复的switch
 * 
 * 在不同的地方反复使用同一的switch逻辑
 * 导致想增加一个分支时，必须找到所有的switch逐一更新
 * 
 * 识别方式：
 *  1.1：相同的switch逻辑
 * 
 * 重复的switch可以使用 多态 或 映射表 来进行重构
 */

enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

function getOrderMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is pending.";
        case OrderStatus.Shipped:
            return "Your order has been shipped.";
        case OrderStatus.Delivered:
            return "Your order has been delivered.";
        case OrderStatus.Cancelled:
            return "Your order has been cancelled.";
        default:
            return "Unknown status.";
    }
}
// 相同的switch逻辑
function handleOrder(status: OrderStatus): void {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Notify user about order processing.");
            break;
        case OrderStatus.Shipped:
            console.log("Send tracking number to user.");
            break;
        case OrderStatus.Delivered:
            console.log("Request feedback from user.");
            break;
        case OrderStatus.Cancelled:
            console.log("Process refund for the user.");
            break;
        default:
            console.log("Invalid order status.");
    }
}

export {
    OrderStatus
}