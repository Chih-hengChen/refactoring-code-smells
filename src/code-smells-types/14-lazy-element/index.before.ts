/**
 * 坏味道名称：累赘的元素
 * 
 * 识别方式：
 *  1.1：代码中存在但没有实际价值的类、方法或变量
 *  1.2：冗余委托和冗余变量
 * 
 */

export function calculateTotal(a: number, b: number) {
    const result = a + b; // 冗余的变量
    return result;
}

// User 类型定义
export interface User {
    id: number;
    name: string;
}

// UserRepository.ts
export class UserRepository {
    findUser(id: number): User {
        // 模拟接口调用
        return { id, name: "Alice" };
    }
}

// UserService.ts
export class UserService {
    constructor(private repository: UserRepository) { }

    // 冗余方法：直接委托给 UserRepository
    getUser(id: number): User {
        return this.repository.findUser(id);
    }
}

// UserComponent.ts
// 真实处理user信息的地方
