/**
 * 坏味道名称：纯数据类
 * 
 *  
 * 识别方式：
 *  1.1：仅有字段，没有方法
 *  1.2：充当数据容器的角色
*/

export class User {
    constructor(public firstName: string, public lastName: string) { }
}

// 业务逻辑在外部函数中处理
export function getFullName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
}
