/**
 * 坏味道名称：过长参数列表
 * 
 * 识别方式：
 *  1.1：参数列表超过5个
 *  1.2：无用参数（参数传过来根本没有使用到
 * 
 */

function processOrder(
    customerId: string,
    customerName: string,
    customerAddress: string,
    productId: string,
    productPrice: number,
    productName: string,
    quantity: number,
    discount: number,
    taxRate: number
) {
    const subtotal = quantity * productPrice;
    const discountAmount = subtotal * discount;
    const taxAmount = (subtotal - discountAmount) * taxRate;
    const totalMoney = subtotal - discountAmount + taxAmount;
    return {
        customerId,
        customerName,
        productId,
        totalMoney,
    }
}

export {
    processOrder
}
