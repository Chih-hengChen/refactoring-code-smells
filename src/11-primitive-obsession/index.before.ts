/**
 * 坏味道名称：基本类型偏执
 * 
 * 过度使用基本类型的数据而不是更合适的抽象来表达一些数据概念
 * 
 * 识别方式：
 *  1.1：缺乏类型封装
 *  1.2：多个基本类型表示同一领域概念
 *  1.3：频繁的类型转换或解析
 *  1.4：代表状态的魔鬼数字
 * 
 */

// 表示产品相关信息，却大量使用基本数据类型
let price: number;
let quantity: number;
let totalAmount: number;

// 应封装为 PhoneNumber 类
let areaCode = '+86';
let userPhone = "123-456-7890";

// 频繁进行类型转换
let dateString: string = '2024-01-01';
let formattedDate: string = new Date(dateString).toLocaleDateString();

// 使用魔鬼数字
let orderStatus = 1; // 1=已支付，2=已发货，3=已完成

export {
    orderStatus
}

