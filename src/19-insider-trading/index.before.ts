/**
 * 坏味道名称：内幕交易
 * 
 * 模块之间大量交换数据，增加了模块之间的耦合。
 * 
 * 识别方式：
 *  1.1：暴露类的内部数据
 *  1.2：获取内部数据的引用
 * 
 */

// 直接暴露内部数据，允许外部直接修改持仓
export class Portfolio {
    private holdings: string[] = [];

    getHoldings(): string[] {
        return this.holdings; // 危险！返回内部数组引用
    }
}

export class StockTrader {
    executeTrade(portfolio: Portfolio, stock: string) {
        portfolio.getHoldings().push(stock); // 直接操作内部数据
    }
}