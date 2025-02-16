// 封装Product类
class Product {
    constructor(private price: number, private quantity: number) { }

    // 计算总金额
    get totalAmount(): number {
        return this.price * this.quantity;
    }

    // 更新价格
    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }

    // 更新数量
    updateQuantity(newQuantity: number): void {
        this.quantity = newQuantity;
    }

    // 获取价格
    getPrice(): number {
        return this.price;
    }

    // 获取数量
    getQuantity(): number {
        return this.quantity;
    }
}

// 封装PhoneNumber类
enum AreaCode {
    china = '+86'
    // 略..
}
class PhoneNumber {
    private areaCode: AreaCode;
    private number: string;
}

// 封装日期类
class DateFormatter {
    private date: Date;

    constructor(dateString: string) {
        this.date = new Date(dateString);
    }

    // 格式化日期为字符串
    toFormattedString(): string {
        return this.date.toLocaleDateString();
    }

    // 获取日期对象
    getDate(): Date {
        return this.date;
    }

    // 可以增加更多日期处理功能，比如转换为不同格式
    toISOFormat(): string {
        return this.date.toISOString();
    }
}


// 使用枚举类代替魔鬼数字，更加语义化表示状态并可维护
enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
}
const orderStatus: OrderStatus = OrderStatus.Pending;
