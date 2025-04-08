/**
 * 坏味道名称：过长函数
 * 
 * 识别方式：
 *  1.1：行数过长（一般大于50行）
 *  1.2：单一职责原则（SRP）
 *  1.3：过多的条件表达式、循环或者switch
 * 
 * 
 * (不同公司对于函数长度的定义都不同，所以1.1没有样例)
 * 一些长度建议：
 * 通用函数：一个函数最好不要超过 20-30 行。
 * 复杂逻辑：如果一个函数必须包含复杂逻辑，可以适当放宽到 50 行以内。
 * 短小函数：单一功能的简单函数通常可以控制在 10 行以内
 * 
 */


const serviceTypeSelected = 'professional';
const durationTypeSelected = 'year';
const durationAmountSelected = 2;
const buyConfig = {
    button: [],
    price: 0,
    unit: 'cny',
    discount: ''
};

const axios = {
    post: (url, param) => { }
}


// 这里只是模拟询价场景,真实业务场景比这复杂的多
async function fetchPrice() {
    // 构建请求参数
    const requestData = {
        serviceType: serviceTypeSelected,
        purchaseDuration: durationAmountSelected,
        periodType: durationTypeSelected,
        userId: sessionStorage.getItem('userId'),
        // xxx 可能会有其他参数
    };

    // 步骤1：请求价格数据
    try {
        const response: any = await axios.post('/api/get-service-price', requestData);

        if (response.data.success) {
            const { price, discount } = response.data;

            // 步骤2：处理并展示价格
            buyConfig.price = price;
            buyConfig.discount = discount;

            // 步骤3：错误处理
        } else {
            console.error('Failed to fetch price');
            alert('Could not retrieve price data. Please try again.');
        }
    } catch (error) {
        console.error('Error while fetching price data:', error);
        alert('An error occurred. Please try again later.');
    }
}

export {
    serviceTypeSelected,
    durationAmountSelected,
    durationTypeSelected,
    buyConfig,
    axios
}