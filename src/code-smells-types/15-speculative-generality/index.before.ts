/**
 * 坏味道名称：夸夸奇谈通用性
 * 
 * 企图以各式各样的钩子和特殊情况来处理一些非必要的事情就会出现
 * 如果函数和类的唯一用户是测试用例，也应该删掉
 * 
 * 识别方式：
 *  1.1：未被使用或实现的接口或方法
 *  1.2：多余的配置参数
 *  1.3：预留其他配置参数
 * 
 */

// 接口中存在未使用的方法
interface DataProcessor {
    process(data: string): string;
    saveToDB(data: string): void; // 从未被实现类使用
}

// 多余的配置参数
function formatText(
    text: string,
    options: { isCaseSensitive?: boolean } // 参数从未被使用
): string {
    return text.toUpperCase();
}

class TextProcessor implements DataProcessor {
    process(data: string) {
        return formatText(data, { isCaseSensitive: true });
    }

    // 实现未使用的接口方法
    saveToDB(data: string) {
        throw new Error("Method not implemented");
    }
}

// 未来预留的多余参数
const createDefaultConfig = (
    includeBackup: boolean = false // 参数从未被使用
) => ({ timeout: 1000 });
