// userInfo.service.ts
// 将用户相关的信息封装到服务里。然后在其他组件中依赖注入
interface userInfo {
    userId: string,
    subscriptionType: string,
};

function fetchUserInfo() {
    return {
        userId: 'Eric-Chen',
        subscriptionType: 'professional',
    }
}

async function initUserInfo() {
    const response: userInfo = await fetchUserInfo();
    this.userInfo = response;
}

function getUserInfo() {
    return this.userInfo;
}

function getUserInfoByKey(key) {
    return this.userInfo[key];
}

// home.component.ts;
const UserInfo = getUserInfo();
const userSubscriptionType = getUserInfoByKey('subscriptionType');

export {
    UserInfo,
    userSubscriptionType
};

// 如果服务通过流水线动态在window对象上挂载参数
// 可以在utils服务中封装使用，避免各个组件对window对象的使用和修改
// utils.ts
function getServiceParams(params: string) {
    const serviceParam = window['service_key'];
    if (typeof serviceParam !== 'undefined') {
        return serviceParam[params];
    }
    return null;
}