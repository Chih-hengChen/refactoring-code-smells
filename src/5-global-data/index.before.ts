/**
 * 坏味道名称：全局数据
 * 
 * 识别方式：
 *  1.1：全局对象的使用（window、global等）
 *  1.2：多个地方修改全局变量
 *  1.3：不封装状态共享
 * 
 */

// main.ts
const userInfo = {
    userId: '',
    subscriptionType: '',
};

window['userInfo'] = userInfo; // 不封装状态共享

function fetchUserInfo() {
    return {
        userId: 'Eric-Chen',
        subscriptionType: 'professional',
    }
}

async function initUserInfo() {
    const response = await fetchUserInfo();
    window['currentRegion'] = 'cn-north-4'; // 随意修改
    window['userInfo'] = response; // 对于全局对象的使用
}

initUserInfo();
const UserInfo = window['userInfo'];

export {
    UserInfo
};
