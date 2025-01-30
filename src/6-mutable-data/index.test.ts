import { User as UserBefore, getAnotherUser as getAnotherUserBefore } from './index.before';
import { User as UserAfter, getAnotherUser as getAnotherUserAfter } from './index';

describe('可变数据测试', () => {
    test('重构前：User 对象的字段可被外部修改', () => {
        const user = new UserBefore('Ash', 26);
        user.name = 'Modified'; // 直接修改公共字段
        expect(user.name).toBe('Modified'); // 被修改了

        const addressList = user.getType('addressList'); // 直接返回引用
        addressList.push('New York');
        expect(user.getType('addressList')).toContain('New York'); // 原数据被修改
    });

    test('重构前：getAnotherUser 直接修改传入的 User 对象', () => {
        const user = new UserBefore('Ash', 26);
        getAnotherUserBefore(user);
        expect(user.name).toBe('Dada'); // 原对象被修改
        expect(user.age).toBe(26);
    });

    test('重构后：User 对象的字段不可被外部修改', () => {
        const user = new UserAfter('Ash', 26);
        // @ts-expect-error name 是私有的，不能直接修改
        user.name = 'Modified';
        // TypeScript 会报错，因此这里不需要 `expect` 语句
    });

    test('重构后：getAddressList() 应返回副本，不影响原数据', () => {
        const user = new UserAfter('Ash', 26);
        const addressList = user.getAddressList();
        addressList.push('New York');

        expect(user.getAddressList()).not.toContain('New York'); // 确保原数据未被修改
    });

    test('重构后：getAnotherUser 应返回新对象，不修改原始 User 实例', () => {
        const user = new UserAfter('Ash', 26);
        const newUser = getAnotherUserAfter(user);

        expect(newUser.name).toBe('Dada');
        expect(newUser.age).toBe(26);
        expect(newUser).not.toBe(user); // 确保返回新对象
    });
});
