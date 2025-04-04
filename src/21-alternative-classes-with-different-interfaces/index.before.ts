/**
 * 坏味道名称：异曲同工的类
 * 
 * 多个类做着非常相似的事情，却没有共用代码。
 * 
 * 识别方式：
 *  1.1：类与类之间功能相似
 * 
 */

// 文件格式不同但类功能相似
export class PdfExporter {
    export(data: string): string {
        return `Exporting PDF with content: ${data}`;
    }

    format(data: string): string {
        return `**${data}**`;
    }
}

export class WordExporter {
    export(data: string): string {
        return `Exporting Word with content: ${data}`;
    }

    format(data: string): string {
        return `**${data}**`;
    }
}
