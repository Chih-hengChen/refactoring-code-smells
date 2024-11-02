/**
 * 坏味道名称：重复代码
 * 
 * 识别方式：
 *  1.1：重复的代码块或函数 (一般出现在几个文件当中)
 *  1.2：承担同样功能的代码块或函数
 * 
 */

// 很常见的就是在 a.ts 中有这样一段代码
// 而在 b.ts 中同样也有这样一段代码
// 将其提取出去到一个工具类里面供所有组件使用
function setNameAndAge(dataArray: any[]) {
    dataArray.forEach(item => {
        item.label = `${item.name}-${item.age}`;
    });
}


// 这就是承担相同功能的代码，都是给数组对像设一个label标签
// 同样也可以抽取出来到工具类里边
function setNameAndAddress(dataArray: any[]) {
    dataArray.forEach(item => {
        item.label = `${item.name}-${item.address}`;
    });
}

export {
    setNameAndAge,
    setNameAndAddress
}