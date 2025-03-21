// 移除非必要接口
export class TextProcessor {
    process(data: string) {
        return formatText(data);
    }
}

// 移除未使用的参数
function formatText(text: string): string {
    return text.toUpperCase();
}

// 简化配置生成
const createDefaultConfig = () => ({ timeout: 1000 });
