import { User } from "./index.before";

export function calculateTotal(a: number, b: number): number {
    return a + b; // 直接返回计算结果
}

// 重构前架构：
// Component → UserService（透传层） → UserRepository（真实数据源）

// 重构后架构：
// Component → UserRepository（直接访问）

// UserRepository.ts
// 客户端直接使用 UserRepository，不再依赖 UserService
export class UserRepository {
    findUser(id: number): User {
        return { id, name: "Alice" };
    }
}
