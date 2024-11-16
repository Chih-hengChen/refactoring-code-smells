import {
    serviceTypeSelected,
    durationAmountSelected,
    durationTypeSelected,
    buyConfig,
    axios
} from './index.before';

const Utils = {
    showError: (message) => { }
}

// 获取请求参数
function buildRequestParam() {
    return {
        serviceType: serviceTypeSelected,
        purchaseDuration: durationAmountSelected,
        periodType: durationTypeSelected,
        userId: sessionStorage.getItem('userId'),
    };
}

// 发送请求并获取价格
async function fetchPriceData(requestData) {
    try {
        const response: any = await axios.post('/api/get-service-price', requestData);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
}

// 渲染价格数据
function renderPriceData(data) {
    if (data.status === 200) {
        const { price, discount } = data;
        buyConfig.price = price;
        buyConfig.discount = discount;
    } else {
        throw Error('Failed to fetch price');
    }
}

// 主流程：获取价格并更新配置
async function fetchPrice() {
    const requestData = buildRequestParam(); // 构建请求参数
    try {
        const priceData = await fetchPriceData(requestData); // 询价
        renderPriceData(priceData); // 渲染页面
    } catch (error) {
        Utils.showError(error.message);
    }
}