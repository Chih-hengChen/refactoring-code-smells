interface CustomerInfo {
    id: string;
    name: string;
    address: string;
}

interface ProductInfo {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface OrderDetails {
    discount: number;
    taxRate: number;
}

function processOrderRefactored(
    customer: CustomerInfo,
    product: ProductInfo,
    order: OrderDetails
) {
    const subtotal = product.quantity * product.price;
    const discountAmount = subtotal * order.discount;
    const taxAmount = (subtotal - discountAmount) * order.taxRate;
    const totalMoney = subtotal - discountAmount + taxAmount;

    return {
        customerId: customer.id,
        customerName: customer.name,
        productId: product.id,
        totalMoney,
    }
}

export {
    processOrderRefactored
}