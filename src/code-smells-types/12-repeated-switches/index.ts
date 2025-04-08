import { OrderStatus } from "./index.before";

// 维护映射表
const OrderMessages: Record<OrderStatus, string> = {
    [OrderStatus.Pending]: "Your order is pending.",
    [OrderStatus.Shipped]: "Your order has been shipped.",
    [OrderStatus.Delivered]: "Your order has been delivered.",
    [OrderStatus.Cancelled]: "Your order has been cancelled.",
};

const OrderHandlers: Record<OrderStatus, () => void> = {
    [OrderStatus.Pending]: () => console.log("Notify user about order processing."),
    [OrderStatus.Shipped]: () => console.log("Send tracking number to user."),
    [OrderStatus.Delivered]: () => console.log("Request feedback from user."),
    [OrderStatus.Cancelled]: () => console.log("Process refund for the user."),
};

function getOrderMessage(status: OrderStatus): string {
    return OrderMessages[status] ?? "Unknown status.";
}

function handleOrder(status: OrderStatus): void {
    OrderHandlers[status]?.();
}
