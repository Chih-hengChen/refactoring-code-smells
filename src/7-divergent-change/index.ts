// 将UserAccount类拆分如下
// 提升代码的可维护性，降低未来修改的成本。
class UserService {
    updateUserProfile() { }
    isAuthentication() { }
}

// 这里用户输入可能会来回调用输入校验，所以提炼类，搬移函数来分开逻辑
class UserValidator {
    validateUserData() { }
}

class EmailService {
    sendEmailVerification() { }
}

// 如果函数内部混合了两类处理逻辑，应该先提炼函数，再进行逻辑拆分。比如
function btnClick(data) {
    // 职责1：数据格式验证和转换
    if (!data || typeof data !== 'object') {
        throw new Error("数据格式错误");
    }
    const processedData = {
        id: data.id,
        name: data.name.trim(),
        value: data.value * 100 // 将数值转换为分单位
    };

    // 职责2：发送数据到服务器
    fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData)
    })
        .then(response => {
            if (!response.ok) throw new Error("提交失败");
            return response.json();
        })
        .then(result => {
            // 职责3：更新UI状态（甚至更多混杂逻辑）
            const statusDiv = document.getElementById('status') as HTMLElement;
            statusDiv.textContent = '成功提交！';
            statusDiv.style.color = 'green';
        })
        .catch(error => {
            console.error('提交错误:', error);
            const statusDiv = document.getElementById('status') as HTMLElement;
            statusDiv.textContent = '提交失败: ' + error.message;
            statusDiv.style.color = 'red';
        });
}
// 将上述函数分离出来重构如下
// 职责1：数据预处理
function validateAndProcessData(data) {
    if (!data || typeof data !== 'object') {
        throw new Error("数据格式错误");
    }
    return {
        id: data.id,
        name: data.name.trim(),
        value: data.value * 100
    };
}

// 职责2：网络通信
async function sendDataToServer(processedData) {
    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData)
    });
    if (!response.ok) throw new Error("提交失败");
    return response.json();
}

// 职责3：UI反馈
function updateUIStatus(success, message) {
    const statusDiv = document.getElementById('status') as HTMLElement;
    statusDiv.textContent = message;
    statusDiv.style.color = success ? 'green' : 'red';
}

// 主函数：协调各职责
async function newBtnClick(data) {
    try {
        const processedData = validateAndProcessData(data);
        const result = await sendDataToServer(processedData);
        updateUIStatus(true, '成功提交！');
    } catch (error) {
        console.error('提交错误:', error);
        updateUIStatus(false, `提交失败: ${error.message}`);
    }
}
