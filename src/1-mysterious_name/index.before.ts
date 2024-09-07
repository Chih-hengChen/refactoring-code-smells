/**
 * 坏味道名称：神秘命名
 * 
 * 识别方式：
 *  1.1：变量和函数名不能见名知意
 *  1.2：奇怪的缩写
 *  1.3：不统一的命名风格
 * 
 */

function z(x: number, y: number): number {
    // 问题：看见函数名称不清楚这函数是要做什么
    return x * y;
}

function cntSUm(s_Arr: any[], k: string) {
    // 问题：驼峰和下划线一起使用不统一，缩写奇怪
    let cnt = 0;
    s_Arr.forEach(i => {
        if (Object.prototype.hasOwnProperty.call(i, k)) {
            cnt++;
        }
    });
    return cnt;
}

export {
    z,
    cntSUm
};